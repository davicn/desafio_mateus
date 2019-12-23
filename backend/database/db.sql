create database desafio;
use desafio;

create table users(
    idUser int not null auto_increment, 
    nome varchar(45) not null, 
    local varchar(45) not null, 
    primary key (idUser));

create table posts(
    idPost int not null auto_increment,     
    texto varchar(150) not null,     
    imagem BLOB, 
    idUser int,    
    primary key (idPost), 
    foreign key (idUser) references users(idUser));


create table parceirias(
    idParceiro int not null auto_increment, 
    nome varchar(45) not null, 
    texto varchar(150) not null, 
    image BLOB, 
    telefone varchar(11) not null, 
    primary key (idParceiro));

create table avisos (
  idavisos int not null auto_increment,
  titulo varchar(45) not null,
  texto varchar(150) not null,
  image BLOB NULL,
  PRIMARY KEY (idavisos));

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';

-- insert em users
insert into users (nome, local) values ('Fulano da Silva','Filial 2');

-- insert em parceirias
insert into parceirias (nome,texto,image,telefone) values 
("Parceiro 1","Essa parceiria é top.",'/home/davi/Documentos/teste_mateus/backend/database/img/img1.jpeg',"92345678"),
("Parceiro 2","Essa parceiria é show!",'/home/davi/Documentos/teste_mateus/backend/database/img/img2.jpeg',"987654321");
/*
insert into posts(texto,imagem,isUser) values ("Aqui estou mais um dia",'/home/
davi/Documentos/teste_mateus/backend/database/img/Mateus.jpg',1);
*/
-- insert post
insert into posts (texto, imagem, idUser) values 
("Aqui estou mais um dia",'/home/davi/Documentos/teste_mateus/backend/database/img/Mateus.jpg',(select idUser from users));


-- insert em parcerias
insert into avisos (titulo,texto,image) values 
("Primeiro aviso","Esse aqui é só um aviso de teste",'/home/davi/Documentos/teste_mateus/backend/database/img/aviso1.jpg'),
("É natal!","Feliz natal galera! Tudo de bom para vcs!",'/home/davi/Documentos/teste_mateus/backend/database/img/aviso2.jpg');