import { useContext, useEffect, useState } from "react"
import { Aside } from "../components/Aside"
import { Navbar } from "../components/Navbar"
import { ServiceContext } from "../context/ServiceContext"
import { useForm } from "react-hook-form";

export function Services(){

    const {services} = useContext(ServiceContext)!;

    const [openServiceForm,setOpenServiceForm] = useState(false);
    
    useEffect(()=>{
        
        console.log(services);
    },[services])


    return (
        <>
        <div id="services_overlay">
            <div className='h-screen flex flex-col'>
                <Navbar></Navbar>
                <div className="flex flex-1 overflow-hidden">
                    <Aside></Aside>
                    <main className="flex-1 overflow-y-auto p-6 mt-20">
                            <h1 className="text-2xl">Servicios</h1>
                            <button onClick={(e)=> setOpenServiceForm(!openServiceForm)} className="absolute right-3 top-27 cursor-pointer transition hover:scale-105">Agregar Servicio</button>
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
        </div>
        <ServiceForm formValue={openServiceForm} setFormValue={setOpenServiceForm}></ServiceForm>
        </>
    )
}

export function ServiceForm({formValue,setFormValue}:{formValue:boolean,setFormValue:React.Dispatch<React.SetStateAction<boolean>>}){

    const {register,handleSubmit} = useForm();

    return(
        <form className={`${formValue ? "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-white text-center rounded-xl":"hidden"}`}>
            <h1 className="mt-10 text-xl">Agregar Servicio</h1>
            <i onClick={(e)=> setFormValue(!formValue)} className="fa-solid fa-x relative -top-14 -right-93 cursor-pointer"></i>
            <div className="flex flex-col items-center text-center w-full mt-10 gap-y-7">
                <label htmlFor="">Nombre</label>
                <input type="text" className="border-1 border-solid w-50" {...register("name",{required:true})} placeholder="Nombre del Servicio"/>
                <label htmlFor="">Precio</label>
                <input type="text" className="border-1 border-solid w-50" {...register("price",{required:true})} placeholder="Precio"/>
                <button type="submit" className="cursor-pointer hover:underline hover:scale-110 transition">Agregar</button>
            </div>
        </form>
    )
}