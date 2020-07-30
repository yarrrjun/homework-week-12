-- Drop database if it exists
DROP DATABASE IF EXISTS employees_db;

-- Create database
CREATE DATABASE employees_db;

-- Use database
USE employees_db;

-- Department table
-- id - INT PRIMARY KEY
-- name - VARCHAR(30) to hold department name
CREATE TABLE departments (
  id INT(4) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Role table
-- id - INT PRIMARY KEY
-- title -  VARCHAR(30) to hold role title
-- salary -  DECIMAL to hold role salary
-- department_id -  INT to hold reference to department role belongs to
CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (6,2) NOT NULL,
  department_id INT (6) NOT NULL,
  PRIMARY KEY(id)
);

-- Employee table
-- id - INT PRIMARY KEY
-- first_name - VARCHAR(30) to hold employee first name
-- last_name - VARCHAR(30) to hold employee last name
-- role_id - INT to hold reference to role employee has
-- manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT (6) NOT NULL,
  manager_id INT (4),
  department_id INT (6) NOT NULL,
  PRIMARY KEY(id)
);
