import type { ServiceFormValues, Service } from "./service.types";

export type ServiceContextType = {
    services:Service[],
    setServices:React.Dispatch<React.SetStateAction<Service[]>>,
    addServiceContext:(newService:ServiceFormValues)=>void,
    deleteServiceContext:(idService:number)=>void,
    editServiceContext:(editS:Service)=>void
}
