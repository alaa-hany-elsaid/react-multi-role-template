import {Login} from "../views/pages/guest/login.jsx";
import {Register} from "../views/pages/guest/register.jsx";
// add every role's pages as an array then export it to use it in main file
const guestPages = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
];




export {guestPages}