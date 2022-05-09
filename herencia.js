class Recursos{
    constructor(nombre,categoria){
        this._nombre=nombre;
        this._categoria=categoria;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get categoria(){
        return this._nombre;
    }
    set categoria(categoria){
        this.categoria=categoria;
    }
}

class libro extends recurso{
    constructor(nombre,categoria,paginas,editor){
        super(nombre,categoria);
        this._paginas=paginas;
        this._editor=editor;
    }
}

class mochila{
    constructor(propietario,libro){
        this._propietario=propietario;
        this._libro=libro;
    }
}

var x=new mochila("juan")


class seccion{
    constructor(nombre,coleccion){
        this._nombre=nombre;
        this._coleccion=coleccion;
    }
    almacenar(libro){
        this._coleccion.push(libro)
    }
    getcoleccion(){
        return this._coleccion
    }
}

var colection=[];
var lib3=new libro("javascript 1", "software",250,"Mcgrawill");
console.log="javascript basico";
lib3.nombre=(`el nombre del libro es ${lib3.nombre}`)
console.log(`El nombre del libro es ${lib3.nombre}`)
var lib4=new Libro("Fundamentos de JS","software",500,"Tomson");
var seccion1=new Seccion("Software",colection);

seccion1.almacenar(lib3);
seccion1.almacenar(lib4);
console.log(seccion1.getColeccion());








