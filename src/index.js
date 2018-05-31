window.onload = function () {
    //Boton instrucciones
  const btn = document.getElementById("button-inst");
  const txt = document.getElementById ("puntos");//Texto detallado
  btn.addEventListener('click', function(){
  txt.innerHTML = "<p> Aqui va detallada cada instruccion </p>";
  }) //Click del Boton e instrucciones 

  const numero = document.getElementById("password"); /*llamar al cuadro donde ingreso el numero*/

  const strboton = document.getElementById("enviarUno"); /*llamar al boton de enviar para el primer texto*/


}  


    





/*function cesar (str) {
    var minusculas = str.toLowerCase ();
    var abc = 'abcdefghijklmnñopqrstuvwxyz';
    var newStr = ' ';

    for(var i=0 < minusculas.length; i++;) {
        var movimiento = minusculas[i];
        if (movimiento === ' ') {
            newStr += movimiento;
            continue;

        }
    }
}*/

/*function cifrar (inputUno) {

document.getElementById(textoCifrado);
}*/

/*(x+n)%26 = (posicion de la letra - valor fijo) sacar el residuo de %26
Ejemplo con A
(x-65+n)%26+65 ...n°letra ascii-ubicacion ascii+valor fijo%26 + 65
 ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z") 
*/



