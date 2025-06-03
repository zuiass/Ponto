CREATE DATABASE ponto;
USE ponto;

CREATE TABLE usuarios (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, email, senha) VALUES
('Kayke067', 'kayke2707@gmail.com', '123456'),
('Jostoso', 'zuiaas@gmail.com', '1092908*ab');