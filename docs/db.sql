CREATE DATABASE clinica;
USE clinica;

CREATE TABLE consultas(
    consulta_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_paciente VARCHAR(255) NOT NULL,
    nome_medico VARCHAR(255) NOT NULL,
    data_hora DATE NOT NULL
);

INSERT INTO consultas VALUES (null,'joão', 'Dr. Carlos', now());
INSERT INTO consultas VALUES (null,'Maria Braga', 'Dr. Jubiscradio', now());
INSERT INTO consultas VALUES (null,'saoiritinha', 'Dr. Sansão ', now());

Describe consultas;
SELACT * FROM consultas;