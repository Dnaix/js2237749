function alcancia(){
    let ahorro=0
    function guardar(monedas){
        ahorro=ahorro+monedas;
        console.log(`tiene $ ${ahorro} pesos`)
    }
    return guardar;
}
const pedro=alcancia();
const maria=alcancia();
pedro(100);
maria(1);
pedro(200);
maria(5);




//solucion de ejercisio
function aumentador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var suma5 = aumentador(5);
  var suma10 = aumentador(10);
  
 const luisito=aumentador;
 const margarita=aumentador;
 luisito
 margarita