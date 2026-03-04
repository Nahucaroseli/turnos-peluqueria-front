import type { Turno } from "./turno.types";


export type TurnoContextType = {
    turnos: Turno[],
    setTurnos: React.Dispatch<React.SetStateAction<Turno[]>>;
}
