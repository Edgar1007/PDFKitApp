const serieAI   = document.getElementById('serieAInicio');
const serieBI   = document.getElementById('serieBInicio');
const serieCI   = document.getElementById('serieCInicio');
const serieRAI  = document.getElementById('serieRAInicio');
const serieSRAI = document.getElementById('serieSRAInicio');
const otrasI    = document.getElementById('otrasInicio');
const l1I = document.getElementById('l1Inicio');
const l2I = document.getElementById('l2Inicio');
const l3I = document.getElementById('l3Inicio');
const l4I = document.getElementById('l4Inicio');
const l5I = document.getElementById('l5Inicio');
const l6I = document.getElementById('l6Inicio');
const tamano1 = document.getElementById('tipoSerieAI');
const tamano2 = document.getElementById('tipoSerieBI');
const tamano3 = document.getElementById('tipoSerieCI');
const tamano4 = document.getElementById('tipoSerieRAI');
const tamano5 = document.getElementById('tipoSerieSRAI');
const tamano6 = document.getElementById('tipoSerieOtrasI');
const addPageI = document.getElementById('addPageI');
let size = '';
let flag5 = 0;

let cambioss = 1;
const cambiossncia = ()=>{
    if( cambioss == 1){
        serieAI.classList.value = 'hojitaI hojitaActI',
        l1I.classList.value= 'hojotaI hojotaActI',
        flag5 = 1;
        console.log(flag5);
    }
    else{
        serieAI.classList.value = 'hojitaI',
        l1I.classList.value= 'hojotaI'
    }
    if( cambioss == 2){
        serieBI.classList.value = 'hojitaI hojitaActI',
        l2I.classList.value= 'hojotaI hojotaActI',
        flag5 = 2;
        console.log(flag5);
    }
    else{
        serieBI.classList.value = 'hojitaI',
        l2I.classList.value= 'hojotaI'
    }
    if( cambioss == 3){
        serieCI.classList.value = 'hojitaI hojitaActI',
        l3I.classList.value= 'hojotaI hojotaActI',
        flag5 = 3;
        console.log(flag5);
    }
    else{
        serieCI.classList.value = 'hojitaI',
        l3I.classList.value= 'hojotaI'
    }
    if( cambioss == 4){
        serieRAI.classList.value = 'hojitaI hojitaActI',
        l4I.classList.value= 'hojotaI hojotaActI',
        flag5 = 4;
        console.log(flag5);
    }
    else{
        serieRAI.classList.value = 'hojitaI',
        l4I.classList.value= 'hojotaI'
    }
    if( cambioss == 5){
        serieSRAI.classList.value = 'hojitaI hojitaActI',
        l5I.classList.value= 'hojotaI hojotaActI',
        flag5=5;
        console.log(flag5);
    }
    else{
        serieSRAI.classList.value = 'hojitaI',
        l5I.classList.value= 'hojotaI'
    }
    if( cambioss == 6){
        otrasI.classList.value = 'hojitaI hojitaActI',
        l6I.classList.value= 'hojotaI hojotaActI',
        flag5=6;
        console.log(flag5);
    }
    else{
        otrasI.classList.value = 'hojitaI',
        l6I.classList.value= 'hojotaI'
    }
    
    
}
        
serieAI.addEventListener('click',()=>{
    cambioss = 1;
    cambiossncia();
})
serieBI.addEventListener('click',()=>{
    cambioss = 2;
    cambiossncia();
})  
serieCI.addEventListener('click',()=>{
    cambioss = 3;
    cambiossncia();
})  
serieRAI.addEventListener('click',()=>{
    cambioss = 4;
    cambiossncia();
})  
serieSRAI.addEventListener('click',()=>{
    cambioss = 5;
    cambiossncia();
}) 
otrasI.addEventListener('click',()=>{
    cambioss = 6;
    cambiossncia();
})   

addPageI.addEventListener('click',()=>{
    console.log('aqui')
    switch(flag5){
        case 1:
             size= tamano1.value;
        break;
        case 2:
             size= tamano2.value;
        break;
        case 3:
             size= tamano3.value;
        break;
        case 4:
             size= tamano4.value;
        break;
        case 5:
             size= tamano5.value;
        break;
        case 6:
             size= tamano6.value;
        break;
    }

    cuerpo=JSON.stringify({id:0,size});
    console.log(cuerpo);
  
    fetch('/guardarHoja', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: cuerpo,
     })
    redirigir();
});

const redirigir=()=> {
    window.location.href = 'http://localhost:8080/';
  }