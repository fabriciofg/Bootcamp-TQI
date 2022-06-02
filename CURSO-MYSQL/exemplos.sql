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

/*----------- CRIAÇÃO DE OUTRAS TABELAS -------------- */
CREATE TABLE `canais` (
  `id_canal` int(11) NOT NULL,
  `nome_canal` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `videos_canais` (
  `id_canais_video` int(11) NOT NULL,
  `fk_canal` int(11) NOT NULL,
  `fk_video` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `videos` (
  `id_video` int(11) NOT NULL,
  `nome_video` varchar(100) NOT NULL,
  `autor_video` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `canais`
  ADD PRIMARY KEY (`id_canal`);

ALTER TABLE `videos`
  ADD PRIMARY KEY (`id_video`);

ALTER TABLE `videos_canais`
  ADD PRIMARY KEY (`id_canais_video`),
  ADD KEY `fk_canal` (`fk_canal`),
  ADD KEY `fk_video` (`fk_video`);



-- AUTO_INCREMENT
ALTER TABLE `canais`
  MODIFY `id_canal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `videos`
  MODIFY `id_video` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `videos_canais`
  MODIFY `id_canais_video` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;



-- Limitadores para a tabela `videos_canais`
ALTER TABLE `videos_canais`
  ADD CONSTRAINT `fk_canal` FOREIGN KEY (`fk_canal`) REFERENCES `canais` (`id_canal`),
  ADD CONSTRAINT `fk_video` FOREIGN KEY (`fk_video`) REFERENCES `videos` (`id_video`);
COMMIT;



/*INNER JOIN - juntar a consulta de duas*/
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_canal = videos.id_video;

/*a Clausiala AS meio que da um apelido para a tabela logo atras*/
SELECT * FROM videos_canais AS vc JOIN videos AS v ON vc.fk_canal = v.id_video

/*Juntando  mais uma tabela na consulta com o segundo JOIN*/
SELECT * FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal

/*Tirando o * do SELECT e trazendo somente alguns dados na consulta, usando o apelido atribuido a tabela*/
SELECT v.nome_video, v.autor_video, c.nome_canal
FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal

/*o INNER JOIN não busca valores que tem NULL*/
SELECT v.nome_video, v.autor_video, c.nome_canal FROM videos_canais AS vc INNER JOIN videos AS v ON vc.fk_video = v.id_video INNER JOIN canais AS c ON vc.fk_canal = c.id_canal;

/*o (LEFT OU RIGHT - vai depender da ordem da declaração do sql de qual tabela vem antes e qual vai estar a esqueda lou a direita) OUTER JOIN  busca valores que tem NULL - QUE AINDA NÃO TEM CORRELAÇÃO*/
SELECT * FROM videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video

/*UNION unir duas consultas, mas ambas tem que ter a mesma quantidade de colunas nas tabelas*/
SELECT v.id_video, v.nome_video FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON v.id_video = vc.fk_video
UNION 
SELECT c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal;

/*COMANDO where*/
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video 
JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal = 2