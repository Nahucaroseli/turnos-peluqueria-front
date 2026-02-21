import type { Client } from "../types/Client";

export const getClients = async():Promise<Client[]> =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
};