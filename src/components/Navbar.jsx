import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <div id="Navbar" className="fixed bg-inherit flex w-full py-8 px-4">
            <Link to={'/'} id="logo" className="text-left flex-auto text-white mx-8 font-cavet text-3xl">designBuffer</Link>
            <div id="login-button" className="text-right flex-auto ">
                <Link to={'/dashboard'} className="mx-6 px-4 hover:border hover:border-white border-2 font-semibold py-2 hover:bg-black bg-white text-base duration-300 hover:text-white text-black rounded-xl shadow-2xl shadow-black">Login</Link>
            </div>
        </div>
    )
}