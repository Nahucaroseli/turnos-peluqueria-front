import type { Client } from "./client.types"
import type { Service } from "./service.types"

export type Turno ={
    "id": number,
    "hora":string,
    "clientId":Client,
    "serviceId":Service,
    "pendiente":boolean
}