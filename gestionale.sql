CREATE database gestionale;
use gestionale;

CREATE TABLE `collegamento` (
  `distanza` varchar(10) NOT NULL,
  `Parcheggio_a` varchar(50) NOT NULL,
  `Parcheggio_b` varchar(50) NOT NULL
) 


CREATE TABLE `macchina` (
  `targa` varchar(10) NOT NULL,
  `Parcheggio_nome` varchar(50) NOT NULL
) 
CREATE TABLE `parcheggio` (
  `nome` varchar(50) NOT NULL,
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `entrata` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `collegamento`
  ADD PRIMARY KEY (`Parcheggio_a`,`Parcheggio_b`),
  ADD KEY `Parcheggio_b` (`Parcheggio_b`);

--
-- Indici per le tabelle `macchina`
--
ALTER TABLE `macchina`
  ADD PRIMARY KEY (`targa`),
  ADD KEY `Parcheggio_nome` (`Parcheggio_nome`);

--
-- Indici per le tabelle `parcheggio`
--
ALTER TABLE `parcheggio`
  ADD PRIMARY KEY (`nome`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `collegamento`
--
ALTER TABLE `collegamento`
  ADD CONSTRAINT `collegamento_ibfk_1` FOREIGN KEY (`Parcheggio_a`) REFERENCES `parcheggio` (`nome`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `collegamento_ibfk_2` FOREIGN KEY (`Parcheggio_b`) REFERENCES `parcheggio` (`nome`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `macchina`
--
ALTER TABLE `macchina`
  ADD CONSTRAINT `macchina_ibfk_1` FOREIGN KEY (`Parcheggio_nome`) REFERENCES `parcheggio` (`nome`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
