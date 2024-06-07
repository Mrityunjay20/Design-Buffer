import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer";

export default function RootLayout(){

    return(<>
        <h1>This is RootLAYOUT</h1>
        <Outlet/>
        <FooterComponent/>
    </>)
}