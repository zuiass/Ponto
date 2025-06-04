CREATE DATABASE IF NOT EXISTS ponto;
USE ponto;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foto VARCHAR(250)
    nome VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(70) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pontuacao INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS sessoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    token VARCHAR(250) NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

INSERT INTO usuarios (nome, senha, email) VALUES
("Kayke00", "12345678", "kayke@gmail.com"),
("João1509", "quejo1509", "joao@gmail.com");

SELECT * FROM usuarios;