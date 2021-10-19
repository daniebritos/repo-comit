$(function() {
// 1.Apretando un botón, cambiar color de fondo de otro elemento.

$('.cont button:first').click(function() {
    $(".activo").css({"background-color": "blue"});
});

$('.cont > button:last').click(function() {
    $('.activo').css({'background': 'red'});
})


//adicional - cambio de color en botones
$('.cont button:first').css({'background-color': 'blue'});
$('.cont > button:last').css({'background': 'red'});
$('.cont button:first').css({'color': 'white'});
$('.cont > button:last').css({'color': 'white'});


// 2.Apretando un botón, mostrar u ocultar una sección de la página.
$('#ocultar').click(function() {
    $('h1').hide();
})
$('#mostrar').dblclick(function() {//doble click
    $('h1').show();
})

// 3.Apretando un botón, agregar un elemento HTML que no existía en el .html original.

$('.crear').click(function(){
    $('#elementos').append('<p> ELEMENTO HTML CREADO CON EXTIO!!...</p>');
});

//clase 10. minuto 3:17:57 (explicacion de como eliminar algo creado mediante jquery)
$('.eliminar').click(function(){
    $('#elementos > p:last').remove(); 
});

// para seleccionar un valor de un elemento y borrarlo
// $('.eliminar').click(function(){
//     $('#elementos > [value='name']').remove(); 
// });


// 4.Dado 10 botones con texto del 0 al 9, mostrar en un input el valor del botón clickeado y cambiar color de fondo. Cuando se vuelva a clickear, volver el color del fondo original y borrar el numero del input.
});
const mostrarValor = (valor, color) => {
    let estado = $('#visor').val();
    if(estado === "") {
        $('#visor').val(valor).css({"background-color": `${color}`});
    }else {
        $('#visor').val("").css({"background-color": "white"});
    }
}

