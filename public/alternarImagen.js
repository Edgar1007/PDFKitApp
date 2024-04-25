const imagenSimple        = document.getElementById('imagenSimple');
const imagenMarco         = document.getElementById('imagenMarco');
const imagenEscalada       = document.getElementById('imagenEscalada');
const imagenPersonalizada = document.getElementById('imagenPersonalizada');
const contenedor1 = document.getElementById('contenedor1');
const contenedor2 = document.getElementById('contenedor2');
const contenedor3 = document.getElementById('contenedor3');
const contenedor4 = document.getElementById('contenedor4');
const NumHoja1  = document.getElementById('nH1');
const NumHoja2  = document.getElementById('nH2');
const NumHoja3  = document.getElementById('nH3');
const NumHoja4  = document.getElementById('nH4');
const NumHoja5  = document.getElementById('nH5');
const NumHoja6  = document.getElementById('nH6');
const th        = document.getElementById('hojaTurno');
const currentPage = document.querySelector('#jk');

let eleccion = 1;
let nHoja;
const cambiar = ()=>{
    if( eleccion == 1){
        imagenSimple.classList.value = 'opcionI opcion-activaI',
        contenedor1.classList.value = 'contenedorI contenedorActivo'
    }
    else{
        imagenSimple.classList.value = 'opcionI',
        contenedor1.classList.value = 'contenedorI'
    }
    if( eleccion == 2){
        imagenMarco.classList.value = 'opcionI opcion-activaI',
        contenedor2.classList.value = 'contenedorI contenedorActivo'
    }
    else{
        imagenMarco.classList.value = 'opcionI',
        contenedor2.classList.value = 'contenedorI'
    }
    if( eleccion == 3){
        imagenEscalada.classList.value = 'opcionI opcion-activaI',
        contenedor3.classList.value = 'contenedorI contenedorActivo'
    }
    else{
        imagenEscalada.classList.value = 'opcionI',
        contenedor3.classList.value = 'contenedorI'
    }
    if( eleccion == 4){
        imagenPersonalizada.classList.value = 'opcionI opcion-activaI',
        contenedor4.classList.value = 'contenedorI contenedorActivo'
    }
    else{
        imagenPersonalizada.classList.value = 'opcionI',
        contenedor4.classList.value = 'contenedorI'
    }
    
}
        
imagenSimple.addEventListener('click',()=>{
    eleccion = 1;
    cambiar();
})
imagenMarco.addEventListener('click',()=>{
    eleccion = 2;
    cambiar();
})  
imagenEscalada.addEventListener('click',()=>{
    eleccion = 3;
    cambiar();
})  
imagenPersonalizada.addEventListener('click',()=>{
    eleccion = 4;
    cambiar();
})  

th.addEventListener('input',()=>{
    nHoja=flagNueve.value;
    NumHoja1.setAttribute("value",nHoja);
    NumHoja2.setAttribute("value",nHoja);
    NumHoja3.setAttribute("value",nHoja);
    NumHoja4.setAttribute("value",nHoja);
    NumHoja5.setAttribute("value",nHoja);
    NumHoja6.setAttribute("value",nHoja);
    currentPage.textContent=nHoja;
    const max = load();
    th.setAttribute("max",max.toString());
})