import { useState } from "react"
import { Link } from "react-router-dom";

export function Navbar(){

    const [isOpen,setIsOpen] = useState(false);

    return(  
        <>
        <div className="flex flex-row w-full h-16 bg-white p-1 gap-x-3 z-1000 absolute shadow-md">
            <img src="/Logo.png" alt="" className="w-15 h-15"/>
            <h1 className="text-2xl mt-3">Peluqueria Vimix</h1>
            <i onClick={(e)=>{e.preventDefault(); setIsOpen(!isOpen);}} className="absolute right-3 fa-solid cursor-pointer fa-bars text-2xl mt-4 md:invisible"></i>
        </div>
        
        <div className={`fixed ${isOpen? "translate-x-0":"translate-x-full"} z-1 transform transition duration-800 ease-in-out flex flex-col gap-y-20 w-full bg-white h-screen pt-30 items-center gap-x-5`}>
            <Link to={"/"} className="text-xl cursor-pointer hover:scale-120 transition">Home</Link >
            
            <Link to={"/calendario"} className=" text-xl cursor-pointer hover:scale-120 transition">Calendario</Link >

            <Link to={"/servicios"} className=" text-xl cursor-pointer hover:scale-120 transition">Servicios</Link >
            
            <Link to={"/estadisticas"} className=" text-xl cursor-pointer hover:scale-120 transition">Estadisticas</Link >
            
            <Link to={"/configuracion"} className=" text-xl cursor-pointer hover:scale-120 transition mb-6">Configuracion</Link >
        </div>

        </>
    )
}


