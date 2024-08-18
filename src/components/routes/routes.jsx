import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Products from "../../pages/products/Products";
import AddProducts from "../../pages/addProducts/AddProducts";

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
                path:"/products",
                element: <Products/>,
                loader:()=>fetch(`${import.meta.env.VITE_API_URL}/products`)
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/add",
                element: <AddProducts/>
            },
            {
                path:"/register",
                element: <Register/>
            },
        ]
    }
])

export default router