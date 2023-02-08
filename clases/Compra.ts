import { MetodoDePago } from "./MetodoDePago";
import { Proveedor } from "./Proveedor";
import { Transacciones } from "./Transacciones";
import { PagoDescuento, TodoMetodosDePago } from "./types";

export class Compra {
    id: number
    proveedor: Proveedor;
    fecha: Date;
    metodoDePago: MetodoDePago<TodoMetodosDePago>;
    transacciones: Transacciones[];

    constructor(proveedor: Proveedor, metodoDePago: MetodoDePago<TodoMetodosDePago>, transacciones: Transacciones[]) {
        this.id = Math.floor(Math.random() * 10000);
        this.fecha = new Date();
        this.metodoDePago = metodoDePago;
        this.proveedor = proveedor;
        this.transacciones = transacciones;
    }

    public calcularTotal(metodoDePago: TodoMetodosDePago): number{
        const valorInicial = 0;
        let sumaAlInicial = this.transacciones.reduce((total = 0, prod) => total + prod.costo, valorInicial);
        if(metodoDePago === PagoDescuento.EFECTIVO){
            const totalConDescuento = sumaAlInicial * 0.90;
            sumaAlInicial = sumaAlInicial - totalConDescuento;
        }
        return sumaAlInicial;
    }

}