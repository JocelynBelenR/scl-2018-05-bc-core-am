/*Aqui va mi boton de instrucciones*/
const btn = document.getElementById("button-inst");//llama al boton de instrucciones
const txt = document.getElementById ("puntos");//Instrucciones detalladas
btn.addEventListener("click", function(){ //funcion para hacer el click en el boton
    txt.innerHTML = "<p> Aqui va detallada cada instruccion </p>";
}) //texto que aparece al hacer click en el botonm

/*Aqui funciona mi boton para cifrar*/
document.getElementById("cifra").addEventListener("click", () => { //llama a cifrar y el click
  let offset = document.getElementById("offset").value; //trae el offset segun su valor
  let message = document.getElementById("mensaje").value; //trae el mensaje
  document.getElementById("result").innerHTML = window.cipher.encode(offset, message);
});//da el resultado cifrado segun el valor del offset selecionado
