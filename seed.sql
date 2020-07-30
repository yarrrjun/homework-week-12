-- department table schema
-- add department to department table
INSERT INTO departments (department) VALUES ("Accounting");
INSERT INTO departments (department) VALUES ("Customer Service");

-- delete department from department table
DELETE FROM departments

-- edit department in department table
UPDATE departments

-- view departments in department table
SELECT department
FROM departments;

-- employee table schema
-- add employee to employee table
INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id) VALUES ("Kornajun", "Roy", "1", "2", "2")

-- delete employee from employee table
SELECT employees_db
DELETE FROM employees

-- edit employee in employee table
SELECT employees_db
UPDATE employees

-- view employees in employee table
SELECT employee
FROM employees

-- role table schema
-- add role to role table
INSERT INTO roles VALUE (title, salary, department_id) VALUES ("Jr Developer", 500, 10);
INSERT INTO roles VALUE (title, salary, department_id) VALUES ("Sr Developer", 600, 11);

-- delete role from roles table
DELETE FROM roles

-- edit role in roles table
UPDATE roles

-- view role in roles table
SELECT employees_db
FROM roles
WHERE role;
