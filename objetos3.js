class carro{
 constructor(marca,modelo){
     this._marca=marca;
     this.modelo=modelo;
 }
set marca(marca){
    this._marca=marca
}
set modelo(modelo){
    this._modelo=modelo
}
get marca(){
    return this._marca;
}
get modelo(){
    return this._modelo;
}
   infocarro(){
       return `Automovil ${this._marca} modelo ${this._modelo}`;
   }
}

var a=new carro();
var b=new carro("chevrolet","onix");
a._marca="dodge";
a.modelo="journey";
console.log(a);
console.log(b);


//modelas la clase de un libro e instanciar muchos libros,atributo de fecha de impresion
//2 metodos cuanto tiempo tarda en leer el libro,y otro metodo que diga si el libro es viejo que dia "esta por remplazar" y si no que indique en 
//cuanto tiempo se debe remplazar


class libro{
     constructor(nombre,numpaginas,año,remplaza){
        this._nombre=nombre;
        this._numpaginas=numpaginas;
        this._año=año;
        this._remplaza=remplaza;
}
set nombre(nombre){
    this._nombre=nombre
}
set numpaginas(numpaginas){
    this._numpaginas=numpaginas
}
set año(año){
    this._año=año
}
set remplaza(remplaza){
    this._remplaza=remplaza;
}
get nombre(){
  return this._nombre;
}
get numpaginas(){
    return this._numpaginas;
}
get año(){
    return this._año;
}
get remplaza(){
    return this._remplaza;
}
}
var z=new libro();
z.año="2000";
z. libro="blanca nieves";
z. numpaginas="100pag"
z.libroviejo="este libro se debe remplazar"
console.log(z.año,z.libro,z.numpaginas,z.libroviejo)
var a=new libro();
a.libro="darth vader y el sol saliente";
a.numpaginas="500pag"
a.año="2003"
a.remplaza="este libro se remplaza en 20 semanas"
console.log(a.año,a.libro,a.numpaginas,a.remplaza);






