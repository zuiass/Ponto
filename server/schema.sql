CREATE DATABASE IF NOT EXISTS ponto;
USE ponto;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto VARCHAR(250) DEFAULT 'https://i.ibb.co/rGt5CcH1/shared-image.png',
    nome VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pontuacao INT DEFAULT 0
);

INSERT INTO usuarios (nome, senha, email) VALUES
("Kayke00", "12345678", "kayke@gmail.com"),
("João1509", "quejo1509", "joao@gmail.com");

SELECT * FROM usuarios;