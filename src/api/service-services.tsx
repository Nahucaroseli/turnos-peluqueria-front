import type { ServiceFormValues, Service } from "../types/service.types";

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

export const addService = async(service:ServiceFormValues):Promise<Service> =>{
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


export const deleteService = async(idService:number):Promise<Response> =>{
    try {
        const response = await fetch(`${API_URL}/services/${idService}`,{
            method: "DELETE",
        })
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const editService = async(editS:Service):Promise<Service> =>{
    try {
            const response = await fetch(`${API_URL}/services/${editS.id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/JSON"
                },
                body: JSON.stringify(editS)
            });

            const data = response.json();
            return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};