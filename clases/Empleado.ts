import { Persona } from "./Persona";
import { Sucursal } from "./Sucursal";
import { Turnos } from "./types";

export class Empleado extends Persona{
    turnos: Turnos;

    constructor(turnos: Turnos, nombre: string, dni: number, email: string, telefono: number) {
        super(nombre, dni, email, telefono);
        this.turnos = turnos;
    }
}