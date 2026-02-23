import type { Client } from "../types/Client";

const LOCAL_API = import.meta.env.VITE_LOCAL_API;

export const getClients = async():Promise<Client[]> =>{
    const response = await fetch(`${LOCAL_API}/clients`);
    const data = await response.json();
    return data;
};