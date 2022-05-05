//NO TIENE PARAMETROS

const x=()=>{
    return "Hola"
}

console.log(x());

// ó

const w=()=>"Hola";
console.log(x());

//TIENE SOLO UN PARAMETRO

const y=nombre=>`Hola ${nombre}`;
console.log(y("Pedro"))

//TIENE MAS DE UN PARAMETROS

const z=(nombre,apellido)=>`Hola ${nombre} ${apellido}`;
console.log(z("Pedro","Perez"))


//Determinar si un numero es o no es primo
//Solicitar un valor que represente una cantidad de dinero y un porcentaje de dinero, indicar el valor a pagar acplicando el descuento
//Solicitar una fecha, determinar si la fecha es anterior, actual o posterior al dia en que se ejecute e programa, tipo de dato = date