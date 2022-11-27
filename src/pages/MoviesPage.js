import React from "react";

import MoviesCard from "../components/movies/MoviesCard";
import movieService from "../services/movieService";

class MoviesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <div className={'d-flex flex-wrap'}>
                {this.state.movies.map(movie =>
                    <MoviesCard
                        image={movie.backdrop_path}
                        title={movie.title}
                        date={movie.release_date}>
                    </MoviesCard>
                )}
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