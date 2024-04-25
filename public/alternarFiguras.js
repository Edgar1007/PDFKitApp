const cuadrado   = document.getElementById('cuadrado');
const rectangulo = document.getElementById('rectangulo');
const elipse     = document.getElementById('elipse');
const circulo    = document.getElementById('circulo');
const contenedorCuadrado   = document.getElementById('contenedorCuadrado');
const contenedorRectangulo = document.getElementById('contenedorRectangulo');
const contenedorElipse     = document.getElementById('contenedorElipse');
const contenedorCirculo    = document.getElementById('contenedorCirculo');
let flag2=1;

let alterna = 1;
const alternancia = ()=>{
    if( alterna == 1){
        cuadrado.classList.value = 'opcionFig opcion-activaFig',
        contenedorCuadrado.classList.value = 'contenedorFig contenedorActivoFig',
        flag2=1;
    }
    else{
        cuadrado.classList.value = 'opcionFig',
        contenedorCuadrado.classList.value = 'contenedorFig'
    }
    if( alterna == 2){
        rectangulo.classList.value = 'opcionFig opcion-activaFig',
        contenedorRectangulo.classList.value = 'contenedorFig contenedorActivoFig',
        flag2=2;
    }
    else{
        rectangulo.classList.value = 'opcionFig',
        contenedorRectangulo.classList.value = 'contenedorFig'
    }
    if( alterna == 3){
        elipse.classList.value = 'opcionFig opcion-activaFig',
        contenedorElipse.classList.value = 'contenedorFig contenedorActivoFig',
        flag2=3;
    }
    else{
        elipse.classList.value = 'opcionFig',
        contenedorElipse.classList.value = 'contenedorFig'
    }
    if( alterna == 4){
        circulo.classList.value = 'opcionFig opcion-activaFig',
        contenedorCirculo.classList.value = 'contenedorFig contenedorActivoFig',
        flag2=4;
    }
    else{
        circulo.classList.value = 'opcionFig',
        contenedorCirculo.classList.value = 'contenedorFig'
    }
    
}
        
cuadrado.addEventListener('click',()=>{
    alterna = 1;
    alternancia();
})
rectangulo.addEventListener('click',()=>{
    alterna = 2;
    alternancia();
})  
elipse.addEventListener('click',()=>{
    alterna = 3;
    alternancia();
})  
circulo.addEventListener('click',()=>{
    alterna = 4;
    alternancia();
})  