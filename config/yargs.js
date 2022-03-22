const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    default: 5,
    describe: 'La base para poder multiplcar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false
  }).option("h",{
    alias: "hasta",
    type: "number",
    demandOption: true,
    default: 5
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true; //dile a Yargs que los argumentos pasaron la prueba
  }).argv; //SIEMPRE VA AL ULTIMO


module.exports = 
  argv;
  // crearArchivoTabla:crearArchivoTabla *** LO MISMO;
