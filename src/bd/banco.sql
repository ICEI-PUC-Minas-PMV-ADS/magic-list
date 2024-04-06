-- Criação da tabela Usuário
CREATE TABLE Usuario (
    ID_Usuario INT PRIMARY KEY,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Senha VARCHAR(255)
);

-- Criação da tabela Lista
CREATE TABLE Lista (
    ID_Lista INT PRIMARY KEY,
    Nome VARCHAR(255),
    Descricao TEXT,
    ID_Usuario INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID_Usuario)
);

-- Criação da tabela Tarefa
CREATE TABLE Tarefa (
    ID_Tarefa INT PRIMARY KEY,
    Descricao TEXT,
    DataConclusao DATE,
    Status VARCHAR(50),
    ID_Lista INT,
    FOREIGN KEY (ID_Lista) REFERENCES Lista(ID_Lista)
);
