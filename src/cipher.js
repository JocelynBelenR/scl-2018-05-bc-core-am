window.cipher = {
  //encode = para cifrar el texto
  encode: (offset, str) => { //numero y texto - funcion
      let message = ''; // variable vacia por el mensaje que se va a escribir
      offset = parseInt(offset); // guarda las letras ingresadas
      for (let i = 0; i < str.length; i++) { //i en la posicion 0, i < a la longitug del str, i suma de 1 en 1
          const character = str.charCodeAt(i); // aqui va el codigo ascii
          if (65 <= character && character <= 90) // para identificar las mayúsculas
              message += String.fromCharCode(((character - 65 + offset) % 26) + 65); //formula
          else if (97 <= character && character <= 122) // para identificar las minísculas 
              message += String.fromCharCode(((character - 97 + offset) % 26) + 97); //formula para minusculas del codigo ascii
          else
              message += str.charAt(i); //para concatenar las letas
      } //cierre for
      return message; //da el mesaje
  },
  //numero y texto - funcion  //forma y resultado segun los datos anteriores
  decode: (offset, str) => { 
      return window.cipher.encode((26 - offset), str);
  }

}