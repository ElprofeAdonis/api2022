import express from "express";
import juntadirectiva from "../controllers/juntadirectiva";

const router = express.Router();

router.post("/formulario", juntadirectiva.createFormulario);

router.get("/formulario/:id_f", juntadirectiva.readFormulario);

router.put("/formulario/:id_f", juntadirectiva.updateFormulario);

router.delete("/formulario/:id_f", juntadirectiva.deleteFormulario);

// Muestra todos los formularios que tengan la junta directiva
router.post("/my-formulario", juntadirectiva.getFormulario);

//Comentarios al formulario por parte del super usuario
router.post("/respuesta/:id_t", juntadirectiva.createRespuesta);

router.get("/formulario-respuesta/:id_t", juntadirectiva.getFormulario);

//rutas del profesor
router.post("/profesor", juntadirectiva.createProfesor);

router.get("/profesor/:id_p", juntadirectiva.readProfesor);

router.put("/profesor/:id_p", juntadirectiva.updateProfesor);

router.delete("/profesor/:id_p", juntadirectiva.deleteProfesor);

//rutas del profesor
router.post("/curso", juntadirectiva.createCurso);

router.get("/curso/:id_c", juntadirectiva.readCurso);

router.put("/curso/:id_c", juntadirectiva.updateCurso);

router.delete("/curso/:id_c", juntadirectiva.deleteCurso);

module.exports = router;
