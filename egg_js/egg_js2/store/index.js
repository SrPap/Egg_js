
let totalApagar = 0;
let lista = [];
const cantidadProducto = Number(prompt("Cuantos procutos vas a comprar?"));

for (let index = 1; index <= cantidadProducto; index++) {
const nombreProducto = prompt("¿Qué producto desea llevar?");
const cantidad = Number(prompt("¿Cuántas unidades?"));
const precio = Number(prompt("¿Cuánto sale cada unidad?" ));
const subtotal = cantidad * precio;
totalApagar = totalApagar + subtotal;
lista = nombreProducto + " " + lista;
alert( "Compraste " + lista + " y tienes que pagar " +totalApagar)
// console.log(`Producto ${i}: ${nombreProducto} - Precio: ${precioProducto} - Total: ${subtotalProducto}`);
// console.log(`Precio final de todos tus productos: ${totalApagar}`);

    }
    
    document.write('El resultado es: ' + lista);

