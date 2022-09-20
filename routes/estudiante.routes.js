import express from "express";
import estudiante from "../controllers/estudiante";

const router = express.Router();

router.get("/formularios", usuario.getFormularios);

router.post("/formulario/:id_t", usuario.joinFormulario);

router.post("formulario", estudiante.createRespuesta);

router.get("/formulario/:id_f", estudiante.getFormulario);

module.exports = router;
