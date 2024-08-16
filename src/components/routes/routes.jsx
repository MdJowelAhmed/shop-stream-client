import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/Home";
import Login from "../authentication/Login";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Home></Home>
            },
        ]
    }
])

export default router