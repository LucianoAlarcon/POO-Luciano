import { Producto } from "./Producto";

export class Transacciones {
    porducto: Producto[];
    costo: number;
    cantidad: number;

    constructor(producto: Producto[], costo: number, cantidad: number) {
        this.porducto = producto;
        this.costo = costo;
        this.cantidad = cantidad;
    }
}