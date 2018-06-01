//Boton instrucciones
var btn = document.getElementById("button-inst");
var txt = document.getElementById ("puntos");//Texto detallado
btn.addEventListener('click', function(){
    txt.innerHTML = "<p> Aqui va detallada cada instruccion </p>";
}) //Click del Boton e instrucciones

