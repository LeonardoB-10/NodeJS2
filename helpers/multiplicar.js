// const { log } = require("console");
const fs = require("fs/promises");
var colors = require('colors');
// const { resolve } = require("path");
//async indica que una función regresa una promesa
// const crearArchivoTabla = async(base = 5) => {

//     try {
//         console.log(`===================`);
//         console.log(`Tabla del: ${base}`);
//         console.log(`===================`);
//         let salida = "";
//         for (let x = 1; x <= 10; x++) {
//           salida += `${base} x ${x} = ${base * x}\n`;
//         }
//         fs.writeFile(`tabla-${base}.txt`, salida); //CODIGO MAS SIMPLE
//         console.log(salida); 
//     } catch (err) {
//         throw err;
//     }
 
// };


// let crearArchivoTabla = (base = 5) => {
//     return new Promise(resolve=>{
//             console.log(`===================`);
//             console.log(`Tabla del: ${base}`);
//             console.log(`===================`);
//             let salida = "";
//             for (let x = 1; x <= 10; x++) {
//               salida += `${base} x ${x} = ${base * x}\n`;
//             }
//             fs.writeFile(`tabla-${base}.txt`, salida); //CODIGO MAS SIMPLE
//             resolve(salida);
//     },fallo=>{
//         fallo('No funciono')
//     });
// };


//////////////////////////////////////////
//LA OTRO FORMA PARA NO CREAR UNA PROMESA
///////////////////////////////////////// 
let crearArchivoTabla = async (base = 5,listar=false,hasta=5) => {
    try {
        const xColor=colors.green('x')
        let salida = "";
        let consola = '';
        for (let x = 1; x <= hasta; x++) {
          salida += `${base} ${xColor} ${x} = ${colors.brightGreen(base * x)} \n`;
          consola += `${base} x ${x} = ${base * x} \n`;

        }
        if (listar) {
            console.log(`===================`.rainbow);
            console.log(`Tabla del: ${base} creada`.strikethrough);
            console.log(`===================`.rainbow);
            console.log(salida);
        }
        fs.writeFile(`./salida/tabla-${base}.txt`, consola); //CODIGO MAS SIMPLE
        return `tabla-${base}.txt`;
        
    } catch (error) {
       throw error;
    }
           
};


module.exports={
    crearArchivoTabla:crearArchivoTabla
    // crearArchivoTabla:crearArchivoTabla *** LO MISMO
}