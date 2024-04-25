const ctrlz = document.getElementById('ctrlz');

ctrlz.addEventListener('click',()=>{
    const nHoja=parseInt(flagNueve.value);
    cuerpo=JSON.stringify({id:15,nHoja});
    console.log(cuerpo);
    fetch('/generarPDF', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: cuerpo,
     })
})

