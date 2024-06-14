export default function Custbuttons({text, callbackFunction}){

    return(<>
        <button
        className="text-right mx-4 bg-green-700 hover:bg-green-500 duration-300 px-4 py-2 rounded-lg text-white font-semibold border-gray-800"
        onClick={callbackFunction}
        >
        {text}
        </button>
    </>)
}