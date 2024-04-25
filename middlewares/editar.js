const { response } = require("express");
const {guardarDB, 
          leerDB,
 guardarContador,
    leerContador,
esperaGuardarImagen,
    leeBandera12,
guardaBandera12,
guardaPrimeraHoja}= require('../helpers/guardar');

const registraComandos=async(req,res=response, next)=>{
    objetoN={};
    let count = await leerContador();
    objeto = await leerDB();
    if(objeto==null){
        objeto={};
        }
    let flag12 = await leeBandera12();

    const baseArray = [];
        Object.keys(objeto).forEach(key=>{
            const algoritmo = objeto[key];
            baseArray.push(algoritmo);
        });

    const id=parseInt(req.body.id);

    let f=0;
    let c = 0;
    let flag10=false;
    let hojasArray = [];
    const{nHoja}=req.body;
    if(nHoja){
        console.log(`Se crea nueva instruccion en Hoja${nHoja}`);
        if(nHoja!=1){
            for (let i= 0; i < baseArray.length; i++) {
                const ins = baseArray[i];
                banderaHoja=ins.flag8;
                if(banderaHoja){
                    c += 1;
                    if(c==nHoja){
                        f=i;
                        flag10=true;
                        console.log('Significa que quiero agregar contenido una hoja diferente a la 1 pero no la ultima');
                    }
                }
            }
            if(flag10==false){
                f=baseArray.length;
                console.log('Significa que quiero agregar contenido a la ultima hoja');
                    
            }
        }
        else{
            for (let i= 0; i < baseArray.length; i++) {
                const ins = baseArray[i];
                banderaHoja=ins.flag8;
                if(banderaHoja){
                    c += 1;
                    hojasArray[c-1]=i;
                }
            }
            if(c!=0){
                console.log('Significa que existen otras hojas y quiero escribir al final de la hoja 1')
                f=hojasArray[0];
            }
            else{
                console.log('Significa que solo existe la hoja 1 y quiero escribir al final de ella')
                f=baseArray.length;
            }
            
        }
    }
    else{
        if(id==21){
            console.log('Se eliminara una hoja')
            const Hoja = req.body.Hoja;
            for (let i= 0; i < baseArray.length; i++) {
                const ins = baseArray[i];
                banderaHoja=ins.flag8;
                if(banderaHoja){
                    c += 1;
                    hojasArray[c-1]=i;
                }
            }
            hojasArray.splice(0,0,0);
            hojasArray.splice(hojasArray.length,0,baseArray.length);
            
            if(Hoja==1){
               console.log('Se elimina la primera hoja')
               let a=0;
               let b=hojasArray[Hoja];
               const nuevoSize = baseArray[hojasArray[Hoja]]
               console.log(nuevoSize.size);
               guardaPrimeraHoja(nuevoSize.size);
               console.log(hojasArray);
                for (let i=0; i<((b-a)+1); i++) {
                    baseArray.splice(a,1);
                }

            }
            else{
                console.log('Se elimina una hoja especifica')
                let a=hojasArray[Hoja-1];
                let b=hojasArray[Hoja]-1;
                count = count-(b-a)+1;
                console.log(hojasArray);
                for (let i=0; i<((b-a)+1); i++) {
                    baseArray.splice(a,1);
                }
                
            }
            
        }
        else{
            console.log('Se creara una hoja nueva');
            f=baseArray.length;
            
        }
        
    }
    



    if(id==1){
        count += 1;
        const {id,tamano, texto,anchoParrafo,alineacion,nHoja,...otro} = req.body; 
        baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,alineacion,otro});
    }
    if(id==2){
        count += 1;
        const {id,tamano,texto,nColumnas,espacioColumnas,ancho,alto,nHoja,...otro} = req.body
        baseArray.splice(f,0,{id,tamano,texto,nColumnas,espacioColumnas,ancho,otro});
    }
    if(id==3){
        count += 1;
        const {id,tamano,texto,anchoParrafo,alineacion,nHoja,continued,...otro} = req.body;
        let continued2 = (continued==="true");
        console.log(continued2);
        baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,alineacion,continued2,otro});
    }
    if(id==4){
        count += 1;
        const {id,tamano,texto,anchoParrafo,alineacion,nHoja,continued,...otro} = req.body;
        let continued2 = (continued==="true");
        console.log(continued2);
        baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,alineacion,otro});
    }
    if(id==5){
        count += 1;
        const {id,tamano,texto,anchoParrafo,alineacion,nHoja,continued,...otro} = req.body;
        let continued2 = (continued==="true");
        console.log(continued2);
        baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,alineacion,otro});
    }
    if(id==6){
        count += 1;
        const{id,ruta,x,y,ancho,largo,...otro}=req.body;
        baseArray.splice(f,0,{id,ruta,x,y,ancho,largo});
    }
    if(id==7){
        count += 1;
        const{id,ruta,x,y,escala,...otro}=req.body;
        baseArray.splice(f,0,{id,ruta,escala,x,y});
    }
    if(id==8){
        count += 1;
        const{id,ruta,ancho,largo,x,y,...otro}=req.body;
        baseArray.splice(f,0,{id,ruta,ancho,largo,x,y});
    }
    if(id==9){
        count += 1;
        const{id,ruta,ancho,x,y,...otro}=req.body;
        baseArray.splice(f,0,{id,ruta,ancho,x,y});
    }
    if(id==10){
        count += 1;
        const{id,largo,ancho,x,y,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,x,y,ancho,largo});
    }
    if(id==11){
        count += 1;
        const{id,largo,ancho,x,y,nHoja,...otro}=req.body;
        const opc = [];
        Object.keys(otro).forEach(key=>{
            const tarea = otro[key];
            opc.push(tarea);
        });
        baseArray.splice(f,0,{id,opc,x,y,largo,ancho});
    }
    if(id==12){
        count += 1;
        const{id,nombre,color,x,y,ancho,largo,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,nombre,color,x,y,ancho,largo});
    }
    if(id==13){
        count += 1;
        const{id,espacio,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,espacio});
    }
    if(id==14){
        count += 1;
        const{id,size,flag8} = req.body;
        baseArray.splice(f,0,{id,size,flag8});
    }
    if(id==15){
            baseArray.splice(f-1,1);
            count -= 1;
        
    }
    if(id==16){
        count += 1;
        const{id,x,y,ancho,anchoLinea,colorRelleno,colorLinea,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,x,y,ancho,anchoLinea,colorRelleno,colorLinea});
    }
    if(id==17){
        count += 1;
        const{id,x,y,ancho,largo,anchoLinea,colorRelleno,colorLinea,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,x,y,ancho,largo,anchoLinea,colorRelleno,colorLinea});
    }
    if(id==18){
        count += 1;
        const{id,centroX,centroY,radioX,radioY,anchoLinea,colorRelleno,colorLinea,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,centroX,centroY,radioX,radioY,anchoLinea,colorRelleno,colorLinea});
    }
    if(id==19){
        count += 1;
        const{id,centroX,centroY,radio,anchoLinea,colorRelleno,colorLinea,nHoja,...otro}=req.body;
        baseArray.splice(f,0,{id,centroX,centroY,radio,anchoLinea,colorRelleno,colorLinea});
    }
    if(id==23){
        const {texto,nHoja,indicador,...otro} = req.body;
        tamano=parseInt(req.body.tamano);
        anchoParrafo=parseInt(req.body.anchoParrafo);
        x=parseInt(req.body.x);
        y=parseInt(req.body.y);
        if(!indicador){
            
            if(flag12==false){
                count += 1;
                baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,otro,x,y});
                guardaBandera12(flag12=true);
            }
            else{
                baseArray.splice(f-1,1,{id,tamano,texto,anchoParrafo,otro,x,y});
            }
        }
        else{
            guardaBandera12(flag12=false);
        }
    }
    if(id==22){
        const {texto,nHoja,indicador,...otro} = req.body;
        tamano=parseInt(req.body.tamano);
        anchoParrafo=parseInt(req.body.anchoParrafo);
        x=parseInt(req.body.x);
        y=parseInt(req.body.y);
        if(!indicador){
            
            if(flag12==false){
                count += 1;
                baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,otro,x,y});
                guardaBandera12(flag12=true);
            }
            else{
                baseArray.splice(f-1,1,{id,tamano,texto,anchoParrafo,otro,x,y});
            }
        }
        else{
            guardaBandera12(flag12=false);
        }
    }
    if(id==24){
        const {texto,nHoja,indicador,...otro} = req.body;
        tamano=parseInt(req.body.tamano);
        anchoParrafo=parseInt(req.body.anchoParrafo);
        x=parseInt(req.body.x);
        y=parseInt(req.body.y);
        if(!indicador){
            
            if(flag12==false){
                count += 1;
                baseArray.splice(f,0,{id,tamano,texto,anchoParrafo,otro,x,y});
                guardaBandera12(flag12=true);
            }
            else{
                baseArray.splice(f-1,1,{id,tamano,texto,anchoParrafo,otro,x,y});
            }
        }
        else{
            guardaBandera12(flag12=false);
        }
    }

    for (let i = 0; i < baseArray.length; i++) {
        const instruccion= baseArray[i];
        objetoN[i]=instruccion;
    }
    guardarDB(objetoN);
    guardarContador(count);
    console.log(count);
    next()
}

