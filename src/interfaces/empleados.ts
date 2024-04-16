export interface Empleados {

    nombre:   string;
    apellido: string;
    edad:     number;
    oficio1:  string;
    oficio2:  string[];
    correo:   string;
    genero:   string;
    
    
    
}

export class emepleaddoClase {

    
        nombre!:   string;
        apellido!: string;
        edad!:     number;
        oficio1!:  string;
        oficio2!:  string[];
        correo!:   string;
        genero!:   string;
    constructor(nombre:string,apellido:string,edad:number,oficio1:string,of2:string[],cor:string,ge:string) {
        this.apellido=apellido;
        this.nombre=nombre;
        this.edad=edad;
        this.oficio1=oficio1;
        this.oficio2=of2;
        this.correo=cor;
        this.genero=ge;
        
    }
}