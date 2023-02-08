import { MetodoDePago } from "./MetodoDePago";
import { PagoDescuento, TipoDeOperacion } from "./types";

export class PagoConDescuento extends MetodoDePago<PagoDescuento> {
    constructor(_tipo: PagoDescuento) {
        super(_tipo);
    }
    public obtenerDescuento(oTipo: TipoDeOperacion) {
        if (oTipo === TipoDeOperacion.buy) return 10;
        return 15;
    }
}