//ejercicio incremento
function contador(inicio) {
    let i = inicio;
    function incremento(){
        inicio++;
        console.log(inicio)
    }
    return incremento
} 
const c=contador(10);
c();
c();
//funcion flecha
const contador1=(inicio)=>{
    let i=inicio;
    return()=>{
        inicio++;
        console.log(inicio);
    }
}
const c1=contador1(10);
c1();
c1();
