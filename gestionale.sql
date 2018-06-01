create database if not exists gestionale;
use gestionale;


CREATE TABLE if not exists entrata (
  idEntrata int(11) NOT NULL auto_increment primary key,
  x int(11) NOT NULL,
  y int(11) NOT NULL
);

CREATE TABLE if not exists parcheggio (
  nome varchar(10) NOT NULL primary key,
  x int(11) DEFAULT NULL,
  y int(11) DEFAULT NULL
);

CREATE TABLE if not exists macchina (
  targa varchar(10) NOT NULL primary key,
  Parcheggio_nome varchar(10) NOT NULL
);

CREATE TABLE if not exists collegamento (
  distanza varchar(10) NOT NULL,
  Parcheggio_a varchar(10) NOT NULL,
  Parcheggio_b varchar(10) NOT NULL,
  primary key( Parcheggio_a , Parcheggio_b),
  foreign key (Parcheggio_a) references parcheggio(nome)
                            on delete cascade
                            on update cascade,
  foreign key (Parcheggio_b) references parcheggio(nome)
                            on delete cascade
                            on update cascade
);

CREATE TABLE if not exists radice (
  Parcheggio_nome varchar(10) NOT NULL,
  Entrata_idEntrata varchar(45) NOT NULL,
  primary key (Parcheggio_nome , Entrata_idEntrata),
  foreign key (Parcheggio_nome) references parcheggio(nome),
  foreign key (Entrata_idEntrata) references entrata(idEntrata)
) ;