console.log('Condicionales Ejemplo 2');

// pedir sueldo
// si es menor que 100 entonces no cobra IVA
// mayor que 100 pero menos que 200 restar el 21% de IVA
//si es mayor que 200 restar 35% de IVA
// regrese la ganancia neta

let ingreso = prompt('Digite el ingreso');

if (ingreso < 100) {
    alert('Su ganacia neta es: ' + ingreso);
    }

    else if (ingreso < 200) {
        let gananciaNeta = ingreso / 1.21;
    alert('Su ganancia neta es: ' + gananciaNeta.toFixed(2));
    }

    else {
        let gananciaNeta = ingreso /1.35;
        alert('Su ganancia eta es: ' + gananciaNeta.toFixed(2));
    }

