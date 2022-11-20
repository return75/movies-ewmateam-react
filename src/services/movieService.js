import makeQueryString from '../scripts/make-query-string'
import axios from 'axios'

let BASE_URL = 'https://api.themoviedb.org/3'
let API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57'

export default {
    getMoviesList: (filter = {}) => {
        let queryString = makeQueryString(filter)
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&${queryString}`)
    },
    getGenres: () => {
        return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    },
    getMovieDetails: (movieId) => {
        return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    },
    getMovieCredits: (movieId) => {
        return  axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    }
}

