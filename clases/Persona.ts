export class Persona {
    nombre: string;
    dni: number;
    email: string;
    telefono: number; 

    constructor(nombre: string, dni: number, email: string, telefono: number) {
        this.nombre = nombre;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
    }
}