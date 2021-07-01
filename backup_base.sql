CREATE DATABASE  IF NOT EXISTS `beca` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `beca`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: serversyspark1.ctvl6cmogihx.us-east-2.rds.amazonaws.com    Database: beca
-- ------------------------------------------------------
-- Server version	5.7.33-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED='';

--
-- Table structure for table `cartoes`
--

DROP TABLE IF EXISTS `cartoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titular` varchar(200) NOT NULL,
  `finalCartao` int(11) NOT NULL,
  `bandeira` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `cartoes_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `login` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartoes`
--

LOCK TABLES `cartoes` WRITE;
/*!40000 ALTER TABLE `cartoes` DISABLE KEYS */;
INSERT INTO `cartoes` VALUES (1,'Vinicius Fragelli Senff',4763,'visa','Black',1),(2,'Vinicius Fragelli Senff',4633,'master','Platinum',1),(3,'Vinicius Fragelli Senff',4171,'master','Gold',1),(4,'Lysiane Camille Freire',4352,'visa','Platinum',1);
/*!40000 ALTER TABLE `cartoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor` float NOT NULL,
  `parcelado` int(11) NOT NULL,
  `loja` varchar(100) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `dataCompra` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `login` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,7,1,'Cantina bom sabdor LTDA','Compra no cartao final 4763','2021-06-10 12:23:29',1),(2,10,1,'Cantina bom sabdor LTDA','Compra no cartao final 4763','2021-06-10 12:23:29',1),(3,154,1,'Moda da hora LTDA','Compra no cartao final 4763','2021-06-11 12:23:29',1),(4,263,1,'Restaurante Lagoa LTDA','Compra no cartao final 4763','2021-06-13 12:23:30',1),(5,25,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-13 12:23:30',1),(6,67,1,'Autoposto bairro novo LTDA','Compra no cartao final 4763','2021-06-17 12:23:30',1),(7,96.47,1,'Moda da hora LTDA','Compra no cartao final 4763','2021-06-17 12:23:31',1),(8,40,1,'Taxa de manutenção cartão','Taxa de manutenção cartão','2021-06-17 12:23:31',1),(9,9.5,1,'Cantina bom sabdor LTDA','Compra no cartao final 4763','2021-06-18 12:23:31',1),(10,50.1,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-18 12:23:32',1),(11,10.7,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-19 12:23:32',1),(12,148,2,'Restaurante Lagoa LTDA','Compra no cartao final 4763','2021-06-21 12:23:32',1),(13,863,6,'Moveis casa nova LTDA','Compra no cartao final 4763','2021-06-21 12:23:32',1),(14,75,1,'Frustas Frascas LTDA','Compra no cartao final 4763','2021-06-21 12:23:33',1),(15,354,3,'Bar e Chop LTDA','Compra no cartao final 4763','2021-06-21 12:23:33',1),(16,3654,12,'Moveis casa nova LTDA','Compra no cartao final 4763','2021-06-21 12:23:33',1),(17,28,1,'Cantina bom sabdor LTDA','Compra no cartao final 4763','2021-06-22 12:23:34',1),(18,147,2,'Autoposto bairro novo LTDA','Compra no cartao final 4763','2021-06-22 12:23:34',1),(19,76,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-22 12:23:34',1),(20,123,3,'Autoposto bairro novo LTDA','Compra no cartao final 4763','2021-06-22 12:23:35',1),(21,401,3,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-23 12:23:35',1),(22,475.5,1,'Moveis casa nova LTDA','Compra no cartao final 4763','2021-06-23 12:23:35',1),(23,41,1,'Cantina bom sabdor LTDA','Compra no cartao final 4633','2021-06-24 03:00:00',1),(24,48,1,'Bar e Chop LTDA','Compra no cartao final 4633','2021-06-24 03:00:00',1),(25,63,1,'Moda da hora LTDA','Compra no cartao final 4763','2021-06-24 03:00:00',1),(26,156,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-24 03:00:00',1),(27,178,1,'Autoposto bairro novo LTDA','Compra no cartao final 4763','2021-06-25 03:00:00',1),(28,36,1,'Moda da hora LTDA','Compra no cartao final 4763','2021-06-25 03:00:00',1),(29,72,1,'Bar e Chop LTDA','Compra no cartao final 4763','2021-06-27 03:00:00',1),(30,69.8,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-27 03:00:00',1),(31,180.54,2,'Autoposto bairro novo LTDA','Compra no cartao final 4633','2021-06-27 03:00:00',1),(32,17.6,1,'Cantina bom sabdor LTDA','Compra no cartao final 4633','2021-06-28 03:00:00',1),(50,16,1,'Cantina bom sabdor LTDA','Compra no cartao final 4763','2021-06-29 03:00:00',1),(51,69,1,'Moda da hora LTDA','Compra no cartao final 4763','2021-06-29 03:00:00',1),(52,18,1,'Bar e Chop LTDA','Compra no cartao final 4763','2021-06-29 03:00:00',1),(53,54.6,1,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-06-30 03:00:00',1),(54,47.8,1,'Autopeças LTDA','Compra no cartao final 4763','2021-06-30 03:00:00',1),(55,1.2,1,'Cantina bom sabdor LTDA','Compra no cartao final 4633','2021-06-30 03:00:00',1),(56,6.9,1,'Bar e Chop LTDA','Compra no cartao final 4763','2021-07-01 03:00:00',1),(57,4.8,1,'Distribuidora doces LTDA','Compra no cartao final 4763','2021-07-04 03:00:00',1),(58,142.6,1,'Restaurante Lagoa LTDA','Compra no cartao final 4763','2021-07-06 03:00:00',1),(59,236.4,2,'Atacado Curitiba LTDA','Compra no cartao final 4763','2021-07-06 03:00:00',1),(60,127.6,1,'Autoposto bairro novo LTDA','Compra no cartao final 4763','2021-07-06 03:00:00',1),(61,241.6,3,'Restaurante Frankin LTDA','Compra no cartao final 4763','2021-07-07 03:00:00',1),(62,80.4,1,'Bar e Chop LTDA','Compra no cartao final 4633','2021-07-07 03:00:00',1),(63,21.6,1,'Cantina bom sabdor LTDA','Compra no cartao final 4763','2021-07-08 03:00:00',1),(64,14,1,'Tinder LTDA','Compra no cartao final 4763','2021-07-08 03:00:00',1),(65,26,1,'Cantina bom sabdor LTDA','Compra no cartao final 4633','2021-07-10 03:00:00',1),(66,52,1,'Frustas Frascas LTDA','Compra no cartao final 4763','2021-07-10 03:00:00',1);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `datacriacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'vinicius','123456789','Vinicius Fragelli Senff','vinicius@fragelli.com.br','(41) 99601-7206','2021-06-30 12:14:13');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-01 10:47:40
