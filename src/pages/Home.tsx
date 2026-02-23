import { useContext, useEffect } from "react";
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { ClientContext } from "../context/ClientContext";

export function Home(){

    const currentDate = new Date();
    
    const {clients} = useContext(ClientContext)!;

    
    useEffect(()=>{

        console.log(clients);

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
                        <div className="flex-1 md:w-250 bg-red-100 mt-10 overflow-hidden">
                            <h1 className="text-2xl">Proximos Turnos</h1>
                            {clients.map((client)=>{
                                return (
                                    <div key={client.id} className="bg-red-300 h-7 mt-9 rounded-xl">
                                        <h1 className="text-xl">{client.name}</h1>
                                    </div>
                                )
                            })}
                        </div>
                            
                </main>
            </div>
        </div>
    )
}