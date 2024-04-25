const textos   = document.getElementById('textos');
const imagenes = document.getElementById('imagenes');
const formas   = document.getElementById('formas');
const FA       = document.getElementById('FA');
const pages    = document.getElementById('pages');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');
const content5 = document.getElementById('content5');

let flag4 = 1;

const changeOption = ()=>{
    if( choose == 1){
        textos.classList.value = 'option option-active',
        content1.classList.value = 'content content-active',
        flag4=1;
        formateaTextoPC();
        formateaImagen();
    }
    else{
        textos.classList.value = 'option',
        content1.classList.value = 'content'
    }
    if( choose == 2){
        imagenes.classList.value = 'option option-active',
        content2.classList.value = 'content content-active',
        flag4=2;
        formateaTextoPC();
        formateaImagen();
        nHoja=flagNueve.value;
        NumHoja1.setAttribute("value",nHoja);
    }
    else{
        imagenes.classList.value = 'option',
        content2.classList.value = 'content'
    }
    if( choose == 3){
        formas.classList.value = 'option option-active',
        content3.classList.value = 'content content-active',
        flag4=3;
        formateaTextoPC();
        formateaImagen();
    }
    else{
        formas.classList.value = 'option',
        content3.classList.value = 'content'
    }
    if( choose == 4){
        FA.classList.value = 'option option-active',
        content4.classList.value = 'content content-active',
        flag4=4;
        console.log(flag4);
    }
    else{
        FA.classList.value = 'option',
        content4.classList.value = 'content'
    }
    
    if( choose == 5){
        pages.classList.value = 'option option-active',
        content5.classList.value = 'content content-active',
        flag4=5;
        formateaTextoPC();
        formateaImagen();
    }
    else{
        pages.classList.value = 'option',
        content5.classList.value = 'content'
    }
}
        
textos.addEventListener('click',()=>{
    choose = 1;
    changeOption();
})
imagenes.addEventListener('click',()=>{
    choose = 2;
    changeOption();
})  
formas.addEventListener('click',()=>{
    choose = 3;
    changeOption();
})  
FA.addEventListener('click',()=>{
    choose = 4;
    changeOption();
})  
pages.addEventListener('click',()=>{
    choose = 5;
    changeOption();
})  