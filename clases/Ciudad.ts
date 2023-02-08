import { Producto } from "./Producto";
import { Proveedor } from "./Proveedor";
import { Provincia } from "./Provincia";

export class Ciudad {
    nombre: string;
    porvincia: Provincia;
    porveedor: Proveedor[];
    producto: Producto[];
    listaDePrecios: number;

    constructor(nombre: string, provincia: Provincia, proveedor: Proveedor[], producto: Producto[], listaDePrecios: number) {
        this.nombre = nombre;
        this.porvincia = provincia;
        this.porveedor = proveedor;
        this.producto = producto;
        this.listaDePrecios = listaDePrecios;
    }

    // ProductoPorProv
}