import pool from "../database/keys";
const authenticacion = {};

authenticacion.signUp = async (req, res) => {
  const { nombre, foto, email, password, role } = req.body;
  if (role == "juntadirectiva") {
    try {
      await pool.query(
        "INSERT INTO juntadirectiva (j_nombre, j_foto, j_email, j_password) VALUES ($1, $2, $3, $4)",
        [nombre, foto, email, password]
      );
      res.status(200).json({
        message: "Muy bien junta directiva fur creado con exito",
        juntadirectiva: { nombre, foto, email, password },
      });
    } catch (error) {
      if (error.constraint == "juntadirectiva_j_email_key") {
        res.status(500).json({
          message: "El correo digitado ya es parte de un usuario",
          error,
        });
      } else {
        res.status(500).json({
          message:
            "Hola Adonis no te rindas Dios esta contigo en cada proceso de tu vida",
          error,
        });
      }
    }
  } else {
    try {
      await pool.query(
        "INSERT INTO estudiante (e_nombre, e_foto, e_email, e_password) VALUES ($1, $2, $3, $4)",
        [nombre, foto, email, password]
      );
      res.status(200).json({
        message: "Muy bien se creo un estudiante nuevo",
        estudiante: { nombre, foto, email, password },
      });
    } catch (error) {
      if (error.constraint == "estudiante_e_email_key") {
        res.status(500).json({
          message: "El correo digitado ya es parte de un estudiante",
          error,
        });
      } else {
        res.status(500).json({
          message:
            "Hola Adonis no te rindas Dios esta contigo en cada proceso de tu vida",
          error,
        });
      }
    }
  }
};

authenticacion.singIn = async (req, res) => {
  const { email, password, role } = req.body;
  if (role == "juntadirectiva") {
    try {
      const juntadirectiva = await (
        await pool.query(
          "SELECT *FROM juntadirectiva WHERE j_email=$1 AND j_password=$2",
          [email, password]
        )
      ).rows;
      if (juntadirectiva.length > 0) {
        res.status(200).json({
          id: juntadirectiva[0].id_j,
          nombre: juntadirectiva[0].j_nombre,
          foto: juntadirectiva[0].j_foto,
          email: juntadirectiva[0].j_email,
          role: "juntadirectiva",
        });
      } else {
        res.status(200).json({
          message: "La junta dirctiva fue cradoi con exito",
          NotFound: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Ha ocurrido un error",
      });
    }
  } else {
    try {
      const estudiante = await (
        await pool.query(
          "SELECT * FROM estudiante WHERE e_email=$1 AND e_password=$2",
          [email, password]
        )
      ).rows;
      if (estudiante.length > 0) {
        res.status(200).json({
          id: estudiante[0].id_e,
          nombre: estudiante[0].e_nombre,
          foto: estudiante[0].e_foto,
          email: estudiante[0].e_email,
          role: "estudiante",
        });
      } else {
        res.status(200).json({
          message: "El estudiante fue creado cone xito",
          NotFound: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Ha ocurrido un error",
      });
    }
  }
};

module.exports = authenticacion;
