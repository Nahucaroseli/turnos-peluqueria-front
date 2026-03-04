import type { Turno } from "../types/turno.types";

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