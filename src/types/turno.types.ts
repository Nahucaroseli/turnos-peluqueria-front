import type { Client } from "./client.types"
import type { Service } from "./service.types"

export type Turno ={
    "id": number,
    "hora":string,
    "clientId":Client,
    "serviceId":Service,
    "pendiente":boolean
}

export type TurnoFormValues = {
    "hora": string,
    "name": string,
    "phone":string,
    "serviceId":Service,
    "pendiente":boolean
}