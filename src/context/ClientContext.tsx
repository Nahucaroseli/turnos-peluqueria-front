import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Client } from "../types/Client";
import { getClients } from "../api/service-clients";
import type {ClientContextType } from "../types/ClientContextType";


export const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider = ({children}: {children:ReactNode}) =>{

    const [clients,setClients] = useState<Client[]>([]);

    
    useEffect(()=>{
        const fetchData = async()=>{
            const users = await getClients();
            setClients(users);
    }

    fetchData();

    },[])
    

    return (
        
        <ClientContext.Provider value={{clients,setClients}}>
            {children}
        </ClientContext.Provider>
    )


}