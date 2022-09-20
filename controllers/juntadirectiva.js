import { json } from "express";
import pool from "../database/keys";

const juntadirectiva = {};

// CRUD DE FORMULARIO
//-----------------******************************--------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
// post del formulario
juntadirectiva.createFormulario = async (req, res) => {
  const { id, f_pregunta } = req.body;
  try {
    await pool.query(
      "INSERT INTO formulario (f_id, f_pregunta) VALUES ($1,$2)",
      [id, f_pregunta]
    );
    res.status(200).json({
      message: "Se creo el formulario con exito",
      formulario: { id, f_pregunta },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

//get del formulario
juntadirectiva.readFormulario = async (req, res) => {
  const id = req.params.id_f;
  try {
    const formulario = await pool.query(
      "SELECT * FROM formulario WHERE id_f=$1",
      [id]
    );
    res.status(200).json({ formulario });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

// put del formulario
juntadirectiva.updateFormulario = async (req, res) => {
  const id = req.params.id_f;
  const { f_pregunta } = req.body;
  try {
    await pool.query(
      "UPDATE formulario SET f_pregunta$1 WHERE id_f=2",
      [f_pregunta, id],
      res.status(200).json({
        message: "Todo se actualizo con exito",
        formulario: [f_pregunta],
      })
    );
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

// delete del formulario
juntadirectiva.deleteFormulario = async (req, res) => {
  const id = req.params.id_f;
  try {
    await pool.query("DELETE FROM formulario WHERE id_f=$1", [id]);
    res.status(200).json({
      message: "Se elimino con exito el comentario",
    });
  } catch (error) {
    res.status(500).json({
      message: "Un error a ocurrido",
      error,
    });
  }
};

// CRUD DE PROFESOR
//++++++++++++++++++++++++++++++++++--------------------------
//-----------------******************************--------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
// post del formulario
juntadirectiva.createProfesor = async (req, res) => {
  const { id, p_nombre, p_foto } = req.body;
  try {
    await pool.query(
      "INSERT INTO formulario (p_id, p_nombre, p_foto) VALUES ($1,$2, $3)",
      [id, p_nombre, p_foto]
    );
    res.status(200).json({
      message: "Se creo el profesor con exito",
      profesor: { id, p_nombre, p_foto },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};
//get del profesores
//----------*******************----------------
//----------*******************----------------
juntadirectiva.readProfesor = async (req, res) => {
  const id = req.params.id_p;
  try {
    const profesor = await pool.query("SELECT * FROM profesor WHERE id_p=$1", [
      id,
    ]);
    res.status(200).json({ profesor });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

// put del profesor
//----------*******************----------------
//----------*******************----------------
juntadirectiva.updateProfesor = async (req, res) => {
  const id = req.params.id_p;
  const { p_nombre, p_foto } = req.body;
  try {
    await pool.query(
      "UPDATE profesor SET p_nombre$1, p_foto$2 WHERE id_p=$3",
      [p_nombre, p_foto, id],
      res.status(200).json({
        message: "Todo se actualizo con exito",
        profesor: [p_nombre, p_foto],
      })
    );
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

// delete del profesor
//----------*******************----------------
//----------*******************----------------
juntadirectiva.deleteProfesor = async (req, res) => {
  const id = req.params.id_p;
  try {
    await pool.query("DELETE FROM profesor WHERE id_p=$1", [id]);
    res.status(200).json({
      message: "Se elimino con exito el profesor",
    });
  } catch (error) {
    res.status(500).json({
      message: "Un error a ocurrido",
      error,
    });
  }
};

// CRUD DE CURSO
//++++++++++++++++++++++++++++++++++--------------------------
//-----------------******************************--------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
// post del formulario
juntadirectiva.createCurso = async (req, res) => {
  const { id, c_nombre, c_codigo } = req.body;
  try {
    await pool.query(
      "INSERT INTO curso (c_id, c_nombre, c_codigo) VALUES ($1,$2, $3)",
      [id, c_nombre, c_codigo]
    );
    res.status(200).json({
      message: "Se creo el curso con exito",
      profesor: { id, c_nombre, c_codigo },
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};
//get del CURSO
//----------*******************----------------
//----------*******************----------------
juntadirectiva.readCurso = async (req, res) => {
  const id = req.params.id_c;
  try {
    const curso = await pool.query("SELECT * FROM curso WHERE id_c=$1", [id]);
    res.status(200).json({ curso });
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

// put del CURSO
//----------*******************----------------
//----------*******************----------------
juntadirectiva.updateCurso = async (req, res) => {
  const id = req.params.id_c;
  const { c_nombre, c_codigo } = req.body;
  try {
    await pool.query(
      "UPDATE curso SET c_nombre$1, c_curso$2 WHERE id_c=$3",
      [c_nombre, c_codigo, id],
      res.status(200).json({
        message: "Todo se actualizo con exito",
        profesor: [c_nombre, c_codigo],
      })
    );
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal",
      error,
    });
  }
};

// delete del CUERSO
//----------*******************----------------
//----------*******************----------------
juntadirectiva.deleteCurso = async (req, res) => {
  const id = req.params.id_c;
  try {
    await pool.query("DELETE FROM curso WHERE id_c=$1", [id]);
    res.status(200).json({
      message: "Se elimino con exito el curso",
    });
  } catch (error) {
    res.status(500).json({
      message: "Un error a ocurrido",
      error,
    });
  }
};
// este get muestra todos los formularios creados por la junta directiva
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
//------------------------*******************--------------------------
juntadirectiva.getFormulario = async (req, res) => {
  const { id } = req.body;
  try {
    const formulario = await (
      await pool.query("SELECT * FROM formulario WHERE f_id=$1", [id])
    ).rows;
    res.status(200).json(formulario);
  } catch (error) {
    res.status(500).json({
      message: "Algo salio mal al mostrar los formularios",
      error,
    });
  }
};

// creamos respuesta al formulario
//------------------------*******************--------------------------
//------------------------*******************--------------------------
juntadirectiva.createRespuesta = async (req, res) => {
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

juntadirectiva.getFormulario = async (req, res) => {
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
module.exports = juntadirectiva;
