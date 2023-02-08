export enum PagoDescuento {
    EFECTIVO = 'Efectivo'
}

export enum PagoEnCuotas {
    TARJETA_CREDITO = 'Tarjeta de credito'
}

export enum MetodoDePagoDefa {
    DEBITO = 'Debito',
    BILLETERA_SANTA_FE = 'Billetera Santa Fe',
    TRANSFERENCIA_BANCARIA = 'Transferecia Bancaria'
}

export enum Turnos {
    MAÑANA = 'Mañana',
    TARDE = 'Tarde',
    NOCHE = 'Noche'
}

export enum TipoDeOperacion {
    buy = 'Compra',
    sell = 'Venta'
}

export enum Categorias {
    GOLOSINAS = "Golosinas",
    GASEOSAS = "Gaseosas",
    BEBIDAS_ALCOHOLICAS = "Bebidas alcohólicas",
    LIMPIEZA = "Limpieza",
    CIGARRILLOS = "Cigarrillos",
    COMESTIBLES = "Comestibles"

}

export type TodoMetodosDePago = MetodoDePagoDefa | PagoDescuento | PagoEnCuotas;