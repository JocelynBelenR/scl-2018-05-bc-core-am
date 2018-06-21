window.cipher = {

  //encode = para cifrar el texto
  encode: (offset, str) => { //numero y texto - funcion
    let message = ''; // variable vacia por el mensaje que se va a escribir
    offset = parseInt(offset); // guarda las letras ingresadas
    for (let i = 0; i < str.length; i++) { //i en la posicion 0, i < a la longitug del str, i suma de 1 en 1
      const character = str.charCodeAt(i);// aqui va el codigo ascii
      if (65 <= character && character <= 90) {// para identificar las mayúsculas
        message += String.fromCharCode(((character - 65 + offset) % 26) + 65);
      } //formula
      else if (97 <= character && character <= 122) {// para identificar las minísculas 
        message += String.fromCharCode(((character - 97 + offset) % 26) + 97); //formula para minusculas del codigo ascii
      }
      else{
        message += str.charAt(i); //para concatenar las letas
      } 
    } //cierre for
    return message; //da el mesaje
  },
  //numero y texto - funcion  //forma y resultado segun los datos anteriores
  
  decode: (str, offset) => {
    let resultDecode = '';
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (character.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90)) {
          character = String.fromCharCode(((code - 65 - parseInt(offset) + 52) % 26) + 65);
        }
        if ((code >= 97) && (code <= 122)) {
          character = String.fromCharCode(((code - 97 - parseInt(offset) + 52) % 26) + 97);
        }
      }
      resultDecode += character;
    }
    return resultDecode;
  },
   
}