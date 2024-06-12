CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    data_nascimento DATE,
    sexo VARCHAR(10)
);

CREATE TABLE preferencias (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    preferencia VARCHAR(100)
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    usuario1_id INT REFERENCES usuarios(id),
    usuario2_id INT REFERENCES usuarios(id),
    data_match TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
