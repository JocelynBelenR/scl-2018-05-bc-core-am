//Boton instrucciones
const btn = document.getElementById("button-inst"); //Declara la variable y llama a boton
const txt = document.getElementById ("puntos");//variable - Texto detallado
btn.addEventListener('click', function(){ //click del boton y funcion
    txt.innerHTML = "<p>Ingresar un número que corresponde a cuantas posiciones se movera. Luego ingresa tu texto. Y al final presiona cifra o descifrar según el caso.</p>";   
}) //al hacer la funcion de click en el Boton este da las instrucciones
//Boton para Cifrar
document.getElementById("encode").addEventListener("click", () => { //llama al boton cifrar (encode) y da la funcion del click
  let offset = document.getElementById("offset").value;//variable y llama al elemento offset del index - elemento al que se le da un valor numerico
  let message = document.getElementById("mensaje").value; //variable y llama al elemento offset del index - elemento al que se le da un valor de letras, string
  document.getElementById("result").innerHTML = window.cipher.encode(offset, message);
}); //aqui muestra el resultado *innerhtml:reemplaza la sintaxis html del elemento por la nueva - 
  //en ese caso la cambia por el offset y message ingresado en cada caja de texto
//Boton para Descifrar
document.getElementById("decode").addEventListener("click", () => {//llama al boton descifrar (decode) y da la funcion del click
  let offset = document.getElementById("offset").value;//variable y llama al elemento offset del index - elemento al que se le da un valor numerico
  let message = document.getElementById("mensaje").value;//variable y llama al elemento offset del index - elemento al que se le da un valor de letras, string
  document.getElementById("result").innerHTML = window.cipher.decode(offset, message);
});//aqui muestra el resultado *innerhtml:reemplaza la sintaxis html del elemento por la nueva - 
//en ese caso la cambia por el offset y message ingresado en cada caja de texto