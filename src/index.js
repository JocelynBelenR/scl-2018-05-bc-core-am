//Boton instrucciones
const btn = document.getElementById("button-inst");
const txt = document.getElementById ("puntos");//Texto detallado
btn.addEventListener("click", function(){
    txt.innerHTML = "<p> Aqui va detallada cada instruccion </p>";
}) //Click del Boton e instrucciones

document.getElementById("cifra").addEventListener("click", () => {
  let offset = document.getElementById("offset").value;
  let message = document.getElementById("mensaje").value;
  document.getElementById("result").innerHTML = window.cipher.encode(offset, message);
});
