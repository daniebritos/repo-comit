// - Desarrollemos un teclado en pantalla
// - Cada línea del teclado debe hacerse en un array.
// - Al presionar cada tecla (botón) deberá mostrarse en el display.
// - La muestra estará centralizada en una sola función.
// - Debe existir un botón para borrar el display
// - Agregado plus: - Botón Backspace…
console.log('TECLADO VIRTUAL !!!')

let fila1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let fila2 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let fila3 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'];
let fila4 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'];

let letra;

function teclear(i, r) {
    if(r === 1) {
        letra = fila1[i];
    }
    else if(r === 2) {
        letra = fila2[i];
    }
    else if(r === 3) {
        letra = fila3[i];
    }
    else if(r === 4) {
        letra = fila4[i];
    }
    else if (r === ' ') {
        letra = r;
    }

    let valMemory =  document.getElementById('display').value;
    let palabra = valMemory + letra;
    document.getElementById('display').value = valMemory + letra;
    if (i === 'borrar') {
        document.getElementById('display').value = '';
    }

    if (i === 'back') {
        valMemory = valMemory.slice(0, -1);
        document.getElementById('display').value = valMemory;
    }

}
