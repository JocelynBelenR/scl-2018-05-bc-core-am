window.cipher = {
  //encode = para cifrar el texto
  encode: (offset, str) => { //numero y texto - funcion
    let mensaje = ''; // variable vacia por el mensaje que se va a escribir
      offset = parseInt(offset); // guarda las letras ingresadas
      for (let i = 0; i < str.length; i++) { //i en la posicion 0, i < a la longitug del str, i suma de 1 en 1
        const letras = str.charCodeAt(i); // aqui va el codigo ascii
          if (65 <= letras && letras <= 90) // reconoce mayusculas
            mensaje += String.fromCharCode(((letras - 65 + offset) % 26) + 65); //formula para mayusculas del codigo ascii
          else if (97 <= letras && letras <= 122) // reconoce minísculas 
             mensaje += String.fromCharCode(((letras - 97 + offset) % 26) + 97); //formula para minusculas del codigo ascii
          else
            mensaje += str.charAt(i); //para concatenar las letas ingresadas en el mensaje
      }//cierre for
      return mensaje;//da el mensaje
  }, //cierre encode

  decode:

}