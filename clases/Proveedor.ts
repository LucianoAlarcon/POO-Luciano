import { Persona } from "./Persona";

export class Proveedor extends Persona {
    public razonSocial: string;

    constructor(nombre: string, razonSocial: string, email: string, telefono: number, dni: number) {
        super(nombre, dni, email, telefono);
        this.razonSocial = razonSocial; 
    }

}