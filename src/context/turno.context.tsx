import { createContext, useEffect, useState, type ReactNode } from "react";
import { getClients } from "../api/service-turnos";
import type {TurnoContextType } from "../types/client.context.types";
import type { Turno } from "../types/turno.types";


export const TurnoContext = createContext<TurnoContextType | undefined>(undefined);

export const TurnoProvider = ({children}: {children:ReactNode}) =>{

    const [turnos,setTurnos] = useState<Turno[]>([]);

    
    useEffect(()=>{
        const fetchData = async()=>{
            const users = await getClients();
            setTurnos(users);
    }

    fetchData();

    },[])
    

    return (
        
        <TurnoContext.Provider value={{turnos,setTurnos}}>
            {children}
        </TurnoContext.Provider>
    )


}