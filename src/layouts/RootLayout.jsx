import { Link, Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout(){

    return(<div className="scroll-smooth duration-75 snap-mandatory snap-y scroll-snap-align: start;">
        <Navbar/>
        <Outlet/>
        <FooterComponent/>
    </div>)
}