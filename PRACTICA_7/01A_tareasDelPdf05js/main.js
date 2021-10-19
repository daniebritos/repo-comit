//TAREAS DEL PDF 05 - 1 JAVASCRIPT
//########################### VARIABLES ###########################
// Definir una variable numérica, asignarle un
// valor y sumarle 5.

// let num;
// num = 10;
// num = num + 5;
// document.write(num)

// Definir dos variables de cadenas, asignarles
// valores y concatenarlas.

// var cadena1;
// var cadena2;
// cadena1 = 'Daniel';
// cadena2 = 'Asprella';
// document.write(cadena1 + " " + cadena2);


//########################### CONDICIONAL IF /OPERADORES ###########################
// Evaluar si dos números son iguales, diferentes, mayor o menor.

// const numero1 = 5;
// const numero2 = 15;

// if(numero1 == numero2) {
//     document.write(`los numeros ${numero1} y ${numero2} son iguales.` + '<br>')
// }if(numero1 != numero2) {
//     document.write(`los numeros ${numero1} y ${numero2} son diferentes.` + '<br>')
// }if(numero1 > numero2) {
//     document.write(`El numero ${numero1} es mayor que ${numero2}` + '<br>')
// }else {
//     document.write(`El numero ${numero1} es menor que ${numero2}` + '<br>')
// }

//########################### SWITCH ###########################
// Definir una variable numérica. Asignarle un valor entre 1 y 10
// Mostrar a que grupo pertenece:

// Grupo 1: del 1 al 3
// Grupo 2: del 4 al 6
// Grupo 3: del 7 al 10

// let numero = 5;
// switch (numero) {
//     case 1:
//         document.write(`${numero} pertenece al grupo 1.`)
//         break;
//     case 2:
//         document.write(`${numero} pertenece al grupo 1.`)
//         break;
//     case 3:
//         document.write(`${numero} pertenece al grupo 1.`)
//         break;

//     case 4:
//         document.write(`${numero} pertenece al grupo 2.`)
//         break;
//     case 5:
//         document.write(`${numero} pertenece al grupo 2.`)
//         break;
//     case 6:
//         document.write(`${numero} pertenece al grupo 2.`)
//         break;

//     case 7:
//         document.write(`${numero} pertenece al grupo 3.`)
//         break;
//     case 8:
//         document.write(`${numero} pertenece al grupo 3.`)
//         break;
//     case 9:
//         document.write(`${numero} pertenece al grupo 3.`)
//         break;
//     case 10:
//         document.write(`${numero} pertenece al grupo 3.`)
//         break;

//     default:
//         document.write('Error')
//         break;
// }

//########################### While / do while ###########################

// Realizar la sumatoria de 0 a 10 y devolver el valor de la misma.
// let r = 0;
// while (r < 10) {
//     document.write(`El valor es ${r} <br>`);
//     r++;
// }
// document.write('La suma es' + " " + r);



// let i = 0;
// do {
//     document.write(`El valor es ${i} <br>`);
//     i++;
// }while (i < 10);
// document.write('La suma es' + " " + i);


//########################### FUNCIONES ###########################

// 1. Crear una función que recibas dos valores, y muestre la
// suma de ambos.

// function sumaDeValores(num1, num2) {
//     return num1+num2;
// }
// document.write(`La suma es` + " " + sumaDeValores(3,3));


// 2. Crear una función que reciba dos cadenas de texto y
// retorne la concatenación de las mismas

// const concatenacion = function(cadena1, cadena2) {
//     return cadena1 + " " + cadena2;
// }
// document.write(concatenacion('Daniel','Asprella'))

// 3. Crear una función que reciba dos valores: cantidad y
// precio unitario. Si el total del ítem es mayor a 1000,
// aplicar un 10% de descuento. Devolver el valor total del
// ítem.

// let cantidad = parseInt(prompt('Ingresar la cantidad: '));
// let precio = parseInt(prompt('Ingresar el precio: '));
// const producto = (cantidad, precio) => {
//     let total = precio*cantidad;
//     if(total > 1000) {
//         let descuento = total*10/100;
//         total = total - descuento;
//     }
//     return total;
// }
// document.write("El total del producto es: ", producto(cantidad, precio));


// 4. Crear una función que reciba un número y muestre tantos
// asteriscos como la cantidad de veces que se pasó como
// parámetro. EJ: 5 🡪 *****

// let num = parseInt(prompt('Ingresa un numero: '));
// function asteriscos(num) {
//     for (let i = 0; i < num; i++) {
//         document.write('*');
//      }
//      return
// }
// asteriscos(num)




//########################### ARRAYS ###########################

// Generar un array con 10 números,
// let arreglo = [33,22,11,3,2,1,66,55,44,6];

// recorrerlo e ir multiplicando todos los
// elementos, finalmente obtener el producto total.

// for(i = 0; i < arreglo.length; i++) {
//     let mult = arreglo[i]*arreglo[i];
//     document.write(mult)
//     document.write('<br>')
// }



