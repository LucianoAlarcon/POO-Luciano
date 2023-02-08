import { MetodoDePago } from "./MetodoDePago";
import { PagoEnCuotas } from "./types";

export class PagoConTarjeta extends MetodoDePago<PagoEnCuotas> {
    cuotas: number;

    constructor(_tipo: PagoEnCuotas, coutitas: number) {
        super(_tipo);
        this.cuotas = coutitas;
    }
}
