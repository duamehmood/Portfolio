
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Inside JSX:
<ToastContainer position="top-center" autoClose={3000} />

import { RouterProvider } from 'react-router-dom'
import router from './router/routes'

function App() {

  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
