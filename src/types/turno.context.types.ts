import type { Turno, TurnoDisponible } from "./turno.types";


export type TurnoContextType = {
    turnos: Turno[],
    turnoDisponible:TurnoDisponible | undefined,
    setTurnos: React.Dispatch<React.SetStateAction<Turno[]>>,
    getTurnosDisponiblesContext:(fecha:Date)=>void
}
