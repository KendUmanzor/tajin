const express = require('express');
const router = express.Router();
const { json } = require('express');
let data=[
  {
    "ID": "1234567890",
    "nombre": "Juan",
    "apellido": "Pérez",
    "correo": "juanperez@user.com",
    "genero": "Masculino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña123",
    "edad": 30,
    "ubicacion": "Tegucigalpa, Francisco Morazán"
},
{
    "ID": "2345678901",
    "nombre": "María",
    "apellido": "López",
    "correo": "marialopez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Pintor",
    "contraseña": "contraseña456",
    "edad": 25,
    "ubicacion": "San Pedro Sula, Cortés"
},
{
    "ID": "3456789012",
    "nombre": "Pedro",
    "apellido": "García",
    "correo": "pedrogarcia@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Carpintero",
    "contraseña": "contraseña789",
    "edad": 35,
    "ubicacion": "La Ceiba, Atlántida"
},
{
    "ID": "4567890123",
    "nombre": "Ana",
    "apellido": "Martínez",
    "correo": "anamartinez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseñaabc",
    "edad": 28,
    "ubicacion": "Choloma, Cortés"
},
{
    "ID": "5678901234",
    "nombre": "Luis",
    "apellido": "Hernández",
    "correo": "luishernandez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Electricista",
    "contraseña": "contraseña567",
    "edad": 32,
    "ubicacion": "Comayagua, Comayagua"
},
{
    "ID": "6789012345",
    "nombre": "Rosa",
    "apellido": "Gómez",
    "correo": "rosagomez@user.com",
    "genero": "Femenino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña890",
    "edad": 27,
    "ubicacion": "Danlí, El Paraíso"
},
{
    "ID": "7890123456",
    "nombre": "Javier",
    "apellido": "Ramírez",
    "correo": "javierramirez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Pintor",
    "contraseña": "contraseña1234",
    "edad": 30,
    "ubicacion": "Santa Rosa de Copán, Copán"
},
{
    "ID": "8901234567",
    "nombre": "Carmen",
    "apellido": "Torres",
    "correo": "carmentorres@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña5678",
    "edad": 26,
    "ubicacion": "La Lima, Cortés"
},
{
    "ID": "9012345678",
    "nombre": "David",
    "apellido": "Hernández",
    "correo": "davidhernandez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Carpintero",
    "contraseña": "contraseña9012",
    "edad": 35,
    "ubicacion": "Tela, Atlántida"
},
{
    "ID": "0123456789",
    "nombre": "Elena",
    "apellido": "García",
    "correo": "elenagarcia@user.com",
    "genero": "Femenino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña3456",
    "edad": 29,
    "ubicacion": "Juticalpa, Olancho"
},
{
    "ID": "2345678901",
    "nombre": "Ricardo",
    "apellido": "Mendoza",
    "correo": "ricardomendoza@user.com",
    "genero": "Masculino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña6789",
    "edad": 27,
    "ubicacion": "El Progreso, Yoro"
},
{
    "ID": "3456789012",
    "nombre": "Daniel",
    "apellido": "Sánchez",
    "correo": "danielsanchez@user.com",
    "genero": "Masculino",
    "oficio1": "Albañil",
    "oficio2": "Electricista",
    "contraseña": "contraseña2345",
    "edad": 33,
    "ubicacion": "La Entrada, Copán"
},
{
    "ID": "4567890123",
    "nombre": "Sofía",
    "apellido": "Martínez",
    "correo": "sofiamartinez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Pintor",
    "contraseña": "contraseña6789",
    "edad": 26,
    "ubicacion": "Villanueva, Cortés"
},
{
    "ID": "5678901234",
    "nombre": "Carlos",
    "apellido": "García",
    "correo": "carlosgarcia@user.com",
    "genero": "Masculino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña1234",
    "edad": 31,
    "ubicacion": "Siguatepeque, Comayagua"
},
{
    "ID": "6789012345",
    "nombre": "Laura",
    "apellido": "Hernández",
    "correo": "laurahernandez@user.com",
    "genero": "Femenino",
    "oficio1": "Albañil",
    "oficio2": "Carpintero",
    "contraseña": "contraseña5678",
    "edad": 28,
    "ubicacion": "Santa Bárbara, Santa Bárbara"
},
{
    "ID": "7890123456",
    "nombre": "Alejandro",
    "apellido": "Gómez",
    "correo": "alejandrogomez@user.com",
    "genero": "Masculino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña9012",
    "edad": 29,
    "ubicacion": "Gracias, Lempira"
},
{
    "ID": "8901234567",
    "nombre": "Lucía",
    "apellido": "Ramírez",
    "correo": "luciaramirez@user.com",
    "genero": "Femenino",
    "oficio1": "Albañil",
    "oficio2": "Pintor",
    "contraseña": "contraseña3456",
    "edad": 34,
    "ubicacion": "Ocotepeque, Ocotepeque"
},
{
    "ID": "9012345678",
    "nombre": "Fernando",
    "apellido": "Torres",
    "correo": "fernandotorres@user.com",
    "genero": "Masculino",
    "oficio1": "Carpintero",
    "oficio2": "Albañil",
    "contraseña": "contraseña7890",
    "edad": 33,
    "ubicacion": "Puerto Cortés, Cortés"
},
{
    "ID": "0123456789",
    "nombre": "Diana",
    "apellido": "Hernández",
    "correo": "dianahernandez@user.com",
    "genero": "Femenino",
    "oficio1": "Maquiladora",
    "oficio2": "Costurera",
    "contraseña": "contraseña1234",
    "edad": 31,
    "ubicacion": "El Paraíso, El Paraíso"
}
]
let contratos=[] 

router.post('/buscar', (req, res) => {
    const dato = req.body.dato;
    const resultados = data.filter((element) =>(element.correo==dato)||(element.nombre == dato) ||(element.oficio1 == dato)||(element.oficio2 == dato) );
    console.log(resultados);
    res.status(200).send(resultados);
});

router.post('/mod',json(),(req, res)=> {
    let ID ='0123456789';

    let nombre=req.body.nuevosDatos.nombre;
    let apellido=req.body.nuevosDatos.apellido;
    let oficio1=req.body.nuevosDatos.oficio1;
    let oficio2=req.body.nuevosDatos.oficio2;
    update(ID,nombre,apellido,oficio1,oficio2)
});

function update(id,nombre,apellido,oficio1,oficio2,){
    data.map(x=>{
    if (x.ID==id) {
    x.nombre=nombre;
    x.apellido=apellido;
    x.oficio1=oficio1;
    x.oficio2=oficio2;
}  
})
console.log(data)
}
router.post('/contrato',json(),(req, res)=> {
    let titulo=req.body.nuevosDatos.titulo;
    let salario=req.body.nuevosDatos.salario;
    let lugar=req.body.nuevosDatos.lugar;
    let tiempo=req.body.nuevosDatos.tiempo;
    let oficio=req.body.nuevosDatos.oficio
    append(titulo,salario,lugar,tiempo,oficio)
    console.log (contratos)
});
router.post('/buscar/contratos', (req, res) => {
    const dato = req.body.dato;
    const resultados = contratos.filter((element) =>(element.oficio==dato));
    console.log(resultados);
    res.status(200).send(resultados);
});

function append(titulo, salario,lugar,tiempo,oficio){
    var hoja = {
        titulo: titulo,
        salario: salario,
        lugar: lugar,
        tiempo: tiempo,
        oficio:oficio
    };
    contratos.push(hoja);

}
module.exports = router;