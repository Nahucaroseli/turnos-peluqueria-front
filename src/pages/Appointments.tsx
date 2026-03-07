import { useContext, useState } from "react";
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { TurnoContext } from "../context/turno.context";


export function Appointments(){

  const {turnos} = useContext(TurnoContext)!;

  const [openTurnoForm,setOpenTurnoForm] = useState(false);



        return (
                <div className='h-screen flex flex-col'>
                    <Navbar></Navbar>
                    <div className="flex flex-1 overflow-hidden">
                        <Aside></Aside>
                        <main className="flex-1 overflow-y-auto p-6 mt-20">
                                <h1 className="text-2xl">Turnos</h1>
                                <button onClick={()=> setOpenTurnoForm(!openTurnoForm)} className="absolute right-3 top-27 cursor-pointer transition hover:scale-105">Asignar Turno</button>
                                <div></div>
                        </main>
                    </div>
        
                </div>
            )
  
}