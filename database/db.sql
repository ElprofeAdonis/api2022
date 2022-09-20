CREATE DATABASE ado_jose;
CREATE TABLE juntadirectiva(
    id_j SERIAL PRIMARY KEY, 
    j_nombre TEXT NOT NULL,
    j_foto TEXT,
    j_email TEXT NOT NULL UNIQUE,
    j_password TEXT NOT NULL
);

CREATE TABLE estudiante(
    id_e SERIAL PRIMARY KEY,
    e_id INTEGER REFERENCES juntadirectiva(id_j),
    e_nombre TEXT NOT NULL,
    e_foto TEXT,
    e_seccion TEXT NOT NULL,
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