/Ejercicios del dia 16/05/2022
//Ejercicio 1
//Funcion externa con parametro y variables privadas que almacenan porcentajes
function externa(producto, des1,des2,des3){
    let des1=producto*0.10;
    let des2=producto*0.20;
    let des3=producto*0.30;
    //Funcion interna y aplicacion del condicional if
    let psd=0;
    let cambio=0;
    let des1=producto*0.10;//10% del producto
    let des2=producto*0.20;//20% del producto
    let des3=producto*0.30;//30% del producto

    //ejercicio 2
    function interna(billete){
        //Condicional y sus revidados que hacen uso de operadores logicos
        if (producto>2000 && producto<=5000) {
            psd=producto;//Producto sin descuento
            producto=producto-des1;//Producto con descuento
            cambio=billete-producto;//El cambio al adquirir producto con descuento
            //Impresion
            console.log(`
            Billete recibido: ${billete}
            Valor del producto: ${psd}
            Producto con descuento del 10%: ${producto}
            El cambio: ${cambio}
            `);
            if (billete<producto) {
                console.log(`No puede adquirir este producto`);
            }
        }else if (producto>5000 && producto<=10000) {
            psd=producto;//Producto sin descuento
            producto=producto-des2;//Producto con descuento
            cambio=billete-producto;//El cambio al adquirir producto con descuento
            //Impresion
            console.log(`
            Billete recibido: ${billete}
            Valor del producto: ${psd}
            Producto con descuento del 20%: ${producto}
            El cambio: ${cambio}
            `);
            if (billete<producto) {
                console.log(`No puede adquirir este producto`);
            }
        }else if (producto>10000) {
            psd=producto;//Producto sin descuento
            producto=producto-des3;//Producto con descuento
            cambio=billete-producto;//El cambio al adquirir producto con descuento
            //Impresion
            console.log(`
            Billete recibido: ${billete}
            Valor del producto: ${psd}
            Producto con descuento del 30%: ${producto}
            El cambio: ${cambio}
            `);
            if (billete<producto) {
                console.log(`No puede adquirir este producto`);
            }
        }else{
            cambio=billete-producto;//El cambio al adquirir producto con descuento
            //Impresion
            console.log(`
            Billete recibido: ${billete}
            Producto: ${producto}
            El producto no tiene descuento
            Cambio: ${cambio}
            `);
            if (billete<producto) {
                console.log(`No puede adquirir este producto`);
            }
        }
    }
    return interna;//Retorno de la funcion interna
}
const e=externa(2000);//Almacenar funcion externa con dato de entrada en variable constante
e(500);//Llamado de la funcion con dato de entrada

//----------------------------------------------------------------

//Ejercicio 3
//Funcion externa con 2 parametros y variables privadas
function externa(juan, carlos){
    let incj=0;//Incremento juan
    let incc=0;//Incremento carlos
    let lsj="abcd";//Letras seleccionadas por juan
    let lsc="efgh";//Letras seleccionadas por carlos
    //Funcion interna
    function interna(){
        if (producto<=2000) {
            console.log(`El producto no tiene descuento`);
        }else if (producto>2000){
            producto=producto-des1;
            console.log(`Producto con descuento: ${producto}`);
        }else if (producto>5000){
            producto=producto-des2;
        }else if (producto>10000){
            producto=producto-des3;
        //Ciclor for y condicional if anidados en otro ciclo for e impresion
        for (let j = 0; j < lsj.length; j++) {
            for (let lej = 0; lej < juan.length; lej++) {
                if (lsj[j]==juan[lej]) {
                    incj=incj+1;
                }
            }
        }console.log(`Juan tiene ${incj} puntos`);
        //Ciclor for y condicional if anidados en otro ciclo for e impresion
        for (let c = 0; c < lsc.length; c++) {
            for (let lec = 0; lec < carlos.length; lec++) {
                if (lsc[c]==carlos[lec]) {
                    incc=incc+1
                }
            }
        }console.log(`Carlos tiene ${incc} puntos`);
        //Condicional if, derivados e impresiones
        if (incj>incc) {
            console.log(`Juan lleva la delantera`);
        }else if (incc>incj) {
            console.log(`Carlos lleva la delantera`);
        }else{
            console.log(`Se encuentran empatados`);
        }
    }
    //Retornar funcion interna
    return interna;
    return interna;//Retorno de la funcion interna
}
//Almacenar funcion externar con dato de entrada en una variable constante
const e = externa(2500);
//Llamado de la funcion
e(); 
const f=externa("abcda","efghe");//Funcion externa con 2 datos de entrada almacenados en variable constante
f();//Llamado de la funcion

}
//Ejercicio 4
function externa(lado1, lado2, lado3){//Funcion externa con parametros
    function interna(){//Funcion interna, condicional y sus derivados, operadores logicos, operadores de asignacion e impresiones
        if (lado1==lado2 && lado2==lado3) {
            console.log(`
            lado a: ${lado1}
            lado b: ${lado2}
            lado c: ${lado3}
            El triangulo es equilatero debido a que todos sus lados son iguales`);
        }else if (lado1!=lado2 && lado2==lado3 || lado2!=lado1 && lado1==lado3 || lado3!=lado1 &&lado1==lado2) {
            console.log(`
            lado a: ${lado1}
            lado b: ${lado2}
            lado c: ${lado3}
            El triangulo es isosceles debido a que dos de sus lados son iguales y uno diferente`);
        }
        else{
            console.log(`
            lado a: ${lado1}
            lado b: ${lado2}
            lado c: ${lado3}
            El triangulo es escaleno debido a que todos sus lados son diferentes`);
        }
    }
    return interna;//Retorno funcion interna
}
const h=externa(1, 10, 5);//Funcion externa con datos de entrada almecanada en variable constante
h();//Llamada de la funcion 