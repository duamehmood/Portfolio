
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";
import About from "../components/About";


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
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/project/:id',
                element: <ProjectDetails />
            },
            {
                path: '/contact',
                element: <Contact />
            },

        ]
    }
])


export default router
