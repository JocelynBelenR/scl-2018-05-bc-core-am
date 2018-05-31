window.cipher = {  // aca solo agregar parametros y no cambiar nada mas.
  encode: () => {	  
    /* Acá va tu código */
  },	   
  decode: () => {	  
    /* Acá va tu código */	
  }	  

/*let abc = ['ABCDEFGHIJKLMNÑOPQRSTUVWXYZ']; letras en su valor original del 0-26/*
  for (let i = 0; i< abc.length; i++) {
  console.log(abc[i]);
}


/* Pasos logicos:
 leer mensaje, 
 leer cada letra segun posicion (del 0 al... con el for),
 letra leida se le saca el codigo ac chartcodeat, 
 da un numero entre 65-90, 
 al numero aplicar ecuacion (aqui se ocupa offset= cuando se mueve)
 la ecuacion da un nuevo numero y se le hace stringchatcode
 esto da una letra: la nueva letra en ubicacion cesar
 con esa lee el mensaje y hace esto con cada letra del mensaje{ */}
