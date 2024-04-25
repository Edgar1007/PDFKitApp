const $form1 = document.querySelector('#imagen1');
const $form2 = document.querySelector('#imagen2');
const $form3 = document.querySelector('#imagen3');
const $form4 = document.querySelector('#imagen4');


$form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData1 = new FormData(event.currentTarget);

    fetch('/images', {
        method: 'POST',
        body: formData1,
     })
})
$form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData2 = new FormData(event.currentTarget);

    fetch('/images', {
        method: 'POST',
        body: formData2,
     })
})
$form3.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData3 = new FormData(event.currentTarget);

    fetch('/images', {
        method: 'POST',
        body: formData3,
     })
})
$form4.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData4 = new FormData(event.currentTarget);

    fetch('/images', {
        method: 'POST',
        body: formData4,
     })
})