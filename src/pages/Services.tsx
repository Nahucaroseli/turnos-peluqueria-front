import { useContext, useEffect } from "react"
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { ServiceContext } from "../context/ServiceContext"

export function Services(){

    const {services} = useContext(ServiceContext)!;

    
    useEffect(()=>{
        
        console.log(services);
    })


    return (
        <div className='h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex flex-1 overflow-hidden">
                <Aside></Aside>
                <main className="flex-1 overflow-y-auto p-6 mt-20">
                        <h1 className="text-2xl">Servicios</h1>
                        <div className="flex flex-wrap gap-y-10 gap-x-10 mt-10 w-full md:flex-row">
                            {services.map((service)=>{
                                return (
                                    <div key={service.id} className="bg-white w-60 h-40 p-3 rounded-xl flex flex-col md:w-70 overflow-hidden">
                                        
                                        <h1 className="text-lg">{service.name}</h1>
                                        <img className="w-30 relative -right-26 top-10 md:-right-30"  src="/scissors.avif" alt="" />
                                        <h1 className="text-lg mt-auto text-green-700">${service.price}</h1>
                                    </div>
                                )
                            })}
                        </div>
                            
                </main>
            </div>

        </div>
    )
}