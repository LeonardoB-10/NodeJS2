//SOLO PARA FINES EDUCATIVOS
console.clear();
//matentener toda la logica del APP CASI NULA

const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

///////////////////////////////////////////////////////////
//En la parde de los procesos los agregrgo como un strirng
// console.log(process.argv);
///////////////////////////////////////////////////////////

console.log(argv);
// console.log(`Base de yargs =`, argv.base);//tenemos accesos a todo el objeto
crearArchivoTabla(argv.base,argv.l,argv.h).then(resultado => console.log(resultado));


// const [,,arg3='base=5']=process.argv;
// const [,base = 10] = arg3.split('=');//cada vez que encuetra el igual lo divide
// console.log(base);//captura los argunmentos de la consola
// crearArchivoTabla(argv.base).then(resultado => console.log(resultado));






//----------Ejemplo--------------
// const datos = [5,6,8];
// const [,,c] = datos;
// console.log(c);