const leeImagen=async(req=request,res=response,next)=>{
    objetoN={};
    let cuentt = await leerContador();
    objeto = await leerDB();
    let flag12 = await leeBandera12();

    if(objeto==null){
        objeto={};
        }

    const baseArray = [];
        Object.keys(objeto).forEach(key=>{
            const algoritmo = objeto[key];
            baseArray.push(algoritmo);
        });

    let f=0;
    let c = 0;
    const{nHoja}=req.body;
    let flag10=false;

    for (let i= 0; i < baseArray.length; i++) {
        const ins = baseArray[i];
        banderaHoja=ins.flag8;
        if(banderaHoja){
            c += 1;
            if(c==nHoja){
                f=i;
                flag10=true;
            }
            else{
                f=baseArray.length;
                flag10=true;
            }
        }
    }
    if(flag10==false){
        f=baseArray.length;
    }

    let archivoEntrada;
    let ruta;
    let x;
    let y;
    let ancho;
    let largo;
    let escala;

    const id=parseInt(req.body.id);
     
    if (!req.files || Object.keys(req.files).length === 0) {
            console.log('no se cargo el archivo');
        }
    
        switch(id){
            case 9:
                ancho=parseInt(req.body.ancho);
                x=parseInt(req.body.x);
                y=parseInt(req.body.y);
                console.log(archivoEntrada)
                archivoEntrada = req.files.file1;
                ruta = 'C:/Users/rico_/OneDrive/Escritorio/Works/Redention3/db/'+ archivoEntrada.name;
                
                cuentt += 1;
                baseArray.splice(f,0,{id,ruta,ancho,x,y});
    
                await esperaGuardarImagen(archivoEntrada,ruta);
            break;
            case 8:
                ancho=parseInt(req.body.ancho);
                largo=parseInt(req.body.largo);
                x=parseInt(req.body.x);
                y=parseInt(req.body.y);
                archivoEntrada = req.files.file4;
                ruta = 'C:/Users/rico_/OneDrive/Escritorio/Works/Redention3/db/'+ archivoEntrada.name;
                
                cuentt += 1;
                baseArray.splice(f,0,{id,ruta,ancho,largo,x,y});
               
                await esperaGuardarImagen(archivoEntrada,ruta);
            break;
            case 7:
                escala=parseInt(req.body.escala);
                x=parseInt(req.body.x);
                y=parseInt(req.body.y);
                archivoEntrada = req.files.file3;
                ruta = 'C:/Users/rico_/OneDrive/Escritorio/Works/Redention3/db/'+ archivoEntrada.name;
                
                cuentt += 1;
                baseArray.splice(f,0,{id,ruta,escala,x,y});
                
                await esperaGuardarImagen(archivoEntrada,ruta);
            break;
            case 6:
                ancho=parseInt(req.body.ancho);
                largo=parseInt(req.body.largo);
                x=parseInt(req.body.x);
                y=parseInt(req.body.y);
                archivoEntrada = req.files.file2;//archivo es el nombre del file
                ruta = 'C:/Users/rico_/OneDrive/Escritorio/Works/Redention3/db/'+ archivoEntrada.name;
                
                cuentt += 1;
                baseArray.splice(f,0,{id,ruta,x,y,ancho,largo});
                
                await esperaGuardarImagen(archivoEntrada,ruta);
            break;
            case 20:
                const indicador = req.body.indicador;
                if(!indicador){
                    ancho=parseInt(req.body.ancho);
                    largo=parseInt(req.body.largo);
                    x=parseInt(req.body.x);
                    y=parseInt(req.body.y);
                    archivoEntrada = req.files.file5;
                    ruta = 'C:/Users/rico_/OneDrive/Escritorio/Works/Redention3/db/'+ archivoEntrada.name;
                    if(flag12==false){
                        cuentt += 1;
                        baseArray.splice(f,0,{id,ruta,x,y,ancho,largo});
                        guardaBandera12(flag12=true);
                    }
                    else{
                        baseArray.splice(f-1,1,{id,ruta,x,y,ancho,largo});
                    }
                    await esperaGuardarImagen(archivoEntrada,ruta);
            
                }
                else{
                    guardaBandera12(flag12=false);
                }
                
            break;
        }

    for (let i = 0; i < baseArray.length; i++) {
        const instruccion= baseArray[i];
        objetoN[i+1]=instruccion;
    }

    guardarDB(objetoN);
    guardarContador(cuentt);
    console.log(cuentt); 
    next(); 
}



module.exports={
    registraComandos,
    leeImagen
}
