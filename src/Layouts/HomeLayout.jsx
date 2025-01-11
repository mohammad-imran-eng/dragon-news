import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";
import MainNavbar from "../components/layout-components/MainNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar />
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="col-span-3">
                    <LeftNavbar />
                </aside>
                <section className="col-span-6">
                <Outlet />
                </section>
                <aside className="col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    ); 
};

export default HomeLayout;