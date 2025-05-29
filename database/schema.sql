CREATE DATABASE IF NOT EXISTS ponto;
USE ponto;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
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

INSERT INTO usuarios (nome, senha, email) VALUES ("Kayke", "12345678", "kayke@gmail.com");

SELECT * FROM usuarios;
SELECT * FROM sessoes;

-- CREATE TABLE IF NOT EXISTS ranking (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     usuario_id INT NOT NULL,
--     posicao INT NOT NULL,
--     pontuacao_total INT NOT NULL,
--     data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
-- );

-- CREATE TABLE IF NOT EXISTS historico (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     usuario_id INT NOT NULL,
--     acao VARCHAR(100) NOT NULL,
--     data_acao DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
-- );