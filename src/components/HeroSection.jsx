export default function HeroSection({bgcolour}){
    const properties = "w-full lg:h-screen sm:h-max md:h-max flex items-center " + `${bgcolour}`

    return(<>
        <div className={properties}>
            <h1 className="lg:w-4/6 sm:w-full text-white mt-16 font-extrabold uppercase mx-auto text-justify lg:text-9xl md:text-5xl ">The <br/> easiest Creative<span className="mx-8 text-gray-300">Ops</span> tool yet.</h1>
        </div>
    </>)
}