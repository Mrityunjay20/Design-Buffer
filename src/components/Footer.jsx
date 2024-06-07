import { portfolio } from "../utils/Links";

export default function FooterComponent(){

    return(
        <div className="w-full h-max bg-[#00000f] fixed  font-mono text-center bottom-0">
        <h1 className="text-white font-medium my-3">Made with ❤️ by <a className="text-light-blue-600 font-semibold hover:scale-125 hover:text-light-blue-400 duration-150" href={portfolio}>MJxSH</a></h1>
        </div>)
}