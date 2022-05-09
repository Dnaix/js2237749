//Una sentencia es código que se ejecuta si la condición devuelve verdadero 
var i = 1;
while (i < 10) 
{
  console.log(i);
   i++; // i=i+1 esto sería lo mismo 
}


//repite 850 veces "hola mundo" sin necesidad de crear mas codigo generando un bucle
var i = 0;
while (i < 850) {
  console.log("Hola mundo");
  i = i + 1;
}


//cuenta regresiva de 60 a 0
var tiempo = 60;
while (tiempo > 0) {
console.log(tiempo)
tiempo--;
}

//ejercicios con for



//contar numero de mayusculas 
function contarMayusculas(cadena) {
  var contar = 0;
  var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  for (var i = 0; i < mayusculas.length; i++) {
  for (var x = 0; x < cadena.length; x++) {
  if(cadena[x]==mayusculas[i]){
  contar+=1;
  }
  }
  }
  return contar;
 }
 console.log("Se encontraron: "+contar+" Mayusculas");
 console.log(contarMayusculas());



//visualiuzacion de los numeros del 1 al 10
 var numeros = 0;
 for( numeros = 1 ; numeros < 11 ; numeros++ ) {
     console.log(numeros);
 }
 
 /*
   Algoritmo que visualiza los números del 10 al 1
 */
 
 for (let contar = 10 ; contar > 0 ; contar-- ) {
     console.log(contar);
 }
 