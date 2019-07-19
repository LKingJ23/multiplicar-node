const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no puede ser la base al no ser un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`${ limite } no puede ser el limite al no ser un numero`);
            return;
        }

        console.log('==================='.green);
        console.log(`=====Tabla del===${ base }`.red);
        console.log('==================='.blue);

        for (let i = 0; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }\n`);
        }
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${limite }.txt`);
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
}