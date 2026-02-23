import type { Client } from "../types/Client";

//const LOCAL_API = import.meta.env.VITE_LOCAL_API;
const API_URL = import.meta.env.VITE_API_URL;

export const getClients = async():Promise<Client[]> =>{
    const response = await fetch(`${API_URL}/clients`);
    const data = await response.json();
    return data;
};