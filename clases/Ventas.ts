import { MetodoDePago } from "./MetodoDePago";
import { Producto } from "./Producto";
import { Transacciones } from "./Transacciones";
import { PagoDescuento, TodoMetodosDePago } from "./types";

export class Ventas {
    id: number
    metodoDePago: MetodoDePago<TodoMetodosDePago>
    fecha: Date;
    transacciones: Transacciones[];


    constructor(metodoDePago: MetodoDePago<TodoMetodosDePago>, transacciones: Transacciones[]) {
        this.id = Math.floor(Math.random() * 10000);
        this.metodoDePago = metodoDePago;
        this.fecha = new Date();
        this.transacciones = transacciones;
    }

    public agregarItem(producto: Producto): void {
        this.transacciones.forEach((transac) => {
            transac.porducto.push(producto)
        });
    }

    public removerItem(productoId: number): void {
        this.transacciones.filter((transac) => transac.porducto.find((prod) => prod.id === productoId));
    }

    public calcularTotal(metodoDePago: TodoMetodosDePago): number {
        const valorInicial = 0;
        let sumaAlInicial = this.transacciones.reduce((total = 0, prod) => total + prod.costo, valorInicial);
        if(metodoDePago === PagoDescuento.EFECTIVO){
            const totalConDescuento = sumaAlInicial * 0.85;
            sumaAlInicial = sumaAlInicial - totalConDescuento;
        }
        return sumaAlInicial;
    }
}