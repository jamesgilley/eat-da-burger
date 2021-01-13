DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE IF NOT EXISTS burgers
(
    ID INT PRIMARY KEY auto_increment,
    burger_name VARCHAR(50) NOT NULL,
    devoured Boolean
)
