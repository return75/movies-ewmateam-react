import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import movieService from "../services/movieService";

export default function MovieDetailsPage() {
    const params = useParams()
    const movieId = params.movieId
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        movieService.getMovieDetails(movieId).then(res => {
            setMovieDetails(res.data)
        })
    }, [])

    return (
        <div>
           <pre>
               {JSON.stringify(movieDetails)}
           </pre>
        </div>
    )
}