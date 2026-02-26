import type { CreateService } from "./CreateService";
import type { Service } from "./Service";

export type ServiceContextType = {
    services:Service[],
    setServices:React.Dispatch<React.SetStateAction<Service[]>>,
    addServiceContext:(newService:CreateService)=>void
}
