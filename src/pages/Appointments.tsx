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
                                <div className="flex flex-col">
                                    {turnos.map((turno)=>{
                                        const horario = new Date(turno.hora);
                                        const hora = horario.getHours();
                                        const minutos = horario.getMinutes();
                                        return (
                                                <div key={turno.id} className="bg-white w-auto h-7 mt-9 rounded-xl h-18 flex flex-row md:w-140 overflow-hidden">
                                                    <div className="w-1 bg-yellow-500"></div>
                                                    <div className="flex flex-row justify-between w-full md:w-140">
                                                        <div className="flex flex-col">
                                                            <h1 className="text-xl m-2">{turno.serviceId.name}</h1>
                                                            <div className="flex flex-row gap-x-5">
                                                                <h2 className="ml-2">Cliente: {turno.clientId.name}</h2>
                                                                <h2>Cel: {turno.clientId.phone}</h2>
                                                            </div>

                                                        </div>
                                                        <div className="flex flex-col justify-center mr-2">
                                                            <h2 className="">{hora}:{minutos} HS</h2>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                    })}
                                </div>
                        </main>
                    </div>
        
                </div>
            )
  
}