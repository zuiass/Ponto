CREATE DATABASE ponto;
USE ponto;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(40) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    pontuacao INT DEFAULT 0
);
 
CREATE TABLE partida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    pontuacao_obtida INT DEFAULT 0,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
 
CREATE TABLE ranking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    posicao INT NOT NULL,
    pontuacao_total INT NOT NULL,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
 
CREATE TABLE historico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    partida_id INT NOT NULL,
    acao VARCHAR(100) NOT NULL,
    data_acao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (partida_id) REFERENCES partida(id)
);