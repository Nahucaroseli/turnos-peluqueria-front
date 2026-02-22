import type {Client}  from "../types/Client";

export type ClientContextType = {
    clients: Client[],
    setClients: React.Dispatch<React.SetStateAction<Client[]>>;
}
