import { Categorias } from "./types";

export class Producto {
    id: number
    nombre: string;
    categoria: Categorias;
    marca: string;
    presentacion: string;

    constructor(nombre: string, categoria: Categorias, marca: string, presentacion: string) {
        this.id = Math.floor(Math.random() * 10000);
        this.nombre = nombre;
        this.categoria = categoria;
        this.marca = marca;
        this.presentacion = presentacion;
    }
}