//=====================TEXTO AVANZADO================================//
    //=====================TEXTO POR COORDENADAS================================//
const formTAPC  = document.querySelector('#textoA');
const anchoPP   = document.querySelector('#anchoPP');
const anchoA    = document.getElementById('anchoParrafoA');
const resetf5T  = document.getElementById('cargarNTexto');
const ptx       = document.querySelector('#ptx');
const pty       = document.querySelector('#pty');
const xtreal    = document.getElementById('xtreal');
const ytreal    = document.getElementById('ytreal');
const xfalsa2   = document.getElementById('xfalsa2');
const yfalsa2   = document.getElementById('yfalsa2');
const valorPasoT= document.getElementById('pasoTextoA');
const arribaT   = document.getElementById('arribaT');
const izquierdaT= document.getElementById('izquierdaT');
const abajoT    = document.getElementById('abajoT');
const derechaT  = document.getElementById('derechaT');
const textoAt   = document.getElementById('textoAt');
const idTexto   = document.getElementById('estiloA');

let newValor2=0;
let newValorS2='';
let banderaTexto1=0;
flag4 = 1,
flag14= 8,
flag15 = 0

const formateaTextoPC = ()=>{
    formTAPC.reset();
    ytreal.setAttribute("value","0");
    xtreal.setAttribute("value","0");
    ptx.textContent="0";
    pty.textContent="0";
    const id=idTexto.value
    const cuerpo=JSON.stringify({id,nHoja:NumHoja6.value,indicador:true});
    console.log(cuerpo);
      
    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
       body: cuerpo,
      });
}

anchoA.addEventListener('input',()=>{
    anchoPP.textContent=anchoA.value;
})


formTAPC.addEventListener('submit', (event) => {
    event.preventDefault();
    const formDataA = new FormData(event.currentTarget);
    console.log(formDataA)
    fetch('/generarPDF', {
        method: 'POST',
            body: formDataA,
         })
});

resetf5T.addEventListener('click',() => {
    formTAPC.reset();
    ytreal.setAttribute("value","0");
    xtreal.setAttribute("value","0");
    ptx.textContent="0";
    pty.textContent="0";
    const id=idTexto.value
    const cuerpo=JSON.stringify({id,nHoja:NumHoja6.value,indicador:true});
    console.log(cuerpo);
      
    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
       body: cuerpo,
      });
});

pty.addEventListener('click', () => {
    yfalsa2.classList.value = 'ligth';
    pty.classList.value = 'shadow';
    banderaTexto1=0;
})

ptx.addEventListener('click', () => {
    xfalsa2.classList.value = 'ligth';
    ptx.classList.value = 'shadow';
    banderaTexto1=0;
})

xfalsa2.addEventListener('input', () => {
    xtreal.setAttribute("value",xfalsa2.value);
});

yfalsa2.addEventListener('input', () => {
    ytreal.setAttribute("value",yfalsa2.value);
});

arribaT.addEventListener('click', () => {
    if(banderaTexto1==0){
        newValor2 = (parseInt(yfalsa2.value))-(parseInt(valorPasoT.value));
        banderaTexto1=1;
    }
    else{
        newValor2 = newValor2-(parseInt(valorPasoT.value));
    }
    
    yfalsa2.classList.value = 'shadow';
    pty.classList.value = 'ligth';

    newValorS2='';
    if(newValor2<=0){
        newValorS2='0';
    }
    else{
        newValorS2= newValor2.toString();
    }
    pty.textContent=newValorS2;
    ytreal.setAttribute("value",newValorS2);
   
    const formData6 = new FormData(formTAPC);
    if(textoAt.value === ""){
        console.log('nel prro x2');
    }
    else{  
         fetch('/generarPDF', {
            method: 'POST',
            body: formData6,
         });
    }
});

abajoT.addEventListener('click', () => {
    if(banderaTexto1==0){
        newValor2 = (parseInt(yfalsa2.value))+(parseInt(valorPasoT.value));
        banderaTexto1=2;
    }
    else{
        newValor2 = newValor2+(parseInt(valorPasoT.value));
    }
    
    yfalsa2.classList.value = 'shadow';
    pty.classList.value = 'ligth';

    newValorS2='';
    if(newValor2>=800){
        newValorS2='800';
    }
    else{
        newValorS2= newValor2.toString();
    }
    pty.textContent=newValorS2;
    ytreal.setAttribute("value",newValorS2);

    const formData6 = new FormData(formTAPC);
    if(textoAt.value === ""){
        console.log('nel prro x2');
    }
    else{  
         fetch('/generarPDF', {
            method: 'POST',
            body: formData6,
         });
    }
});

