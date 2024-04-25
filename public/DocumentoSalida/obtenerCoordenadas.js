// 
// pdfjsLib.getDocument('../output.pdf').promise.then(function(pdf) {
//     return pdf.getPage(1);
// }).then(function(page) {
//   // Establecer la escala del viewport
//   var viewport = page.getViewport({ scale: 1.0 });});


// const myIframe = document.getElementById('fg');
// let startX, startY, endX, endY;

// myIframe.addEventListener("load", function() {
//     console.log('salu2')
//   const iframeDoc = myIframe.contentWindow.document;
//   const iframeBody = iframeDoc.body;

//   iframeDoc.addEventListener("mousedown", function(event) {
//     console.log('nada')
//     const pdfViewer = iframeDoc.getElementById("viewer");
//     const page = pdfViewer.getPageView(0).div;
//     const pageRect = page.getBoundingClientRect();
//     startX = event.clientX - pageRect.left;
//     startY = event.clientY - pageRect.top;
//   });

//   iframeDoc.addEventListener("mouseup", function(event) {
//     const pdfViewer = iframeDoc.getElementById("viewer");
//     const page = pdfViewer.getPageView(0).div;
//     const pageRect = page.getBoundingClientRect();
//     endX = event.clientX - pageRect.left;
//     endY = event.clientY - pageRect.top;
//     console.log(`Coordenadas iniciales: (${startX}, ${startY})`);
//     console.log(`Coordenadas finales: (${endX}, ${endY})`);
//   });
// });