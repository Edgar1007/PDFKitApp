let cc= 0;
const Nentradas=document.getElementById('numeroselector');
const bandera=document.getElementById('entradas');

const insertarEntradas = ()=>{
    cc += 1;
    console.log(cc);
    bandera.insertAdjacentHTML('afterend',`<br><div> <label class="anchura"><p>opcion-${cc}</p><input type="text" name="s${cc}" id="s${cc}" class="entrada"></label></div>`);
}

Nentradas.addEventListener('input',()=>{
    insertarEntradas();
})