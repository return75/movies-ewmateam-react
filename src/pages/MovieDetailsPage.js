import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import movieService from "../services/movieService";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {hover} from "@testing-library/user-event/dist/hover";


const BackButton = styled(Button)({
    borderRadius: '2rem',
    fontWeight: 'lighter',
    fontSize: 20,
    padding: '8px 16px',
    border: '1px solid #fff',
    color: '#fff',
});

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
    theme.typography.h4 = {
        fontWeight: 'lighter',
        fontSize: '2.5rem',
    }
    theme.typography.h6 = {
        fontWeight: 'lighter',
        fontSize: '1rem',
    }

    const goBack = () => {
        window.history.back()
    }

    return (
        <div className="App bg-gradient h-full">
            <div className={'container text-white'} >
                <Stack spacing={6} direction="row" sx={{pt: 8}} style={{alignItems: 'center'}}>
                    <BackButton variant="outlined" onClick={goBack}>Back</BackButton>
                    <ThemeProvider theme={theme}>
                        <Stack style={{textAlign: 'left'}} sx={{ ml: 8}}>
                            <Typography variant="h4">{title}</Typography>
                            <Typography variant="h6">{movieDetails.tagline}</Typography>
                        </Stack>
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
