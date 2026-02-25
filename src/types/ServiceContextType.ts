import type { Service } from "./Service";

export type ServiceContextType = {
    services:Service[],
    setServices:React.Dispatch<React.SetStateAction<Service[]>>
}
