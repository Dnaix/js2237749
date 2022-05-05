//encontrar mayusculas en cadena de texto
var contar = 0;
 var cadena = "CaDena con MayUsCulAs";
 var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (var i = 0; i < mayusculas.length; i++) {
 for (var x = 0; x < cadena.length; x++) {
 if(cadena[x]==mayusculas[i]){
 contar+=1;
     }
   }--4
 }

console.log("Se encontraron: "+contar+" Mayusculas");


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



