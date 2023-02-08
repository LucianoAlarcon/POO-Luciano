import { MetodoDePago } from "./clases/MetodoDePago";
import { PagoConDescuento } from "./clases/PagoConDescuento";
import { PagoConTarjeta } from "./clases/PagoConTarjeta";
import { Categorias, MetodoDePagoDefa, PagoDescuento, PagoEnCuotas, TipoDeOperacion, Turnos } from "./clases/types";
import { Producto } from "./clases/Producto";
import { Transacciones } from "./clases/Transacciones";
import { Inventario } from "./clases/Inventario";
import { Persona } from "./clases/Persona";
import { Empleado } from "./clases/Empleado";
import { Proveedor } from "./clases/Proveedor";
import { Ventas } from "./clases/Ventas";
import { Compra } from "./clases/Compra";


const metodoDePago: MetodoDePago<MetodoDePagoDefa> = new MetodoDePago(MetodoDePagoDefa.DEBITO);
const metodoConDescuento: PagoConDescuento = new PagoConDescuento(PagoDescuento.EFECTIVO);
const metodoConCuotas: PagoConTarjeta = new PagoConTarjeta(PagoEnCuotas.TARJETA_CREDITO, 3);

const producto: Producto = new Producto('Coca-Cola', Categorias.GASEOSAS, 'Coca-Cola Company', '500ml');
const transaccion: Transacciones = new Transacciones([producto], 500, 2);

const inventario: Inventario = new Inventario([producto], 1000, 100);

const persona: Persona = new Persona('Luchito', 42926691, 'luciano.alarcon@gmail.com', 3416022317);
const empleado: Empleado = new Empleado(Turnos.MAÑANA, 'Ari', 42926691, 'ari.maldonado@gmail.com', 3416022317);
const porveedor: Proveedor = new Proveedor('LaChiqui', 'Lachiqui company', 'lachiqui@gmail.com', 123456789, 32287984);

const venta: Ventas = new Ventas(new MetodoDePago(MetodoDePagoDefa.DEBITO), [transaccion]);
const compra: Compra = new Compra(porveedor, new MetodoDePago(MetodoDePagoDefa.DEBITO), [transaccion])

const pago = new PagoConDescuento(PagoDescuento.EFECTIVO);

console.log('Metodo de pago', metodoDePago);
console.log('Pago con descuento', metodoConDescuento);
console.log('Pago con tarjeta', metodoConCuotas);
console.log('Producto', producto);
console.log('Transacciones', transaccion);
console.log('Inventario', inventario);
console.log('Persona', persona);
console.log('Empleado', empleado);
console.log('Proveedo', porveedor);
console.log('Venta', venta);
console.log('Descuento', pago.obtenerDescuento(TipoDeOperacion.buy));
console.log('TotalVenta', venta.calcularTotal(PagoDescuento.EFECTIVO));
console.log('Compra', compra);
console.log('TotalCompra', compra.calcularTotal(PagoDescuento.EFECTIVO));