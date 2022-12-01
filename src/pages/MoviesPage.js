import React from "react";

import MoviesCard from "../components/movies/MovieCard";
import Grid from '@mui/material/Grid';
import movieService from "../services/movieService";
//import MovieDatePicker from "../components/movies/MovieDatePicker";


class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    render() {
        return (
           <div className={'container'} >
               {/*<MovieDatePicker/>*/}
               <Grid container spacing={2} sx={{pt: 8}}>
                   {this.state.movies.map((movie, index) =>
                       <Grid item xs={6} sm={4} md={3} lg={2}>
                           <MoviesCard
                               key={index}
                               id={movie.id}
                               image={movie.poster_path}
                               title={movie.title}
                               date={movie.release_date}>
                           </MoviesCard>
                       </Grid>
                   )}
               </Grid>
           </div>
        )
    }
    async componentDidMount() {

        let movies = await movieService.getMoviesList()
        console.log('movies', movies)
        this.setState({movies: movies.data.results})

    }
}

export default MoviesPage