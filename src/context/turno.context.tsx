import { createContext, useEffect, useState, type ReactNode } from "react";
import { addTurno, getClients, getTurnosDisponibles } from "../api/service-turnos";
import type {TurnoContextType } from "../types/turno.context.types";
import { type TurnoDisponible, type Turno, type TurnoFormValues } from "../types/turno.types";


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


    
    const addTurnoContext = async(turno:TurnoFormValues)=>{
        const t = await addTurno(turno);
        setTurnos([...turnos,t]);
    };

    return (
        
        <TurnoContext.Provider value={{turnos,setTurnos,getTurnosDisponiblesContext,turnoDisponible,addTurnoContext}}>
            {children}
        </TurnoContext.Provider>
    )


}