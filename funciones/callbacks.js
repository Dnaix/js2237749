//inicio juego triqui
function Letras(daniel, jeisson, inicio, triqui, final){
    let letra=daniel;
    let letra2=jeisson;
    let fila=`
    ${letra}|${letra2}|${letra}
    ${letra2}|${letra}|${letra2}
    ${letra}|${letra2}|${letra}
    `;
    inicio();
    triqui(fila);
    final();
};
function inicio(){
    setTimeout(()=> {
        console.log(`que empieze el juego`);
    },1000);
}
function triqui(fila){
    setTimeout(()=>{
        console.log(fila);
    },2000);
}
function final(){
    setTimeout(()=>{
     console.log(`fin del juego`);
    },3000);
}
Letras("x", "o",inicio, triqui, final);


//explicasion 
const mivariable=new promise((resolve, reject)=>{})
const mifuncion=(parametros)=>(new promise((resolve, reject)=>{}))



function otrafuncion(){
    return new promise((resolve,reject)=>{
        resolve();
    })
}
function prueba1(){
    console.log(`probando numeros`);
}

//funcion principal va a utilizar un arreglo que contenga una cadena de texto en ingles y se utilizara el resouse en el cual va a traducir al español


function traducion(dog,house,window,tower,ingles,español){
    let ingles= (dog,house,window,tower)
    let español=(perro,casa,ventana,torre)
}
function ingles(){
    return new promise((resolve,reject)=>{
        resolve();
    })
 console.log(`traducir a español`);
}
function español(){
    return new promise((resolve,reject)=>{
    })
}
    

//ejercicios callback cuadrado
function cuadradoPromise(value) {
    if (typeof value !== "number") {
      return Promise.reject(
        `Error, el valor " ${value} " ingresado no es un número`
      );
    }
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          value,
          result: value * value,
        });
      }, 0 | (Math.random() * 1000));
    });
  }
  
  cuadradoPromise(0)
    .then((obj) => {
      console.log(obj);
      console.log("Inicio Promise");
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(1);
    })
    .then((obj) => {
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(2);
    })
    .then((obj) => {
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(3);
    })
    .then((obj) => {
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise("4");
    })
    .then((obj) => {
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(5);
    })
    .then((obj) => {
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      console.log("Fin Promise");
    })
    .catch((err) => console.error(err));
