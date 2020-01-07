-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: tennis
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `confirmation_token`
--

DROP TABLE IF EXISTS `confirmation_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `confirmation_token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `confirmation_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `confirmation_token_user_id_fk` (`user_id`),
  CONSTRAINT `confirmation_token_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confirmation_token`
--

LOCK TABLES `confirmation_token` WRITE;
/*!40000 ALTER TABLE `confirmation_token` DISABLE KEYS */;
INSERT INTO `confirmation_token` VALUES (32,27,'2020-01-06 01:18:13','yW8NatCc');
/*!40000 ALTER TABLE `confirmation_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_player` bigint(20) NOT NULL,
  `second_player` bigint(20) NOT NULL,
  `first_score` int(11) DEFAULT NULL,
  `second_score` int(11) DEFAULT NULL,
  `winner` int(1) DEFAULT NULL,
  `completed` tinyint(1) NOT NULL,
  `type` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,1,2,1,2,1,1,'final');
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament`
--

DROP TABLE IF EXISTS `tournament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `regulations` longtext NOT NULL,
  `date_start` datetime NOT NULL,
  `date_close_reg` datetime NOT NULL,
  `date_cancel_reg` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament`
--

LOCK TABLES `tournament` WRITE;
/*!40000 ALTER TABLE `tournament` DISABLE KEYS */;
INSERT INTO `tournament` VALUES (1,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(2,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(3,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(4,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(5,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(6,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(7,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(8,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(9,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(10,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(11,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(12,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(13,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(14,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(15,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(16,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(17,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(18,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(19,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(20,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36'),(21,'g2012','adflasdhfljkashfljkasdhfkjlsahfklashfkjasdhfaskljdf','2019-12-31 17:10:32','2019-12-31 17:10:35','2019-12-31 17:10:36');
/*!40000 ALTER TABLE `tournament` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_game`
--

DROP TABLE IF EXISTS `tournament_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament_game` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint(20) NOT NULL,
  `game_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tournament_match_tournament_id_fk` (`tournament_id`),
  KEY `tournament_game_game_id_fk` (`game_id`),
  CONSTRAINT `tournament_game_game_id_fk` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tournament_match_tournament_id_fk` FOREIGN KEY (`tournament_id`) REFERENCES `tournament` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_game`
--

LOCK TABLES `tournament_game` WRITE;
/*!40000 ALTER TABLE `tournament_game` DISABLE KEYS */;
/*!40000 ALTER TABLE `tournament_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_user`
--

DROP TABLE IF EXISTS `tournament_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `birth_certificate` varchar(255) NOT NULL,
  `pay_certificate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tournament_user_tournament_id_fk` (`tournament_id`),
  KEY `tournament_user_user_id_fk` (`user_id`),
  CONSTRAINT `tournament_user_tournament_id_fk` FOREIGN KEY (`tournament_id`) REFERENCES `tournament` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tournament_user_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_user`
--

LOCK TABLES `tournament_user` WRITE;
/*!40000 ALTER TABLE `tournament_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `tournament_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(55) NOT NULL,
  `is_confirmed` tinyint(1) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `first_name` varchar(55) NOT NULL,
  `second_name` varchar(55) NOT NULL,
  `surname` varchar(55) NOT NULL,
  `birthday` datetime NOT NULL,
  `city` varchar(255) NOT NULL,
  `hand` varchar(7) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin@gmail.com',1,'k2F-KywQq5*!w9K4','','Володимир','Кружко','Володимирович','2019-05-31 17:09:16','Khmelnitskiy','right','admin'),(2,'adsfadfadsf@gmail.com',0,'','','yura','kashpersiy','Vasuliovich','2019-12-31 17:10:03','Khmelnitskiy','left','user'),(27,'a@a.c',1,'111111aA','muscle_cars_dodge_dodge_charger_avto_stilnyy_83882_2560x1600.jpg','a','a','a','2020-12-31 00:00:00','a','Права','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-07  0:52:43
