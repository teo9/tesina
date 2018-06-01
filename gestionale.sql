-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 01, 2018 alle 11:10
-- Versione del server: 10.1.21-MariaDB
-- Versione PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestionale`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `auto`
--

CREATE TABLE `auto` (
  `targa` varchar(10) NOT NULL,
  `Parcheggio_nome` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `collegamento`
--

CREATE TABLE `collegamento` (
  `distanza` varchar(10) NOT NULL,
  `Parcheggio_a` varchar(10) NOT NULL,
  `Parcheggio_b` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `entrata`
--

CREATE TABLE `entrata` (
  `idEntrata` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `entrata`
--

INSERT INTO `entrata` (`idEntrata`, `x`, `y`) VALUES
(44, 2, 0),
(45, 6, 0),
(46, 12, 4),
(47, 10, 0),
(48, 10, 0),
(49, 10, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `parcheggio`
--

CREATE TABLE `parcheggio` (
  `nome` varchar(10) NOT NULL,
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struttura della tabella `parcheggio_has_entrata`
--

CREATE TABLE `parcheggio_has_entrata` (
  `Parcheggio_nome` varchar(10) NOT NULL,
  `Entrata_idEntrata` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`targa`),
  ADD KEY `fk_auto_Parcheggio1_idx` (`Parcheggio_nome`);

--
-- Indici per le tabelle `collegamento`
--
ALTER TABLE `collegamento`
  ADD PRIMARY KEY (`Parcheggio_a`,`Parcheggio_b`),
  ADD KEY `fk_Collegamento_Parcheggio1_idx` (`Parcheggio_b`);

--
-- Indici per le tabelle `entrata`
--
ALTER TABLE `entrata`
  ADD PRIMARY KEY (`idEntrata`);

--
-- Indici per le tabelle `parcheggio`
--
ALTER TABLE `parcheggio`
  ADD PRIMARY KEY (`nome`);

--
-- Indici per le tabelle `parcheggio_has_entrata`
--
ALTER TABLE `parcheggio_has_entrata`
  ADD PRIMARY KEY (`Parcheggio_nome`,`Entrata_idEntrata`),
  ADD KEY `fk_Parcheggio_has_Entrata_Parcheggio1_idx` (`Parcheggio_nome`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `entrata`
--
ALTER TABLE `entrata`
  MODIFY `idEntrata` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `fk_auto_Parcheggio1` FOREIGN KEY (`Parcheggio_nome`) REFERENCES `parcheggio` (`nome`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limiti per la tabella `collegamento`
--
ALTER TABLE `collegamento`
  ADD CONSTRAINT `fk_Collegamento_Parcheggio` FOREIGN KEY (`Parcheggio_a`) REFERENCES `parcheggio` (`nome`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Collegamento_Parcheggio1` FOREIGN KEY (`Parcheggio_b`) REFERENCES `parcheggio` (`nome`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limiti per la tabella `parcheggio_has_entrata`
--
ALTER TABLE `parcheggio_has_entrata`
  ADD CONSTRAINT `fk_Parcheggio_has_Entrata_Parcheggio1` FOREIGN KEY (`Parcheggio_nome`) REFERENCES `parcheggio` (`nome`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
