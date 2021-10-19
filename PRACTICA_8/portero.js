// - Desarrollemos un portero eléctrico. 
// - Tendrá dos visores, de dos posiciones el piso y una posición para dpto.
// - Los pisos van del 00 al 42.
// - Los dptos, del 1 al 8.
// - El botón llamar, muestra el mensaje de abajo. 
// - El botón borrar limpia los visores y el mensaje de abajo.
// - Si se hace referencia a un piso y/o dpto que no existe, 
// mostrar el error en el
// visor de abajo



let numerate = 0;
let contador = 0;
let valMemory = 0;
function pulsar(num) { //recorro botones con asignados con pulsar()
    for(i in num.value) {
        if(num.value[i] === '1') {
            numerate = 1;
        }else if(num.value[i] === '2') {
            numerate = 2;
        }else if(num.value[i] === '3') {
            numerate = 3;
        }else if(num.value[i] === '4') {
            numerate = 4;
        }else if(num.value[i] === '5') {
            numerate = 5;
        }else if(num.value[i] === '6') {
            numerate = 6;
        }else if(num.value[i] === '7') {
            numerate = 7;
        }else if(num.value[i] === '8') {
            numerate = 8;
        }else if(num.value[i] === '9') {
            numerate = 9;            
        }else if(num.value[i] === '0') {
            numerate = 0;
        }
        contador++
    }
    valMemory = document.getElementById('piso').value; 
    //limito el registro de valMemory para la ejecución de error.
    if (contador <= 2) {
        var condition = valMemory + numerate;
    }
    //limito la cantidad de pisos a ingresar asignando error y sino asignando valores
    if(Number(condition) > 42) {
        document.getElementById('piso').value = 'limite P.42';
    }else {
        if (contador <= 2) {
            document.getElementById('piso').value = valMemory + numerate;
        }else {
            document.getElementById('dpto').value = numerate;
        }
    }
    
}

function borrar() {
    document.getElementById('piso').value = '';
    document.getElementById('dpto').value = '';
    document.getElementById('display').value = '';
    numerate = 0;
    contador = 0;
    valMemory = 0;
}
function llamar() {
    document.getElementById('display').value = `Llamando piso: ${valMemory}, DPTO: ${numerate}`;
}
