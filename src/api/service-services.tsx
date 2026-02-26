import type { CreateService } from "../types/CreateService";
import type { Service } from "../types/Service";

//const LOCAL_API = import.meta.env.VITE_LOCAL_API;
const API_URL = import.meta.env.VITE_API_URL;


export const getServices = async():Promise<Service[]>=>{
    try {
        const response = await fetch(`${API_URL}/services`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }

};

export const addService = async(service:CreateService):Promise<Service> =>{
    try {
        const response = await fetch(`${API_URL}/services`,{
            method:"POST",
            headers:{
                'Content-type':'application/JSON',
            },
            body: JSON.stringify(service)
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};