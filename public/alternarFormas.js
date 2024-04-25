const figuras     = document.getElementById('figuras');
const cuadroTexto = document.getElementById('cuadroDeTexto');
const selector    = document.getElementById('selector');
const boton       = document.getElementById('boton');
const contenedorFiguras = document.getElementById('contenedorFiguras');
const contenedorCuadro  = document.getElementById('contenedorCuadro');
const contenedorSelector= document.getElementById('contenedorSelector');
const contenedorBoton   = document.getElementById('contenedorBoton');
let flag3 = 1;

let elige = 1;
const cambio = ()=>{
    if( elige == 1){
        figuras.classList.value = 'opcionF opcion-activaF',
        contenedorFiguras.classList.value = 'contenedorF contenedorActivoF',
        flag3=1;
    }
    else{
        figuras.classList.value = 'opcionF',
        contenedorFiguras.classList.value = 'contenedorF'
    }
    if( elige == 2){
        cuadroTexto.classList.value = 'opcionF opcion-activaF',
        contenedorCuadro.classList.value = 'contenedorF contenedorActivoF',
        flag3=2;
    }
    else{
        cuadroTexto.classList.value = 'opcionF',
        contenedorCuadro.classList.value = 'contenedorF'
    }
    if( elige == 3){
        selector.classList.value = 'opcionF opcion-activaF',
        contenedorSelector.classList.value = 'contenedorF contenedorActivoF',
        flag3=3;
    }
    else{
        selector.classList.value = 'opcionF',
        contenedorSelector.classList.value = 'contenedorF'
    }
    if( elige == 4){
        boton.classList.value = 'opcionF opcion-activaF',
        contenedorBoton.classList.value = 'contenedorF contenedorActivoF',
        flag3=4;
    }
    else{
        boton.classList.value = 'opcionF',
        contenedorBoton.classList.value = 'contenedorF'
    }
    
}
        
figuras.addEventListener('click',()=>{
    elige = 1;
    cambio();
})
cuadroTexto.addEventListener('click',()=>{
    elige = 2;
    cambio();
})  
selector.addEventListener('click',()=>{
    elige = 3;
    cambio();
})  
boton.addEventListener('click',()=>{
    elige = 4;
    cambio();
})  