izquierdaT.addEventListener('click', () => {
    if(banderaTexto1==0){
        newValor2 = (parseInt(xfalsa2.value))-(parseInt(valorPasoT.value));
        banderaTexto1=1;
    }
    else{
        newValor2 = newValor2-(parseInt(valorPasoT.value));
    }
    
    xfalsa2.classList.value = 'shadow';
    ptx.classList.value = 'ligth';

    newValorS2='';
    if(newValor2<=0){
        newValorS2='0';
    }
    else{
        newValorS2= newValor2.toString();
    }
    ptx.textContent=newValorS2;
    xtreal.setAttribute("value",newValorS2);

    const formData6 = new FormData(formTAPC);
    if(textoAt.value === ""){
        console.log('nel prro x2');
    }
    else{  
         fetch('/generarPDF', {
            method: 'POST',
            body: formData6,
         });
    }
});

derechaT.addEventListener('click', () => {
    if(banderaTexto1==0){
        newValor2 = (parseInt(xfalsa2.value))+(parseInt(valorPasoT.value));
        banderaTexto1=1;
    }
    else{
        newValor2 = newValor2+(parseInt(valorPasoT.value));
    }
    
    xfalsa2.classList.value = 'shadow';
    ptx.classList.value = 'ligth';

    newValorS2='';
    if(newValor2>=500){
        newValorS2='500';
    }
    else{
        newValorS2= newValor2.toString();
    }
    ptx.textContent=newValorS2;
    xtreal.setAttribute("value",newValorS2);

    const formData6 = new FormData(formTAPC);
    if(textoAt.value === ""){
        console.log('nel prro x2');
    }
    else{  
         fetch('/generarPDF', {
            method: 'POST',
            body: formData6,
         });
    }
});
//========================IMAGEN AVANZADA=========================
const valorPaso = document.getElementById('pasoImagenA');
const arriba    = document.getElementById('arriba');
const izquierda = document.getElementById('izquierda');
const abajo     = document.getElementById('abajo');
const derecha   = document.getElementById('derecha');
const x5        = document.getElementById('x5');
const px5       = document.querySelector('#px5');
const y5        = document.getElementById('y5');
const py5       = document.querySelector('#py5');
const form5     = document.querySelector('#imagenA');
const file5     = document.getElementById('file5');

const ancho     = document.getElementById('ancho55');
const largo     = document.getElementById('largo55');
const id        = document.getElementById('id5');
const x         = document.getElementById('xreal');
const y         = document.getElementById('yreal');
const resetf5   = document.getElementById('cargarNImagen');
const indicador = document.getElementById('indicador');
let newValor=0;
let newValorS='';
let banderaImg1=0;

const renderImage=(formData)=>{
    const file=formData.get('file5');
    return file;
}

const formateaImagen=()=>{
    form5.reset();
    y.setAttribute("value","0");
    x.setAttribute("value","0");
    px5.textContent="0";
    py5.textContent="0";

    const cuerpo=JSON.stringify({id:20,nHoja:NumHoja5.value,indicador:true});
    console.log(cuerpo);
      
    fetch('/images', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
       body: cuerpo,
      });
}

resetf5.addEventListener('click',() => {
    form5.reset();
    y.setAttribute("value","0");
    x.setAttribute("value","0");
    px5.textContent="0";
    py5.textContent="0";

    const cuerpo=JSON.stringify({id:20,nHoja:NumHoja5.value,indicador:true});
    console.log(cuerpo);
      
    fetch('/images', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
       body: cuerpo,
      })
})

py5.addEventListener('click', () => {
    y5.classList.value = 'ligth';
    py5.classList.value = 'shadow';
    banderaImg1=0;
})

px5.addEventListener('click', () => {
    x5.classList.value = 'ligth';
    px5.classList.value = 'shadow';
    banderaImg1=0;
})

x5.addEventListener('input', () => {
    x.setAttribute("value",x5.value);
});

y5.addEventListener('input', () => {
    y.setAttribute("value",y5.value);
})


arriba.addEventListener('click', () => {
    if(banderaImg1==0){
        newValor = (parseInt(y5.value))-(parseInt(valorPaso.value));
        banderaImg1=1;
    }
    else{
        newValor = newValor-(parseInt(valorPaso.value));
    }
    
    y5.classList.value = 'shadow';
    py5.classList.value = 'ligth';

    newValorS='';
    if(newValor<=0){
        newValorS='0';
    }
    else{
        newValorS= newValor.toString();
    }
    py5.textContent=newValorS;
    y.setAttribute("value",newValorS);
   
    const formData5 = new FormData(form5);
    const flag13=renderImage(formData5);
    if(flag13.size==0){
        console.log('Nel perro')
    }
    else{
        fetch('/images', {
            method: 'POST',
            body: formData5,
         })
    }
});

