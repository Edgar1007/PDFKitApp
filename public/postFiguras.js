const botonFig = document.getElementById('botonFig');
let OB={};
let OBA={};

const renderGenCuadrado=()=>{
    const id = 16;
    const ancho=document.getElementById('anchocuadro');
    const x=document.getElementById('xcuadro');
    const y=document.getElementById('ycuadro');
    const colorRelleno=document.getElementById('rellenoCuadrado');
    const anchoLinea=document.getElementById('ancholineacuadro');
    const colorLinea=document.getElementById('colorlineacuadro');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,ancho:parseInt(ancho.value,10),x:parseInt(x.value,10),y:parseInt(y.value,10),colorRelleno:colorRelleno.value,anchoLinea:parseInt(anchoLinea.value,10),colorLinea:colorLinea.value}
    return obj;
}
const renderGenRectangulo=()=>{
    const id = 17;
    const ancho=document.getElementById('anchorectangulo');
    const largo=document.getElementById('largorectangulo');
    const x=document.getElementById('xrectangulo');
    const y=document.getElementById('yrectangulo');
    const colorRelleno=document.getElementById('rellenoRectangulo');
    const anchoLinea=document.getElementById('ancholinearectangulo');
    const colorLinea=document.getElementById('colorlinearectangulo');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,ancho:parseInt(ancho.value,10),largo:parseInt(largo.value,10),x:parseInt(x.value,10),y:parseInt(y.value,10),colorRelleno:colorRelleno.value,anchoLinea:parseInt(anchoLinea.value,10),colorLinea:colorLinea.value}
    return obj;
}
const renderGenElipse=()=>{
    const id = 18;
    const radioX=document.getElementById('xradioelipse');
    const radioY=document.getElementById('yradioelipse');
    const centroX=document.getElementById('xelipse');
    const centroY=document.getElementById('yelipse');
    const colorRelleno=document.getElementById('rellenoElipse');
    const anchoLinea=document.getElementById('ancholineaelipse');
    const colorLinea=document.getElementById('colorlineaelipse');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,radioX:parseInt(radioX.value,10),radioY:parseInt(radioY.value,10),centroX:parseInt(centroX.value,10),centroY:parseInt(centroY.value,10),colorRelleno:colorRelleno.value,anchoLinea:parseInt(anchoLinea.value,10),colorLinea:colorLinea.value}
    return obj;
}
const renderGenCirculo=()=>{
    const id = 19;
    const radio=document.getElementById('radiocirculo');
    const centroX=document.getElementById('xcirculo');
    const centroY=document.getElementById('ycirculo');
    const colorRelleno=document.getElementById('rellenoCirculo');
    const anchoLinea=document.getElementById('ancholineacirculo');
    const colorLinea=document.getElementById('colorlineacirculo');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,radio:parseInt(radio.value,10),centroX:parseInt(centroX.value,10),centroY:parseInt(centroY.value,10),colorRelleno:colorRelleno.value,anchoLinea:parseInt(anchoLinea.value,10),colorLinea:colorLinea.value}
    return obj;
}
const renderCuadroTexto=()=>{
    const id= 10;
    const x=document.getElementById('xcuadroT');
    const y=document.getElementById('ycuadroT');
    const largo=document.getElementById('largocuadroT');
    const ancho=document.getElementById('anchocuadroT');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,x:parseInt(x.value,10),y:parseInt(y.value,10),largo:parseInt(largo.value,10),ancho:parseInt(ancho.value,10)}
    return obj;
}
const renderSelector=()=>{
    const id= 11;
    const x=document.getElementById('xselector');
    const y=document.getElementById('yselector');
    const largo=document.getElementById('largoselector');
    const ancho=document.getElementById('anchoselector');
    const otro=document.getElementById('numeroselector');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,x:parseInt(x.value,10),y:parseInt(y.value,10),largo:parseInt(largo.value,10),ancho:parseInt(ancho.value,10)}
    return obj;
    
}
const renderBoton=()=>{
    const id= 12;
    const x=document.getElementById('xboton');
    const y=document.getElementById('yboton');
    const largo=document.getElementById('largoboton');
    const ancho=document.getElementById('anchoboton');
    const color=document.getElementById('colorDeBoton');
    const nombre=document.getElementById('nombreBoton');
    const nHoja=parseInt(flagNueve.value);
    const obj={nHoja,id,x:parseInt(x.value,10),y:parseInt(y.value,10),largo:parseInt(largo.value,10),ancho:parseInt(ancho.value,10),color:color.value,nombre:nombre.value}
    return obj;
}


botonFig.addEventListener('click',()=>{
    if(flag3==1){
        if(flag2==1){
            OB=renderGenCuadrado();
          }  
          if(flag2==2){
            OB=renderGenRectangulo();
          }
          if(flag2==3){
            OB=renderGenElipse();
          }  
          if(flag2==4){
            OB=renderGenCirculo();
          }
    }
    if(flag3==2){
        OB=renderCuadroTexto();
    }
    if(flag3==3){
        OB=renderSelector();
    }
    if(flag3==4){
        OB=renderBoton();
    }
    
    console.log(OB);
    cuerpo=JSON.stringify(OB);
    console.log(cuerpo);
    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: cuerpo,
     })
})