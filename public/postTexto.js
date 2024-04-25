const $form       = document.querySelector('#form');
const espacio1    = document.getElementById('espacio1');
const espacio0    = document.getElementById('espacio0');
const otroEspacio = document.getElementById('otroEspacio');
const message1    = document.getElementById('message1');
const message2    = document.getElementById('message2');
const flagNueve   = document.getElementById('hojaTurno');
var editor        = document.getElementById('texto');
const bold2       = document.getElementById('bold');
const oblique2    = document.getElementById('oblique');
const strike2     = document.getElementById('strike');
const underline2  = document.getElementById('underline');
const right2      = document.getElementById('right');
const left2       = document.getElementById('left');
const center2     = document.getElementById('center');
const justify2    = document.getElementById('justify');
const tamano2     = document.getElementById('tamano');
const color2      = document.getElementById('color');

let flag11=false;
let banderaTxt1=2;
let banderaTxt2=2;
let banderaTxt3=2;
let banderaTxt4=2;

color2.addEventListener('input',() => {
  const tt=color2.value;
  editor.style.color = tt;;
})

tamano2.addEventListener('input',() => {
  const tt=tamano2.value;
  editor.style.fontSize = `${tt}px`;
})

right2.addEventListener('change',() => {
  editor.style.textAlign = "right";
})

left2.addEventListener('change',() => {
  editor.style.textAlign = "left";
})

center2.addEventListener('change',() => {
  editor.style.textAlign = "center";
})

justify2.addEventListener('change',() => {
  editor.style.textAlign = "justify";
})

bold2.addEventListener('click',() => {
  if(banderaTxt1==2){
    editor.style.fontWeight = "bold";
    banderaTxt1=1;
  }
  else{
    editor.style.fontWeight = "normal";
    banderaTxt1=2
  }
})

oblique2.addEventListener('click',() => {
  if(banderaTxt2==2){
    editor.style.fontStyle ="oblique";
    banderaTxt2=1;
  }
  else{
    editor.style.fontStyle= "normal";
    banderaTxt2=2
  }
})

strike2.addEventListener('click',() => {
  if(banderaTxt3==2){
    editor.style.textDecoration = "line-through";
    banderaTxt3=1;
  }
  else{
    editor.style.textDecoration = "none"
    banderaTxt3=2
  }
})

underline2.addEventListener('click',() => {
  if(banderaTxt4==2){
    editor.style.textDecoration = "underline";
    banderaTxt4=1;
  }
  else{
    editor.style.textDecoration = "none";
    banderaTxt4=2
  } 
})


const $id = document.querySelector('#aid2')
const renderId=(formData)=>{
  const ID = formData.get('estilo');//obtiene el par del formulario formdata llamado estilo
  //$id.textContent = ID;//asigna el valor del par ID al parrafo en html
  console.log(ID);
  return ID
  }

const $bold = document.querySelector('#bold2')
const renderBold=(formData)=>{
  const bold = formData.get('bold');
  //$bold.textContent = bold;
  return bold
  }

const $oblique = document.querySelector('#oblique2')
const renderOblique=(formData)=>{
  const obl = formData.get('oblique');
  //$oblique.textContent = obl;
  return obl
  }

const $underline = document.querySelector('#underline2')
const renderUndeline=(formData)=>{
  const under = formData.get('underline');
  //$underline.textContent = under;
  return under
  }

const continuarONo=(formData)=>{
  const continuar = formData.get('continued');
  return continuar
}

const $strike = document.querySelector('#strike2')
const renderStrike=(formData)=>{
  const strike = formData.get('strike');
  //$strike.textContent = strike;
  return strike
  }

const $tamano = document.querySelector('#tamano2')
const renderTamano=(formData)=>{
  const tamano = formData.get('tamano');
  //$tamano.textContent = tamano;
  return tamano;
  }

const $anchoParrafo = document.querySelector('#anchoParrafo2')
const renderAncho=(formData)=>{
  const anchoP = formData.get('anchoParrafo');
  //$anchoParrafo.textContent = anchoP;
  return anchoP
  }

const $color = document.querySelector('#color2')
const renderColor=(formData)=>{
  const color = formData.get('color');
  //$color.textContent = color;
  return color
  }

