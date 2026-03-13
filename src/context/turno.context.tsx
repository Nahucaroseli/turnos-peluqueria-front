import { createContext, useEffect, useState, type ReactNode } from "react";
import { getClients, getTurnosDisponibles } from "../api/service-turnos";
import type {TurnoContextType } from "../types/turno.context.types";
import { type TurnoDisponible, type Turno } from "../types/turno.types";


export const TurnoContext = createContext<TurnoContextType | undefined>(undefined);

export const TurnoProvider = ({children}: {children:ReactNode}) =>{

    const [turnos,setTurnos] = useState<Turno[]>([]);

    const [turnoDisponible,setTurnoDisponibles] = useState<TurnoDisponible| undefined>();
    
    useEffect(()=>{
        const fetchData = async()=>{
            const users = await getClients();
            setTurnos(users);
    }

    fetchData();

    },[])



    
    const getTurnosDisponiblesContext = async(fecha:Date)=>{
        const tDisponible = await getTurnosDisponibles(fecha);
        setTurnoDisponibles(tDisponible!);
    };

    return (
        
        <TurnoContext.Provider value={{turnos,setTurnos,getTurnosDisponiblesContext,turnoDisponible}}>
            {children}
        </TurnoContext.Provider>
    )


}