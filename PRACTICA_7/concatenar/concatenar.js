//Ejercicio Ingresar Nombre y Apellido y mostrarlos concatenados.

let mensaje = (msg) => document.getElementById('visor').value = msg;


const concatenar = () => {
    let name = document.getElementById('nombre').value;
    let lastname = document.getElementById('apellido').value;
    mensaje(`${name} ${lastname}, [CONCATENADO].`);
}