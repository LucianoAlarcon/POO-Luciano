import { Ciudad } from "./Ciudad";
import { Compra } from "./Compra";
import { Ventas } from "./Ventas";

export class Sucursal {
    nombre: string;
    ciudad: Ciudad;
    compra: Compra[];
    venta: Ventas[];

    constructor(nombre: string, ciudad: Ciudad, compra: Compra[], venta: Ventas[]) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.compra = compra;
        this.venta = venta;
    }
}