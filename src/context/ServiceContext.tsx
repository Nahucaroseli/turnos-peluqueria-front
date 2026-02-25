import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ServiceContextType } from "../types/ServiceContextType";
import type { Service } from "../types/Service";
import { getServices } from "../api/service-services";

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


    return (


        <ServiceContext.Provider value={{services,setServices}}>
            {children}
        </ServiceContext.Provider>


    )


}
