//Boton instrucciones
var btn = document.getElementById("button-inst");
var txt = document.getElementById ("puntos");//Texto detallado
btn.addEventListener('click', function(){
    txt.innerHTML = "<p> Aqui va detallada cada instruccion </p>";
}) //Click del Boton e instrucciones

document.getElementById("encode").addEventListener("click", () => {
  let offset = document.getElementById("offset").value;
  let message = document.getElementById("mensaje").value;
  document.getElementById("result").innerHTML = window.cipher.encode(offset, message);
});
document.getElementById("decode").addEventListener("click", () => {
  let offset = document.getElementById("offset").value;
  let message = document.getElementById("mensaje").value;
  document.getElementById("result").innerHTML = window.cipher.decode(offset, message);
});