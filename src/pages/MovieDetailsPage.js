import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import movieService from "../services/movieService";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// const BootstrapButton = styled(Button)({
//     borderRadius: '1rem',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid #fff',
//     borderColor: '#ffffff',
// });

export default function MovieDetailsPage() {
    const params = useParams()
    const movieId = params.movieId
    const [movieDetails, setMovieDetails] = useState({})
    const [title, setTitle] = useState("")

    useEffect(() => {
        movieService.getMovieDetails(movieId).then(res => {
            setMovieDetails(res.data)
            setTitle(res.data.title)
        })
    }, [])

    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '3rem',
        fontWeight: 'lighter'
    };

    return (
        <div className="App bg-gradient h-full">
            <div className={'container text-white'} >
                <Stack spacing={8} direction="row" sx={{pt: 8}} style={{alignItems: 'center'}}>
                    <Button variant="outlined">Back</Button>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3" sx={{ ml: 8}} style={{textAlign: 'left'}}>{title}</Typography>
                    </ThemeProvider>
                </Stack>
                <Grid container spacing={2} sx={{pt: 8}}>
                    <Grid item xs={5}>
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt=""/>
                    </Grid>
                    <Grid item xs={7} sx={{pl: 12}}>
                        <pre>{JSON.stringify(Object.keys(movieDetails))}</pre>
                    </Grid>
                </Grid>
                <div>{movieDetails.overview}</div>
            </div>
        </div>
    )
}
