//1.Crear una función que recibas dos valores, y muestre la suma de ambos.

let num1 = parseInt(prompt('Ingresar primer numero: '));
let num2 = parseInt(prompt('Ingresar segundo numero: '));
const dosValores = (num1, num2) => {
    return num1+num2;
}
document.write(`La suma de ${num1} + ${num2} = `, dosValores(num1,num2));


//2.Crear una función que reciba dos cadenas de texto y retorne la concatenación de las mismas

let cadena1 = prompt('Ingresar primer palabra: ');
let cadena2 = prompt('Ingresar segunda palabra: ');
function concatenado(cad1,cad2) {
    return cad1 + ' ' + cad2;
}
document.write(concatenado(cadena1, cadena2));


//3.Crear una función que reciba dos valores: cantidad y precio unitario. Si el total del ítem es mayor a 1000, aplicar un 10% de descuento. Devolver el valor total del ítem.

let val1 = parseInt(prompt('Ingresar cantidad: '));
let val2 = parseInt(prompt('Ingresar precio unitario: '));
function dosValores(val1, val2) {
    let item = val1*val2;
    let descuento = 0;
    if(item > 1000) {
        descuento = (item*10)/100;
        document.write(`Descuento aplicado $${item - descuento}  es el valor final`);
    }else {
        document.write(`Valor total $${item}`);
    }
}
dosValores(val1, val2);

//4.Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de veces que se pasó como parámetro. EJ: 5 🡪 *****
let num = parseInt(prompt('Ingresar un numero: '));
function asteriscos(num) {
    for (i = 0; i < num ;i++) {
        document.write('*');
    }
}
asteriscos(num);