const $alineacion = document.querySelector('#alineacion2')
const renderAlineacion=(formData)=>{
  const alin = formData.get('aling');
  //$alineacion.textContent = alin;
  return alin
  }

const $texto = document.querySelector('#texto2')
const renderTexto=(formData)=>{
  const texto = formData.get('texto');
  //$texto.textContent = texto;
  return texto
  }

// $file.addEventListener('change', (event) => {
//   const formData = new FormData($form)
//   renderImage(formData)
//   })

// const postData= async(url = '', data = {})=> {
//   // Opciones por defecto estan marcadas con un *
//   const response = await fetch(url, {
//     method: 'POST',
//     mode: 'cors', 
//     cache: 'no-cache',
//     credentials: 'same-origin', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     redirect: 'follow', 
//     referrerPolicy: 'no-referrer', 
//     body: JSON.stringify(data) 
//     });
//   return response.json(); 
// }

// postData("http://localhost:8080/generarPDF", { answer: 42 })
//     .then(data => {
//       console.log(data); 
// });

$form.addEventListener('submit', (event) => {
    event.preventDefault();//evita que la pagina se recargue
    const nHoja=parseInt(flagNueve.value);
    const formData = new FormData(event.currentTarget);
    const aid = renderId(formData);
    const id = parseInt(aid,10)
    const atamano= renderTamano(formData);
    const tamano=parseInt(atamano,10)
    const aanchoParrafo = renderAncho(formData);
    const anchoParrafo=parseInt(aanchoParrafo,10)
    const alineacion = renderAlineacion(formData);
    const texto = renderTexto(formData);
    const bold = renderBold(formData);
    const oblique = renderOblique(formData);
    const underline = renderUndeline(formData);
    const strike = renderStrike(formData);
    const color= renderColor(formData);
    const continued= continuarONo(formData);

    console.log(nHoja);
    const objeto = {id,tamano,anchoParrafo,alineacion,texto,bold,oblique,underline,strike,color,nHoja,continued};
    console.log(objeto)
    cuerpo=JSON.stringify(objeto);
    console.log(cuerpo);

    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: cuerpo,
     })
     flag11=true;
     console.log(flag11)
});

if(flag11==true){
  document.getElementById("pspdfkit").innerHTML = '<embed src="output.pdf" type="application/pdf" width="100%" height="100%"/>' ;
  flag11=false;
}
console.log(flag11);

let flag6=2;
otroEspacio.addEventListener('click', () => {
  message1.classList.value = 'msg1';
  message2.classList.value = 'msg1';

  if(flag6==1){
    espacio0.classList.value = 'esp-ac',
    espacio1.classList.value = 'esp'
    flag6=2;
  }
  else{
    espacio1.classList.value = 'esp-ac',
    espacio0.classList.value = 'esp'
    flag6=1;
  }
  console.log(flag6);
})

let flag7=0;
espacio0.addEventListener('click', () => {
  const nHoja=parseInt(flagNueve.value);
  flag7 += 1;
  message1.classList.value = 'msg1';
  if(flag7%2==0){
    message2.classList.value = 'msg1-act';
  }
  else{
    message2.classList.value = 'msg1-act2';
  }
  const id=13;
  const cuerpo=JSON.stringify({id,nHoja});
  console.log(cuerpo);
  fetch('/generarPDF', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
    body: cuerpo,
 })
})

espacio1.addEventListener('keydown', (event) => {
  const nHoja=parseInt(flagNueve.value);
  message1.classList.value = 'msg1';
  message2.classList.value = 'msg1';
  if(event.key=="Enter"){
    event.preventDefault();
    const id=13;
    const espacio=parseFloat(espacio1.value);
    if(espacio>3.0){
      message1.classList.value = 'msg1-act'
    }
    else{
      flag7 += 1;
      const cuerpo=JSON.stringify({id,espacio,nHoja});
      console.log(cuerpo);
      fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
       body: cuerpo,
      })
      if(flag7%2==0){
        message2.classList.value = 'msg1-act';
      }
      else{
        message2.classList.value = 'msg1-act2';
      }
     }
    }
    
  
});

