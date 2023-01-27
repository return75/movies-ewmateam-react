import React from "react";

import MoviesCard from "../components/movies/MovieCard";
import Grid from '@mui/material/Grid';
import movieService from "../services/movieService";
import MovieDatePicker from "../components/movies/MovieDatePicker";
import Pagination from "./Pagination"


class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            dateFilter: {},
            page: 1
        }
    }
    render() {
        return (
           <div className={'container'} >
               <MovieDatePicker filterMovies={this.filterMovies.bind(this)} />
               <Grid container spacing={2} sx={{pt: 8}}>
                   {this.state.movies.map((movie, index) =>
                       <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
                           <MoviesCard
                               id={movie.id}
                               image={movie.poster_path}
                               title={movie.title}
                               date={movie.release_date}>
                           </MoviesCard>
                       </Grid>
                   )}
               </Grid>
               <Pagination filterByPage={this.filterByPage.bind(this)} />
           </div>
        )
    }
    async filterMovies(startDate, endDate) {
        let start_date = this.formatDateToYYYY_MM_DD(startDate)
        let end_date = this.formatDateToYYYY_MM_DD(endDate)
        let filter = {
            "primary_release_date.gte": start_date,
            "primary_release_date.lte": end_date
        }
        this.setState({dateFilter: filter})
       let movies = await movieService.getMoviesList({...this.state.dateFilter, ...filter})
       this.setMovies(movies)
    }
    async filterByPage(page) {
        this.setState({page})
        let movies = await movieService.getMoviesList({ ...this.state.dateFilter, page: page})
        this.setMovies(movies)
    }
    formatDateToYYYY_MM_DD(date) {
        if(!date) return undefined
        let formatted = date.$d.toISOString().slice(0, 10)
        return formatted
    }
    setMovies(movies) {
        this.setState({movies: movies.data.results})
    }
    async componentDidMount() {
        let movies = await movieService.getMoviesList()
        this.setMovies(movies)
    }
}

export default MoviesPage
