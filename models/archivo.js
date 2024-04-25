    const fs = require("fs");
    const PDFDocument = require("pdfkit-table");
    const {response} = require('express');
    const { leerContador } = require("../helpers/guardar");
    let cccc = leerContador();

class ArchivoPDF{
    
    constructor(size){
        this.doc = new PDFDocument({size});
        this.doc.pipe(fs.createWriteStream('public/output.pdf'));
        this.doc.initForm();
    }
  
  insertarParrafo(tamano=8,texto='',anchoParrafo=410,alineacion='center',otro={}){
      const {underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.text(texto, {
          width: anchoParrafo,
          align: alineacion,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing
        }
      );
    } 
      
  textoEnColumnas(tamano=8,texto='',nColumnas=2,espacioColumnas=15,[ancho, alto],otro={}){
     const {color,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      this.doc.text(texto, {
          columns: nColumnas,
          columnGap: espacioColumnas,
          height: alto,
          width: ancho,
          align: 'justify',
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing
      });
    }
  textoEnTimesRoman(tamano=8,texto='',anchoParrafo=410,alineacion='center',continued,otro={}){
      const {color,bold,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      if(bold){
        this.doc.font('Times-Bold');
      }else{
        this.doc.font('Times-Roman');
      }
      this.doc.text(texto, {
          width: anchoParrafo,
          align: alineacion,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing,
          continued
        }
      );
    }
  textoEnHelvetica(tamano=8,texto='',anchoParrafo=410,alineacion='center',continued,otro={}){
      const {color,bold,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      if(bold){
        this.doc.font('Helvetica-Bold');
      }else{
        this.doc.font('Helvetica');
      }
      this.doc.text(texto, {
          width: anchoParrafo,
          align: alineacion,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing,
          continued
        }
      );
    }
  textoEnCourier(tamano=8,texto='',anchoParrafo=410,alineacion='center',continued,otro={}){
      const {color,bold,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      if(bold){
        this.doc.font('Courier-Bold');
      }else{
        this.doc.font('Courier');
      }
      this.doc.text(texto, {
          width: anchoParrafo,
          align: alineacion,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing,
          continued
        }
      );
    }
    textoEnTimesRomanXC(tamano=8,texto='',anchoParrafo=410,otro={},x=0,y=0){
      const {color,bold,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      if(bold){
        this.doc.font('Times-Bold');
      }else{
        this.doc.font('Times-Roman');
      }
      this.doc.text(texto,x,y, {
          width: anchoParrafo,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing
        }
      );
    }
  textoEnHelveticaXC(tamano=8,texto='',anchoParrafo=410,otro={},x=0,y=0){
      const {color,bold,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      if(bold){
        this.doc.font('Helvetica-Bold');
      }else{
        this.doc.font('Helvetica');
      }
      this.doc.text(texto,x,y, {
          width: anchoParrafo,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing
        }
      );
    }
  textoEnCourierXC(tamano=8,texto='',anchoParrafo=410,otro={},x=0,y=0){
      const {color,bold,underline,strike,oblique,lineGap,wordSpacing,characterSpacing,...resto} = otro;
      this.doc.fontSize(tamano);
      this.doc.fillColor(color);
      if(bold){
        this.doc.font('Courier-Bold');
      }else{
        this.doc.font('Courier');
      }
      this.doc.text(texto,x,y, {
          width: anchoParrafo,
          underline,
          strike,
          oblique,
          lineGap,
          wordSpacing,
          characterSpacing
        }
      );
    }
  cargarImagenMarco(ruta='',x,y,ancho,largo){
        this.doc.image(ruta, x, y, {fit:[ancho,largo],align:'center',valign:'center'})
           .rect(x,y,ancho,largo).stroke()
      }
    
  cargarImagenEscalada(ruta='',escala=1,x,y){
        this.doc.image(ruta,x,y,{scale: escala})
      }

  manipularImagen(ruta='',ancho=1,largo=1,x,y){
        this.doc.image(ruta,x,y,{width:ancho,height:largo})
      }

  cargarImagen(ruta='',ancho=1,x,y){
        this.doc.image(ruta,x,y,{width: ancho})
      }

    
  cuadroDeTexto(x,y,ancho,largo){
        this.doc.formText(`cuadroTexto${cccc}`,x,y,ancho,largo,{
          multiline:true
        });
      }

  selector(opc=[],x,y,largo,ancho){
        opc.unshift('');
        const opciones = { select: opc, 
                     value:'', 
                     defaultValue:'',
                     align:'left' }; 
        this.doc.formCombo('selector', x, y, largo, ancho, opciones);
      }
  generarBoton(nombre='TestButton',color='',x,y,ancho, largo){
        var optus = { backgroundColor: color, label: nombre }; 
        this.doc.formPushButton('btn', x, y, ancho, largo, optus);
      }
  generarCuadrado(x,y,ancho,anchoLinea,colorRelleno,colorLinea){
        if(colorRelleno=="null"){
          this.doc.rect(x, y, ancho, ancho)
                  .lineWidth(anchoLinea)
                  .stroke(colorLinea);
        }
        else{
          this.doc.rect(x, y, ancho, ancho)
                  .lineWidth(anchoLinea)
                  .fillAndStroke(colorRelleno,colorLinea);
        }
  }
  generarRectangulo(x,y,ancho,largo,anchoLinea,colorRelleno,colorLinea){
        if(colorRelleno=="null"){
          this.doc.roundedRect(x, y, ancho, largo, 0)
              .lineWidth(anchoLinea)
              .stroke(colorLinea);
        }
        else{
          this.doc.roundedRect(x, y, ancho, largo, 0)
                  .lineWidth(anchoLinea)
                  .fillAndStroke(colorRelleno,colorLinea);
        }
  }
  generarElipse(centroX,centroY,radioX,radioY,anchoLinea,colorRelleno,colorLinea){
        if(colorRelleno=="null"){
          this.doc.ellipse(centroX, centroY, radioX, radioY)
                  .lineWidth(anchoLinea)
                  .stroke(colorLinea);
        }
        else{
          this.doc.ellipse(centroX, centroY, radioX, radioY)
                  .lineWidth(anchoLinea)
                  .fillAndStroke(colorRelleno,colorLinea);
        }
  }
  generarCirculo(centroX,centroY,radio,anchoLinea,colorRelleno,colorLinea){
        if(colorRelleno=="null"){
          this.doc.circle(centroX, centroY, radio)
                  .lineWidth(anchoLinea)
                  .stroke(colorLinea);
        }
        else{
          this.doc.circle(centroX, centroY, radio)
                  .lineWidth(anchoLinea)
                  .fillAndStroke(colorRelleno,colorLinea);
    }
  }

  espacioParrafo(espacio=0.5){
        this.doc.moveDown(espacio);
      }
  hojaNueva(size){
        this.doc.addPage({size});
      }
  mandarRespuesta(res=response){
        this.doc.pipe(res);
      }
  terminarPDF(){
        this.doc.end();
      }

    
    
   

}

module.exports = ArchivoPDF;