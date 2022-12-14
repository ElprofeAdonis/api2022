CREATE DATABASE adoview2;
CREATE TABLE juntadirectiva(
    id_j SERIAL PRIMARY KEY, 
    j_nombre TEXT NOT NULL,
    j_foto TEXT,
    j_email TEXT NOT NULL UNIQUE,
    j_password TEXT NOT NULL
);

CREATE TABLE estudiante(
    id_e SERIAL PRIMARY KEY,
    e_nombre TEXT NOT NULL,
    e_foto TEXT,
    e_email TEXT NOT NULL UNIQUE,
    e_password TEXT NOT NULL
);

CREATE TABLE curso(
    id_c SERIAL PRIMARY KEY,
    c_id INTEGER REFERENCES estudiante(id_e),
    c_nombre TEXT NOT NULL,
    c_codigo TEXT NOT NULL
);

CREATE TABLE profesor(
    id_p SERIAL PRIMARY KEY,
    p_id INTEGER REFERENCES curso(id_c),
    p_nombre TEXT NOT NULL,
    p_foto TEXT NOT NULL
);

CREATE TABLE estudiantevsformulario(
    e_id INTEGER REFERENCES estudiante(id_e),
    f_id INTEGER REFERENCES formulario(id_f)
);

CREATE VIEW juntadirectivavsformulario
AS
    SELECT * 
    FROM tweets JOIN (SELECT j_nombre, j_foto, j_email, id_j 
    FROM superusuario) AS s ON f_id=id_j

CREATE TABLE formulario(
    id_f SERIAL PRIMARY KEY,
    f_id INTEGER REFERENCES juntadirectiva(id_j),
    f_pregunta TEXT NOT NULL
);

CREATE TABLE respuesta(
    id_r SERIAL PRIMARY KEY,
    r_id INTEGER REFERENCES formulario(id_f),
    r_respuesta TEXT NOT NULL
);

