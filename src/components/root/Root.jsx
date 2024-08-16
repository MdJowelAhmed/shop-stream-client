import { Outlet } from "react-router-dom";
import Navbar from "../shareComponents/Navbar";


const Root = () => {
    return (
        <div className="mx-12">
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;