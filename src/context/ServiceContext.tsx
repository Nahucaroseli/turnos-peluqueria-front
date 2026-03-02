import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ServiceContextType } from "../types/ServiceContextType";
import type { CreateService, Service } from "../types/Service";
import { addService, deleteService, getServices } from "../api/service-services";

export const ServiceContext = createContext<ServiceContextType|undefined>(undefined);


export const ServiceProvider = ({children}: {children:ReactNode})=>{

    const [services,setServices] = useState<Service[]>([]);

    useEffect(()=>{
        
        const fetchData = async()=>{
            const s = await getServices();
            setServices(s);
        };

        fetchData();
    },[]);


    const addServiceContext = async(newService:CreateService)=>{
        const res = await addService(newService);
        setServices([...services,res]);
    };

    const deleteServiceContext = async(idService:number)=>{
        await deleteService(idService);
        const newServices = services.filter((s)=>{
            return s.id != idService
        })
        setServices(newServices);
    };

    return (


        <ServiceContext.Provider value={{services,setServices,addServiceContext,deleteServiceContext}}>
            {children}
        </ServiceContext.Provider>


    )


}
