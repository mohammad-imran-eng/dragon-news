import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[#f3f3f3]">
            <header className="py-3 w-11/12 mx-auto">
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;