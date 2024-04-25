const addPage = document.getElementById('addPage');
let size = '';

const load=()=> {
  NPaginas = localStorage.getItem("NumeroDeHojas");
  return NPaginas;
}

const save=(NPaginas)=>{
  localStorage.setItem("NumeroDeHojas", NPaginas.toString());
}

const renderSeriesA=()=>{
  const tamanoSA=document.getElementById('tipoSerieA');
  console.log(tamanoSA.value);
  return tamanoSA.value;
}
const renderSeriesB=()=>{
  const tamanoSB=document.getElementById('tipoSerieB');
  console.log(tamanoSB.value);
  return tamanoSB.value;
}
const renderSeriesC=()=>{
  const tamanoSC=document.getElementById('tipoSerieC');
  console.log(tamanoSC.value);
  return tamanoSC.value;
}
const renderSeriesRA=()=>{
  const tamanoSRA=document.getElementById('tipoSerieRA');
  console.log(tamanoSRA.value);
  return tamanoSRA.value;
}
const renderSeriesSRA=()=>{
  const tamanoSSRA=document.getElementById('tipoSerieSRA');
  console.log(tamanoSSRA.value);
  return tamanoSSRA.value;
}
const renderSeriesOtras=()=>{
  const tamanoSOtras=document.getElementById('tipoSerieOtras');
  console.log(tamanoSOtras.value);
  return tamanoSOtras.value;
}

addPage.addEventListener('click',()=>{
  NPaginas=parseInt(load());
  if(!NPaginas){
    NPaginas=1;
  }
  
  NPaginas = NPaginas + 1;
  console.log(NPaginas);
  save(NPaginas);

  if(flag1==1){
    size=renderSeriesA();
  }  
  if(flag1==2){
    size=renderSeriesB();
  }
  if(flag1==3){
    size=renderSeriesC();
  }  
  if(flag1==4){
    size=renderSeriesRA();
  }
  if(flag1==5){
    size=renderSeriesSRA();
  }
  if(flag1==6){
    size=renderSeriesOtras();
  }
  cuerpo=JSON.stringify({id:14,size,flag8:true});
  console.log(cuerpo);
    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: cuerpo,
     })
})