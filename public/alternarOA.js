const textoAvanzado   = document.getElementById('textoAvanzado');
const imagenAvanzada  = document.getElementById('imagenAvanzada');
const formasAvanzadas = document.getElementById('formasAvanzadas');
const hojasAvanzadas  = document.getElementById('hojasAvanzadas');
const contenedorA1 = document.getElementById('contenedorA1');
const contenedorA2 = document.getElementById('contenedorA2');
const contenedorA3 = document.getElementById('contenedorA3');
const contenedorA4 = document.getElementById('contenedorA4');

const textoCoordenadas = document.getElementById('textoCoordenadas');
const dibujarCTexto  = document.getElementById('dibujarCTexto');
const contenedorAT1 = document.getElementById('contenedorAT1');
const contenedorAT2 = document.getElementById('contenedorAT2');


let wea = 1;
let weon = 1;
let flag14=1;
let flag15=1;

const actualizateViejo = ()=>{
    if( wea == 1){
        textoAvanzado.classList.value = 'opcionAI opcionAA',
        contenedorA1.classList.value = 'contenedorAAI contenedorAAA',
        flag14=1;
        formateaImagen();
    }
    else{
        textoAvanzado.classList.value = 'opcionAI',
        contenedorA1.classList.value = 'contenedorAAI'
    }
    if( wea == 2){
        imagenAvanzada.classList.value = 'opcionAI opcionAA',
        contenedorA2.classList.value = 'contenedorAAI contenedorAAA',
        flag14=2;
        formateaTextoPC();
    }
    else{
        imagenAvanzada.classList.value = 'opcionAI',
        contenedorA2.classList.value = 'contenedorAAI'
    }
    if( wea == 3){
        formasAvanzadas.classList.value = 'opcionAI opcionAA',
        contenedorA3.classList.value = 'contenedorAAI contenedorAAA',
        flag14=3;
        formateaTextoPC();
        formateaImagen();
    }
    else{
        formasAvanzadas.classList.value = 'opcionAI',
        contenedorA3.classList.value = 'contenedorAAI'
    }
    if( wea == 4){
        hojasAvanzadas.classList.value = 'opcionAI opcionAA',
        contenedorA4.classList.value = 'contenedorAAI contenedorAAA',
        flag14=4;
        formateaTextoPC();
        formateaImagen();
    }
    else{
        hojasAvanzadas.classList.value = 'opcionAI',
        contenedorA4.classList.value = 'contenedorAAI'
    }
    
}
        
textoAvanzado.addEventListener('click',()=>{
    wea = 1;
    actualizateViejo();
})
imagenAvanzada.addEventListener('click',()=>{
    wea = 2;
    actualizateViejo();
})  
formasAvanzadas.addEventListener('click',()=>{
    wea = 3;
    actualizateViejo();
})  
hojasAvanzadas.addEventListener('click',()=>{
    wea = 4;
    actualizateViejo();
})  


const actualizateMen = ()=>{
    if( weon == 1){
        textoCoordenadas.classList.value = 'opcionATI opcionATA',
        contenedorAT1.classList.value = 'contenedorAAI contenedorAAA',
        flag15=1;
    }
    else{
        textoCoordenadas.classList.value = 'opcionATI',
        contenedorAT1.classList.value = 'contenedorAAI'
    }
    if( weon == 2){
        dibujarCTexto.classList.value = 'opcionATI opcionATA',
        contenedorAT2.classList.value = 'contenedorAAI contenedorAAA',
        flag15=1;
        formateaTextoPC();
    }
    else{
        dibujarCTexto.classList.value = 'opcionATI',
        contenedorAT2.classList.value = 'contenedorAI'
    }
}
        
textoCoordenadas.addEventListener('click',()=>{
    weon = 1;
    actualizateMen();
})
dibujarCTexto.addEventListener('click',()=>{
    weon = 2;
    actualizateMen();
})  

