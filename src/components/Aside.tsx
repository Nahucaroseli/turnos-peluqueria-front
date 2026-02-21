import { Link } from "react-router-dom";

export function Aside(){
    return (

        <div className="hidden md:flex flex-col items-center h-screen w-16 bg-white pt-40 gap-y-10 z-100">

            <Link to={"/"} className="fa-solid fa-house text-xl cursor-pointer hover:scale-120 transition"></Link >
            
            <Link to={"/calendario"} className="fa-solid fa-user text-xl cursor-pointer hover:scale-120 transition"></Link >

            <Link to={"/servicios"} className="fa-solid fa-scissors text-xl cursor-pointer hover:scale-120 transition"></Link >
            
            <Link to={"/estadisticas"} className="fa-solid fa-chart-line text-xl cursor-pointer hover:scale-120 transition"></Link >
            
            <Link to={"/configuracion"} className="fa-solid fa-gear text-xl cursor-pointer hover:scale-120 transition mt-auto mb-6"></Link >

        </div>

    )

}