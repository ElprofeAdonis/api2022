import { json } from "express";
import pool from "../database/keys";

const estudiante = {};

//crea una respuesta al formulario de parte del estudiante
//por medio de un post
// creamos respuesta al formulario
//------------------------*******************--------------------------
//------------------------*******************--------------------------
estudiante.createRespuesta = async (req, res) => {
  const id_f = req.params.id_f;
  const { r_respuesta } = req.body;
  try {
    await pool.query(
      "INSERT INTO respuesta (r_id, r_respuesta) VALUES ($1, $2)",
      [id_f, r_respuesta]
    );
    res.status(200).json({
      message: "La respuesta de asigno con exito",
      respuesta: { r_respuesta },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

//muestra todas las respuestas a los formularios
//------------------------*******************--------------------------
//------------------------*******************--------------------------

estudiante.getFormulario = async (req, res) => {
  const id_f = req.params.id_f;
  try {
    const respuesta = await (
      await pool.query("SELECT * FROM respuesta WHERE r_id=$1", [id_f])
    ).rows;
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};
//get muestras las respuestas brindadas por el estudiante

estudiante.getFormularios = async (req, res) => {
  try {
    const formularios = await (
      await pool.query("SELECT * FROM juntadirectivavsformulario")
    ).rows;
    res.status(200).json(formularios);
  } catch (error) {
    res.status(500).json({
      messaage: "Algo salio mal getFormularios",
      error,
    });
  }
};

// muestra  la union usuarios con los comentarios
estudiante.joinFormulario = async (req, res) => {
  const id = req.body.id;
  const id_f = req.params.id_f;
  try {
    await pool.query("INSERT INTO estudiantevsformulario VALUE ($1, $2)", [
      id,
      id_f,
    ]);
    res.status(200).json({
      message: "You joinnes the Tweets",
      tweets: { id_f },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio aml",
      error,
    });
  }
};

module.exports = estudiante;
