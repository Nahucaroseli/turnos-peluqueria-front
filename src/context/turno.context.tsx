import { createContext, useEffect, useState, type ReactNode } from "react";
import { addTurno, deleteTurno, editTurno, getClients, getTurnosDisponibles } from "../api/service-turnos";
import type {TurnoContextType } from "../types/turno.context.types";
import { type TurnoDisponible, type Turno, type TurnoFormValues, type TurnoEdit } from "../types/turno.types";


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


    
    const deleteTurnoContext = async(idTurno:Number)=>{
        await deleteTurno(idTurno);
        const newTurnos = turnos.filter((item)=>{
            return item.id != idTurno;
        })
        setTurnos(newTurnos);
    };


    const editTurnoContext = async(editT:TurnoEdit)=>{
        const t = await editTurno(editT.idTurno,editT);
        
        const turnosEdit = turnos.map((item)=>{
            if(item.id==editT.idTurno){
                return t;
            }
            return item;
        })

        setTurnos(turnosEdit);

    };


    return (
        
        <TurnoContext.Provider value={{turnos,setTurnos,getTurnosDisponiblesContext,turnoDisponible,addTurnoContext,deleteTurnoContext,editTurnoContext}}>
            {children}
        </TurnoContext.Provider>
    )


}