create table users
  (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     nome VARCHAR(20) NOT NULL,
     sobrenome VARCHAR(20) NOT NULL,
     email VARCHAR(40) NOT NULL,
     senha VARCHAR(20) NOT NULL
    );
