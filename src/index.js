import ReactDOM from 'react-dom/client';
import './css/index.scss';
import {
    RouterProvider,
} from "react-router-dom";
import router from "./router/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
)
