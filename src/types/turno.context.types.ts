import type { Turno, TurnoDisponible, TurnoEdit, TurnoFormValues } from "./turno.types";


export type TurnoContextType = {
    turnos: Turno[],
    turnoDisponible:TurnoDisponible | undefined,
    setTurnos: React.Dispatch<React.SetStateAction<Turno[]>>,
    getTurnosDisponiblesContext:(fecha:Date)=>void,
    addTurnoContext:(turno:TurnoFormValues)=>void,
    deleteTurnoContext:(idNumber:Number)=>void,
    editTurnoContext:(editTurno:TurnoEdit)=>void
}

