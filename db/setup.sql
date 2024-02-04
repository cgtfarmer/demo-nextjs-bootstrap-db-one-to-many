-- Setup DB

DROP DATABASE IF EXISTS myDatabase;

CREATE DATABASE myDatabase;

USE myDatabase;

DROP TABLE IF EXISTS states;

DROP TABLE IF EXISTS residents;

CREATE TABLE states (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  symbol VARCHAR(255)
);

CREATE TABLE residents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  gender VARCHAR(1),
  age INT,
  weight FLOAT,
  income FLOAT,
  stateId INT,
  FOREIGN KEY (stateId) REFERENCES states(id)
);


-- Seed DB

INSERT INTO states (name, symbol)
VALUES ('Nebraska', 'NE');

INSERT INTO states (name, symbol)
VALUES ('California', 'CA');

INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Doe', 'M', 35, 185.3, 50000.0, 1);

INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('Jane', 'Doe', 'F', 33, 156.1, 40000.0, 1);

INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('Chad', 'Smith', 'M', 36, 215.7, 70000.0, 2);

INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('Karen', 'Smith', 'F', 38, 145.2, 80000.0, 2);

INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);

INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
INSERT INTO residents (firstName, lastName, gender, age, weight, income, stateId)
VALUES ('John', 'Smith', 'M', 14, 163.9, 0.0, 2);
