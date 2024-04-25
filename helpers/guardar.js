const fs = require('fs');
const archivo = './db/data.json';
const cuenta = './db/cuenta.json';
const f12 = './db/flag12.json';
const size1 = './db/size.json';

const guardarDB= (datos)=>{
    fs.writeFileSync(archivo,JSON.stringify(datos));//El comando JSON.stringify()convierte objestos en formato string
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        console.log('que no existe segun');
        return null;
    }
    const info = fs.readFileSync(archivo,{encoding:'utf-8'});
    const dat = JSON.parse(info);//Aqui este comando hace lo opuesto al stringify, convierte el documento de JSON a string
                                 //porque si le lee directamente el JSON el archivo tiene esa extension y no es string

    return dat;
}
const guardarContador = (count=0)=>{
    fs.writeFileSync(cuenta,JSON.stringify(count));//El comando JSON.stringify()convierte objestos en formato string
}
const leerContador = () => {
    if(!fs.existsSync(cuenta)){
        count=0;
        return count;
    }
    const info2 = fs.readFileSync(cuenta,{encoding:'utf-8'});
    const dat2 = JSON.parse(info2);//Aqui este comando hace lo opuesto al stringify, convierte el documento de JSON a string
                                 //porque si le lee directamente el JSON el archivo tiene esa extension y no es string

    return dat2;
}

const guardaBandera12 = (flag12=false)=>{
    fs.writeFileSync(f12,JSON.stringify(flag12));
}
const leeBandera12 = () => {
    if(!fs.existsSync(f12)){
        flag12=false;
        return flag12;
    }
    const info3 = fs.readFileSync(f12,{encoding:'utf-8'});
    const dat3 = JSON.parse(info3);//Aqui este comando hace lo opuesto al stringify, convierte el documento de JSON a string
                                 //porque si le lee directamente el JSON el archivo tiene esa extension y no es string

    return dat3;
}

const guardaPrimeraHoja = (size="A0")=>{
    fs.writeFileSync(size1,JSON.stringify(size));
}
const leePrimeraHoja = () => {
    if(!fs.existsSync(size1)){
        size=SRA0;
        return size;
    }
    const info4 = fs.readFileSync(size1,{encoding:'utf-8'});
    const dat4 = JSON.parse(info4);//Aqui este comando hace lo opuesto al stringify, convierte el documento de JSON a string
                                 //porque si le lee directamente el JSON el archivo tiene esa extension y no es string

    return dat4;
}
const esperaGuardarImagen=async(archivoEntrada,ruta)=>{
    return new Promise((resolve, reject) => { 
        archivoEntrada.mv(ruta, function(err) {
            if (err){
                console.log('error');
                reject('Error');
            }
            console.log('Archivo Guardado');
            resolve('todo ok')
            });
    });
}
module.exports= {
    guardarDB,
    leerDB,
    guardarContador,
    leerContador,
    esperaGuardarImagen,
    leeBandera12,
    guardaBandera12,
    guardaPrimeraHoja,
    leePrimeraHoja
}