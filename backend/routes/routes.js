const express = require('express');
const router = express.Router();
const { json } = require('express');
const datos = require("./../data/data.js")

/*router.post('/',(req, res)=> {
  const dato = req.body.dato;
  console.log(datos.datos().filter((element) => (element.id == dato)));
  res.status(201).send(datos.datos().filter((element) => (element.id == dato)));
});

*/
router.post('/', (req, res) => {
  const dato = req.body.dato;
  const resultados = datos.datos().filter((element) => (element.nombre == dato) ||(element.oficio1 == dato)||(element.oficio2 == dato) );
  console.log(resultados);
  res.status(200).send(resultados);
});
module.exports = router;