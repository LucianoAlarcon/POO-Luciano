import { Producto } from "./Producto";
import { Sucursal } from "./Sucursal";

export class Inventario {
    porductos: Producto[];
    stock: number;
    precioVenta: number;

    constructor(productos: Producto[], stock: number, precioVenta: number) {
        this.porductos = productos;
        this.stock = stock;
        this.precioVenta = precioVenta;
    }
}