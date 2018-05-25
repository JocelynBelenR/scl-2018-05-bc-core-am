/* Acá va tu código */

//Boton instrucciones
var btn = document.getElementById("button-brb");
//Texto detallado
var txt = document.getElementById ("puntos");

btn.addEventListener('click', function(){
    txt.innerHTML = "<p> Aqui va detallada cada instruccion </p>";
})