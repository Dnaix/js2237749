function sumar(num1,num2, callback){
    let r=num1 + num2;
    callback(r);
}
function impresora(msj){
    console.log(`imprimiendo ${msj}`);
}
sumar(100,200,impresora)

function orden(n1,n2,n3,callback){
    console.log(`n1 n2 n3`)
    callback(n1,n2,n3)

}
//llamada entrante ejercicio
function llamada(llamadapri,llamadaen,espera,contestar){
    let=llamadapri;
    let=llamadaen;
    espera();
    contestar();
    return
}
 function espera(){
     let=new promise(()=>{
    setTimeout(()=> {
        console.log(`nueva llamada en entrada`);
    },3000);
     })
 }
 function contestar(){
    setTimeout(()=> {
        console.log(`en un momento se retorna a llamada principal`);
    },1000);
    return
 }
llamada()
.then(llamada)

.then(espera)
.then(contestar)


