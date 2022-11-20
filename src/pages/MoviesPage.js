//import MoviesCard from "../components/movies/MoviesCard";
import movieService from "../services/movieService";


async function MoviesPage() {
    let movies = await movieService.getMoviesList()
    console.log(movies)
    return <div>
       <h1>ali</h1>
    </div>
}

export default MoviesPage