CREATE TABLE pessoas(
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(20) NOT NULL,
    nascimento DATE
)
/*Inserindo dados*/
INSERT INTO pessoas (nome, nascimento) VALUES ('Fabrício', '1989/12/10')
INSERT INTO pessoas (nome, nascimento) VALUES ('Isabela', '2005/05/12')
INSERT INTO pessoas (nome, nascimento) VALUES ('Felipe', '1978/02/28')

/*Maneiras de Selecionar dados*/
SELECT * FROM pessoas
SELECT nome FROM pessoas
SELECT nascimento FROM pessoas


/*Vai atualizar todos os nomes da tabela*/
UPDATE pessoas SET nome='Teste'
/*Vai atualizar pelo id*/
UPDATE pessoa SET nome='João Felipe' WHERE id=2

/*DELETAR linhas com o id*/
DELETE FROM pessoa WHERE id=1;

/*ORDEM BAY - ordem crecente*/
SELECT * FROM pessoas ORDER BY nome
/*ORDEM BAY DESC - ordem decrescente*/
SELECT * FROM pessoa ORDER BY nome DESC;


/*Alterando tabela inserindo novo campo*/
ALTER TABLE `pessoa` ADD `genero` VARCHAR(1) NOT NULL AFTER `nascimento`;

/*SELECT com GROUP BY*/
SELECT * FROM pessoa GROUP BY genero

SELECT COUNT(id), genero FROM pessoa GROUP BY genero