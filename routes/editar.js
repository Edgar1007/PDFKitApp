const { Router }= require('express');//metodo de express
const { check } = require('express-validator');//metodo de express-V
const router = Router();

const {registraComandos,leeImagen} = require('../middlewares/editar');
const {escribeArchivo,presentaPagina,guardaPrimeraHojaController} = require('../controllers/editar');

// const multer = require('multer');
// const upload = multer({dest: 'db/images'})

router.get('/inicio',
presentaPagina
);

router.post('/guardarHoja',
guardaPrimeraHojaController
);

router.post('/generarPDF',
     registraComandos,
     escribeArchivo
    // (req,res)=>{
    //     console.log(req.body);
    // res.json({   
    //     msg:'Todo OKKK'
    // })}
    );

router.post('/images',
    leeImagen,
    escribeArchivo
//     (req,res)=>{
//         console.log(req.files);
//     res.json({
//         msg:'Todo OKKK'
//     })}
);

module.exports = router;