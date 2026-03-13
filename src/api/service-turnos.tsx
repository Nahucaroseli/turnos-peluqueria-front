import type { Turno, TurnoDisponible } from "../types/turno.types";

//const LOCAL_API = import.meta.env.VITE_LOCAL_API;
const API_URL = import.meta.env.VITE_API_URL;

export const getClients = async():Promise<Turno[]> =>{
    try{
        const response = await fetch(`${API_URL}/turnos`);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        return [];
    }

};


export const getTurnosDisponibles = async(fecha:Date):Promise<TurnoDisponible|null> =>{
    try {
        const response = await fetch(`${API_URL}/turnos/disponibles?fecha=${fecha.toISOString().substring(0,10)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error al buscar turnos disponibles");
    }
}