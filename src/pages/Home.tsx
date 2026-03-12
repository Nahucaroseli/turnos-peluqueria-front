import { useContext, useEffect } from "react";
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { TurnoContext } from "../context/turno.context";

export function Home(){

    const currentDate = new Date();
    
    const {turnos} = useContext(TurnoContext)!;

    
    useEffect(()=>{

        console.log(turnos);

    });

    const formattedDateCustom = currentDate.toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        });

    return (
        <div className='h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex flex-1 overflow-hidden">
                <Aside></Aside>
                <main className="flex flex-col flex-1 overflow-y-auto p-6 mt-20 gap-y-7 overflow-hidden">
                        <h1 className="text-2xl">Inicio</h1>
                        <div className="h-50 bg-purple-300 md:w-200 rounded-xl flex flex-row overflow-hidden">
                            <div className="w-50 h-50  ml-3 flex flex-col justify-around h-40">
                                <h1 className="md:text-xl">Fecha del dia de hoy</h1>
                                <h1 className="text-2xl md:text-3xl break-normal">{formattedDateCustom}</h1>
                            </div>
                            <img src="/flower.png" className="w-50 opacity-40 object-contain relative left-90 top-13" alt="" />
                            <img src="/flower.png" className="w-50 opacity-40 object-contain relative left-12 -top-4" alt="" />
                            <img src="/flower.png" className="w-50 opacity-40 object-contain relative left-12 -top-4" alt="" />
                        </div>
                        <div className="flex-1 md:w-250 mt-10 overflow-hidden">
                            <h1 className="text-2xl">Proximos Turnos</h1>
                            {turnos.map((turno)=>{
                                const horario = new Date(turno.hora);
                                const hora = horario.getHours();
                                const minutos = horario.getMinutes();
                                return (
                                    <div key={turno.id} className="bg-white w-auto h-7 mt-9 rounded-xl h-18 flex flex-row justify-between md:w-140">
                                        <div className="flex flex-col">
                                            <h1 className="text-xl m-2">{turno.service.name}</h1>
                                            <div className="flex flex-row gap-x-5">
                                                <h2 className="ml-2">Cliente: {turno.client.name}</h2>
                                                <h2>Cel: {turno.client.phone}</h2>
                                            </div>

                                        </div>
                                        <div className="flex flex-col justify-center mr-2">
                                            <h2 className="">{hora}:{minutos} HS</h2>
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