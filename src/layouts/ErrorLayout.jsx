import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer";

export default function ErrorLayout(){

    return(<>
        <h1>This is errorLAYOUT</h1>
        <Outlet/>
        <FooterComponent/>
    </>)
}