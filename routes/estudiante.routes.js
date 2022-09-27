import express from "express";
import estudiante from "../controllers/estudiante";

const router = express.Router();

router.get("/formularios", estudiante.getFormularios);

router.post("/formulario/:id_t", estudiante.joinFormulario);

router.post("formulario", estudiante.createRespuesta);

router.get("/formulario/:id_f", estudiante.getFormulario);

module.exports = router;
