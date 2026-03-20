import type { Client } from "./client.types"
import type { Service } from "./service.types"

export type Turno ={
    "id": number,
    "hora":string,
    "fecha":Date
    "client":Client,
    "service":Service,
    "pendiente":boolean
}

export type TurnoFormValues = {
    "idTurno":number|undefined,
    "fecha":Date,
    "hora": string,
    "name": string,
    "phone":string,
    "service":number
}


export type TurnoDisponible = {
    "fecha":Date,
    "horarios":string[]
}

export type TurnoEdit = Omit<TurnoFormValues,"name"|"phone">