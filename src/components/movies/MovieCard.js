import {Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

const MovieCard = (props) => {
    return  <Link to={`movie/${props.id}`}>
        <Card sx={{background: "none", boxShadow: "none"}}>
            <CardMedia
                height="300"
                component="img"
                image={`https://image.tmdb.org/t/p/original/${props.image}`}
            />
            <Box sx={{m: 2, color: 'white'}}>
                <Typography variant="body2" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {props.date.replaceAll('-', ' / ')}
                </Typography>
            </Box>
        </Card>
    </Link>
}
export default MovieCard