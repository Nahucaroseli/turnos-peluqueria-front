import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ServiceContextType } from "../types/ServiceContextType";
import type { Service } from "../types/Service";
import { addService, getServices } from "../api/service-services";
import type { CreateService } from "../types/CreateService";

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


    return (


        <ServiceContext.Provider value={{services,setServices,addServiceContext}}>
            {children}
        </ServiceContext.Provider>


    )


}
