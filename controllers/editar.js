const { response, request } = require("express");

const ArchivoPDF = require('../models/archivo');
const { leerDB, leePrimeraHoja, guardaPrimeraHoja } = require('../helpers/guardar');


const presentaPagina=(req,res=response)=>{
    res.sendFile('C:/Users/rico_/OneDrive/Escritorio/Works/Redention3/public/inicio.html')
}


const escribeArchivo=async(req,res=response)=>{
    size=leePrimeraHoja();
    const doc = new ArchivoPDF(size);
    listaObjeto = leerDB();
    const listaInstrucciones=[];
        Object.keys(listaObjeto).forEach(key=>{
            const tarea = listaObjeto[key];
            listaInstrucciones.push(tarea);
        });
    for (let i= 0; i < listaInstrucciones.length; i++) {
        const iET = listaInstrucciones[i];
        id=iET.id;
        if(id==1){  
            doc.insertarParrafo(iET.tamano,iET.texto,iET.anchoParrafo,iET.alineacion,iET.otros);
        }
        if(id==2){
            doc.textoEnColumnas(iET.tamano,iET.texto,iET.nColumnas,iET.espacioColumnas,iET.ancho,iET.alto,iET.otro);
        }
        if(id==3){
            doc.textoEnTimesRoman(iET.tamano,iET.texto,iET.anchoParrafo,iET.alineacion,iET.continued2,iET.otro);    
        }
        if(id==4){
            doc.textoEnHelvetica(iET.tamano,iET.texto,iET.anchoParrafo,iET.alineacion,iET.continued2,iET.otro);
        }
        if(id==5){
            doc.textoEnCourier(iET.tamano,iET.texto,iET.anchoParrafo,iET.alineacion,iET.continued2,iET.otro);
        }
        if(id==6){
            doc.cargarImagenMarco(iET.ruta,iET.x,iET.y,iET.ancho,iET.largo);
        }
        if(id==7){
            doc.cargarImagenEscalada(iET.ruta,iET.escala,iET.x,iET.y);
        }
        if(id==8){
            doc.manipularImagen(iET.ruta,iET.ancho,iET.largo,iET.x,iET.y);
        }
        if(id==9){
            doc.cargarImagen(iET.ruta,iET.ancho,iET.x,iET.y);
        }
        if(id==10){
            doc.cuadroDeTexto(iET.x,iET.y,iET.ancho,iET.largo);
        }
        if(id==11){
            doc.selector(iET.opc,iET.x,iET.y,iET.largo,iET.ancho);
        }
        if(id==12){
            doc.generarBoton(iET.nombre,iET.color,iET.x,iET.y,iET.ancho,iET.largo)
        }
        if(id==13){
            doc.espacioParrafo(iET.espacio);
        }
        if(id==14){
            doc.hojaNueva(iET.size);
        }
        if(id==16){
            doc.generarCuadrado(iET.x,iET.y,iET.ancho,iET.anchoLinea,iET.colorRelleno,iET.colorLinea);
        }
        if(id==17){
            doc.generarRectangulo(iET.x,iET.y,iET.ancho,iET.largo,iET.anchoLinea,iET.colorRelleno,iET.colorLinea);
        }
        if(id==18){
            doc.generarElipse(iET.centroX,iET.centroY,iET.radioX,iET.radioY,iET.anchoLinea,iET.colorRelleno,iET.colorLinea);
        }
        if(id==19){
            doc.generarCirculo(iET.centroX,iET.centroY,iET.radio,iET.anchoLinea,iET.colorRelleno,iET.colorLinea)
        }
        if(id==20){
            doc.manipularImagen(iET.ruta,iET.ancho,iET.largo,iET.x,iET.y);
        }
        if(id==22){
            doc.textoEnTimesRomanXC(iET.tamano,iET.texto,iET.anchoParrafo,iET.otro,iET.x,iET.y);    
        }
        if(id==23){
            doc.textoEnHelveticaXC(iET.tamano,iET.texto,iET.anchoParrafo,iET.otro,iET.x,iET.y);
        }
        if(id==24){
            doc.textoEnCourierXC(iET.tamano,iET.texto,iET.anchoParrafo,iET.otro,iET.x,iET.y);
        }
    
    }

    doc.terminarPDF();
    
    res.json({
        msg: "Prueba 1"
    })
}

const guardaPrimeraHojaController=async(req,res=response)=>{
    const primerId=req.body.id;
    if(primerId==0){
        size=req.body.size;
        guardaPrimeraHoja(size);
    }
    res.status(201).json({
        msg:"Hoja guardada"
    })
}



 module.exports={
     escribeArchivo,
     presentaPagina,
     guardaPrimeraHojaController
 }