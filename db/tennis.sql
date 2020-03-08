-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: tennis
-- ------------------------------------------------------
-- Server version	8.0.19

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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `created_date` datetime NOT NULL,
  `confirmation_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `confirmation_token_user_id_fk` (`user_id`),
  CONSTRAINT `confirmation_token_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `confirmation_token`
--

LOCK TABLES `confirmation_token` WRITE;
/*!40000 ALTER TABLE `confirmation_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `confirmation_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_player` bigint NOT NULL,
  `second_player` bigint NOT NULL,
  `first_score` int DEFAULT NULL,
  `second_score` int DEFAULT NULL,
  `winner` int DEFAULT NULL,
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `regulations` longtext NOT NULL,
  `date_start` datetime NOT NULL,
  `date_close_reg` datetime NOT NULL,
  `date_cancel_reg` datetime NOT NULL,
  `results` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament`
--

LOCK TABLES `tournament` WRITE;
/*!40000 ALTER TABLE `tournament` DISABLE KEYS */;
INSERT INTO `tournament` VALUES (42,'first_tournament','https://docs.google.com/document/d/e/2PACX-1vSbgEzSRQlgC6_8uI6LNSdIpkCtabSIZdTT560n0pviZQ8WcAaPddYZ1gzyNVwksfKjXdlAaoMA3Om5U--iF2E/pub?embedded=true','2020-01-04 02:00:00','2020-01-03 02:00:00','2020-01-02 02:00:00','https://docs.google.com/document/d/e/2PACX-1vRZisaqzWrSJYv0Lm5vh8OTPjYu41anyk4jyQ-VQu-afV_WgAW3EnpdBzPOaGYeWwy2HKbGdhlCBvSO3y9sqrs/pub?embedded=true'),(43,'second_tournament','https://docs.google.com/document/d/e/2PACX-1vQexL_d0ypiUjWuLfcx6L3rx4XkfmmmH_zcEBqlHQMgkUOmIA6TjHAaK2KN9kZB1lVmKaEDlHaYKixOW2rsi7w/pub?embedded=true','2020-01-11 02:00:00','2020-01-10 02:00:00','2020-01-09 02:00:00',''),(44,'third_tournament','https://docs.google.com/document/d/e/2PACX-1vQgQcNF2g66hATRgQNQvkKa2-8VcXBgXRYQgaCfR5UPXgYvyDOfBnIJvm7oZg1gTgCan66djYx0-1Tdh1cBedY/pub?embedded=true','2020-02-01 02:00:00','2020-01-30 02:00:00','2020-01-29 02:00:00','');
/*!40000 ALTER TABLE `tournament` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_game`
--

DROP TABLE IF EXISTS `tournament_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament_game` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `game_id` bigint NOT NULL,
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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tournament_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `birth_certificate` varchar(255) NOT NULL,
  `pay_certificate` varchar(255) DEFAULT NULL,
  `is_confirmed` tinyint(1) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tournament_user_tournament_id_fk` (`tournament_id`),
  KEY `tournament_user_user_id_fk` (`user_id`),
  CONSTRAINT `tournament_user_tournament_id_fk` FOREIGN KEY (`tournament_id`) REFERENCES `tournament` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tournament_user_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_user`
--

LOCK TABLES `tournament_user` WRITE;
/*!40000 ALTER TABLE `tournament_user` DISABLE KEYS */;
INSERT INTO `tournament_user` VALUES (11,42,3,'unknown.jpg','unknown.jpg',1,0),(12,42,4,'unknown.jpg','unknown.jpg',1,0),(13,42,5,'unknown.jpg','unknown.jpg',1,0),(14,42,6,'unknown.jpg','unknown.jpg',1,0),(15,42,2,'unknown.jpg','unknown.jpg',1,0);
/*!40000 ALTER TABLE `tournament_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin@gmail.com',1,'k2F-KywQq5*!w9K4','blob','admin','admin','admin','2019-05-31 17:09:16','Хмельницький','right','admin'),(2,'',1,'','unknown.jpg','Ілля','Корчинський','','2012-01-12 14:15:06','Хмельницький','right','user'),(3,'',1,'','unknown.jpg','Іван','Пономарьов','','2013-11-07 14:16:05','Львів','right','user'),(4,'',1,'','unknown.jpg','Макар','Макаров','','2012-09-20 14:17:57','Львів','right','user'),(5,'',1,'','unknown.jpg','Лев','Іванич','','2013-08-02 14:19:11','Львів','right','user'),(6,'',1,'','unknown.jpg','Владислав','Богомаз','','2013-03-26 14:19:40','Львів','right','user');
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

-- Dump completed on 2020-03-08 19:20:12
