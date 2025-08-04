
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/sections/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Services from "../pages/Services";


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
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contact />
            },

        ]
    }
])


export default router
