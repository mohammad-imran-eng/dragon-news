import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import MainNavbar from "../components/layout-components/MainNavbar";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '',
        element: <Navigate to={"/category/01"}/>
    },
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/category/:id',
                element: <MainNavbar />,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ],
    },
    {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }

])

export default router;