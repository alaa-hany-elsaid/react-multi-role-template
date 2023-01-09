import React from 'react'
import ReactDOM from 'react-dom/client'
import 'flowbite/dist/datepicker.min';
import 'flowbite/dist/flowbite.min';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './views/App.jsx'
import './css/index.css'
import {Provider} from "react-redux";
import store from "./core/state/store.js";
import {guestPages} from "./core/pages.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    ...guestPages ,

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
)
