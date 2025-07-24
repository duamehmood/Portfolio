
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/sections/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            },

        ]
    }
])


export default router
