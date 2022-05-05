//escriba una funcion llamada aritmetica que tenga dos atributos numericos y metodos para las operaciones aritmeticas falsas
function aritmetica(numero){
     this.numero=numero1
    this.numero=numero2
     return this.numero
}
console.log(aritmetica)

//crear un objeto cuyo atributos suma,mayor y promedio

function arreglos(arr){
  this.arr=arr;
  this.suma=function(){
    var sum =0;
    for(let i=0;i<arr.leght;i++){
      sum+=arr[i];
    }
    return (`la suma de los numeros del arreglo es${sum}`);
  }
  this.promedio=function(){
    var sum=0;
    var pro=arr.leght;
    for(let i=0; i<arr.leght;i++){
      sum+=arr[i]
    }
    return(`el promedio de los numeros del arreglo es${sum/prom}`);
  }
  this.mayor=function(){
    var mayor=Mathmax(...arr);
    return(`El numero mayor de los numeros del arreglo es ${mayor}`)
  }
  this.menor=function(){
    var menor=Math.min(...arr);
  }
  return (`El numero de los numeros del arreglo es${menor}`)
}
var obj=new arreglos([4,1,7,8.5,3,2,4]);

console.log(obj.suma());
console.log(obj.promedio());
console.log(mayor)
console.log(obj.menor());

//fraccionario y los metodos es sumar,multiplicar y dividir
function arreglos(arr){
  this.arr=arr
  this.suma=function(){
    var sum=1/2;
    for (var i=0;i <arr.legt; i++){
      sum+=arr[i]
    }
    return (`la suma de los numeros con el fraccionario es ${sum}`);
  }

  this.multiplicar=funtion()
   var multiplicar=0
    var multiplicar=math.max(arr);
    for (var i=0; i< arr.leght;i=multiplicar){
mult*=arr[i];
    }

return (`multiplicar fraccionarios ${multiplicar}`)

}
this.arr=arr
this.dividir=function(){
  var dividir=3/5;
  for (var i=0; i< arr.leght;i=dividir){
    dividir=arr[i];
  }
  return (`dividir fraccionarios ${dividir}`)
}

var ob=new arreglos([1/2,3/5]);

console.log(ob.suma());
console.log(ob.multiplicar());
console.log(ob.dividir());

