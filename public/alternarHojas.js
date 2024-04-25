const serieA   = document.getElementById('serieA');
const serieB   = document.getElementById('serieB');
const serieC   = document.getElementById('serieC');
const serieRA  = document.getElementById('serieRA');
const serieSRA = document.getElementById('serieSRA');
const otras    = document.getElementById('otras');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const l5 = document.getElementById('l5');
const l6 = document.getElementById('l6');

let flag1 = 0;

let altr = 1;
const altrncia = ()=>{
    if( altr == 1){
        serieA.classList.value = 'hojita hojitaAct',
        l1.classList.value= 'hojota hojotaAct',
        flag1 = 1;
    }
    else{
        serieA.classList.value = 'hojita',
        l1.classList.value= 'hojota'
    }
    if( altr == 2){
        serieB.classList.value = 'hojita hojitaAct',
        l2.classList.value= 'hojota hojotaAct',
        flag1 = 2;
    }
    else{
        serieB.classList.value = 'hojita',
        l2.classList.value= 'hojota'
    }
    if( altr == 3){
        serieC.classList.value = 'hojita hojitaAct',
        l3.classList.value= 'hojota hojotaAct',
        flag1 = 3;
    }
    else{
        serieC.classList.value = 'hojita',
        l3.classList.value= 'hojota'
    }
    if( altr == 4){
        serieRA.classList.value = 'hojita hojitaAct',
        l4.classList.value= 'hojota hojotaAct',
        flag1 = 4;
    }
    else{
        serieRA.classList.value = 'hojita',
        l4.classList.value= 'hojota'
    }
    if( altr == 5){
        serieSRA.classList.value = 'hojita hojitaAct',
        l5.classList.value= 'hojota hojotaAct',
        flag1=5;
    }
    else{
        serieSRA.classList.value = 'hojita',
        l5.classList.value= 'hojota'
    }
    if( altr == 6){
        otras.classList.value = 'hojita hojitaAct',
        l6.classList.value= 'hojota hojotaAct',
        flag1=6;
    }
    else{
        otras.classList.value = 'hojita',
        l6.classList.value= 'hojota'
    }
    
    
}
        
serieA.addEventListener('click',()=>{
    altr = 1;
    altrncia();
})
serieB.addEventListener('click',()=>{
    altr = 2;
    altrncia();
})  
serieC.addEventListener('click',()=>{
    altr = 3;
    altrncia();
})  
serieRA.addEventListener('click',()=>{
    altr = 4;
    altrncia();
})  
serieSRA.addEventListener('click',()=>{
    altr = 5;
    altrncia();
}) 
otras.addEventListener('click',()=>{
    altr = 6;
    altrncia();
})   