abajo.addEventListener('click', () => {
    if(banderaImg1==0){
        newValor = (parseInt(y5.value))+(parseInt(valorPaso.value));
        banderaImg1=1;
    }
    else{
        newValor = newValor+(parseInt(valorPaso.value));
    }
    
    y5.classList.value = 'shadow';
    py5.classList.value = 'ligth';

    newValorS='';
    if(newValor>=800){
        newValorS='800';
    }
    else{
        newValorS= newValor.toString();
    }
    py5.textContent=newValorS;
    y.setAttribute("value",newValorS);

    const formData5 = new FormData(form5);
    const flag13=renderImage(formData5);
    if(flag13.size==0){
        console.log('Nel perro')
    }
    else{
        fetch('/images', {
            method: 'POST',
            body: formData5,
         })
    }
});

izquierda.addEventListener('click', () => {
    if(banderaImg1==0){
        newValor = (parseInt(x5.value))-(parseInt(valorPaso.value));
        banderaImg1=1;
    }
    else{
        newValor = newValor-(parseInt(valorPaso.value));
    }
    
    x5.classList.value = 'shadow';
    px5.classList.value = 'ligth';

    newValorS='';
    if(newValor<=0){
        newValorS='0';
    }
    else{
        newValorS= newValor.toString();
    }
    px5.textContent=newValorS;
    x.setAttribute("value",newValorS);

    const formData5 = new FormData(form5);
    const flag13=renderImage(formData5);
    if(flag13.size==0){
        console.log('Nel perro')
    }
    else{
        fetch('/images', {
            method: 'POST',
            body: formData5,
         })
    }
});

derecha.addEventListener('click', () => {
    if(banderaImg1==0){
        newValor = (parseInt(x5.value))+(parseInt(valorPaso.value));
        banderaImg1=1;
    }
    else{
        newValor = newValor+(parseInt(valorPaso.value));
    }
    
    x5.classList.value = 'shadow';
    px5.classList.value = 'ligth';

    newValorS='';
    if(newValor>=500){
        newValorS='500';
    }
    else{
        newValorS= newValor.toString();
    }
    px5.textContent=newValorS;
    x.setAttribute("value",newValorS);

    const formData5 = new FormData(form5);
    const flag13=renderImage(formData5);
    if(flag13.size==0){
        console.log('Nel perro')
    }
    else{
        fetch('/images', {
            method: 'POST',
            body: formData5,
         })
    }
    
});

form5.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const formData5 = new FormData(form5);
    console.log(formData5);
    fetch('/images', {
        method: 'POST',
        body: formData5,
     })
})
//=====================HOJAS AVANZADAS================================//
const hojaEliminar      = document.getElementById('hojaEliminar');
const botonEliminarHoja = document.getElementById('botonEliminarHoja');
const msgEliminarHoja   = document.getElementById('msgEliminarHoja');
const botonesBW         = document.getElementById('botonesBW');
const siEliminar        = document.getElementById('siEliminar');
const noEliminar        = document.getElementById('noEliminar');
const Eliminada         = document.getElementById('Eliminada');


hojaEliminar.addEventListener('input',()=>{
    hojaEliminar.setAttribute("max",load().toString());
    Eliminada.classList.value='shadow';
});

botonEliminarHoja.addEventListener('click',()=>{
    msgEliminarHoja.classList.value='ligth';
    botonesBW.classList.value='ligth';
    Eliminada.classList.value='shadow';
});

siEliminar.addEventListener('click',()=>{
    const Hoja=parseInt(hojaEliminar.value);
    NPaginas=parseInt(load());
    if(!NPaginas){
     NPaginas=1;
    }
  NPaginas = NPaginas - 1;
  console.log(NPaginas);
  save(NPaginas);
  
  msgEliminarHoja.classList.value='shadow';
  botonesBW.classList.value='shadow';
  Eliminada.classList.value='ligth';

  cuerpo=JSON.stringify({id:21,Hoja});
  console.log(cuerpo);
  
    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: cuerpo,
     })
});

noEliminar.addEventListener('click',()=>{
    msgEliminarHoja.classList.value='shadow';
    botonesBW.classList.value='shadow';
});


