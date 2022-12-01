import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../js/App';
import MovieDetailsPage from './../pages/MovieDetailsPage'
import ErrorPage from "../pages/error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App/>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "movie/:movieId",
        element: <MovieDetailsPage/>,
    },
])

export default router