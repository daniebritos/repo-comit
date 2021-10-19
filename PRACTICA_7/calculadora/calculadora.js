//Ejercicio: Ingresar dos números y mostrar el resultado de: Suma, Resta, División y Multiplicación. Mostrar el resultado de una de las 4 operaciones.


function mensaje(msg) {
    document.getElementById('visor').value = msg;
}
const sumar = () => {
    let num1 = parseInt(document.getElementById('firstNumber').value);
    let num2 = parseInt(document.getElementById('secondNumber').value);
    resultSuma = num1+num2;
    mensaje(resultSuma);
}
const restar = () => {
    let num3 = parseInt(document.getElementById('firstNumber').value);
    let num4 = parseInt(document.getElementById('secondNumber').value);
    resultResta = num3-num4;
    mensaje(resultResta);
}
const multiplicar = () => {
    let num5 = parseInt(document.getElementById('firstNumber').value);
    let num6 = parseInt(document.getElementById('secondNumber').value);
    resultMult = num5*num6;
    mensaje(resultMult);
}
const dividir = () => {
    let num7 = parseInt(document.getElementById('firstNumber').value);
    let num8 = parseInt(document.getElementById('secondNumber').value);
    resultDiv = num7/num8;
    mensaje(resultDiv);
}



