console.log('Desglose de para cotización');

// pedir neto proveedor
// pedir procentaje de MUP
// pedir importe a ceder
// calcular MUP
// calcular Porcentaje cedido
// calcular IVA (21%) de ganancia
// informar desglose

let neto = prompt('Digite el precio neto')
let porcentajeMUP = prompt('Digite porcentaje Mark Up')
let porcentaje = prompt('Digite porcentaje a ceder');

//porcentajeMUP se divide 100 para realizar calculo correcto
//venta es neto / mup

if (neto <= 0){
    alert('el neto debe ser mayor a 0')
}

if (porcentajeMUP < 20){
    alert('el MUP no debe ser menor a 20')
    }

if (porcentaje > 16){
    alert('No ceder más del 16%')
}   else {
        let porcentajeMUP1 = 100 - porcentajeMUP
        let porcentajeMUP2 = porcentajeMUP1 / 100        
    }    