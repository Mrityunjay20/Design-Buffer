export default function Custbuttons({text, callbackFunction}){

    return(<>
        <button
        className="text-right my-2 mx-4 bg-blue-700 hover:bg-blue-400 duration-300 px-4 py-2 rounded-sm text-white font-semibold border-gray-800"
        onClick={callbackFunction}
        >
        {text}
        </button>
    </>)
}