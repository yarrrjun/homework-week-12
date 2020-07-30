const express = require("express");
const inquirer = require("inquirer");
const app = express();
const mysql = require("mysql");
const cTable = require("console.table");
const nodemon = require("nodemon");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employees_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log("Server is starting...")
  console.log("Server listening on: http://localhost:" + PORT);
});


//SAMPLE USE OF cTABLE

const table = cTable.getTable([
  {
    name: 'Murphy Brown',
    age: 5
  }, {
    name: 'Arjun',
    age: 38
  }
]);

console.log(table);

const initialQuestion = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: ["Add employee", new inquirer.Separator(), "Add department", new inquirer.Separator(), "Add role", new inquirer.Separator(), "View employee", new inquirer.Separator(), "View role", new inquirer.Separator(), "View department", new inquirer.Separator(), "Update employee roles", new inquirer.Separator(), "Exit app", new inquirer.Separator()]
  }
]

inquirer.prompt(initialQuestion)
  .then(answer => {
    switch (answer.action) {
      case "Add employee":
        const addEmployeeQuestions = [
          {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
          }
        ]
        inquirer.prompt(addEmployeeQuestions)
          .then(answers => {
            console.log(answers.first_name)
            console.log(answers.last_name)
            connection.query("INSERT INTO employees SET ?",
              {
                first_name: answers.first_name,
                last_name: answers.last_name,
                role_id: 1,
                manager_id: 1
              });

          })
        break;

      case "Add department":
        const addDepartmentQuestions = [
          {
            type: "input",
            name: "add_department",
            message: "What is the department's name?"
          }
        ]
        inquirer.prompt(addDepartmentQuestions)
          .then(answers => {
            console.log(answers.add_department)
            connection.query("INSERT INTO departments SET ?",
              {
                name: answers.add_department,
                id: 10
              });
          })
        break;

      case "Add role":
        const addRoleQuestions = [
          {
            type: "input",
            name: "add_role_name",
            message: "What is the role named?"
          },
          {
            type: "input",
            name: "add_role_salary",
            message: "What is the role's salary?"
          }
        ]
        inquirer.prompt(addRoleQuestions)
          .then(answers => {
            console.log(answers.add_role_name)
            connection.query("INSERT INTO roles SET ?",
              {
                title: answers.add_role_name,
                id: answers.add_role,
                salary: answers.add_role_salary,
                department_id: 2,
              });
          })
        break;

        case "View employee":
        const viewEmployeeQuestions = [
          {
            type: "input",
            name: "view_employee",
            message: "Which employee are you trying to view?"
          }
        ]
        inquirer.prompt(viewEmployeeQuestions)
          .then(answers => {
            console.log(answers.view_employee);
            connection.query("SELECT * FROM employees");
          })
        //Need to figure out a way to display table here with query
        break;

        case "View role":
        const viewRoleQuestions = [
          {
            type: "input",
            name: "view_role",
            message: "Which role are you trying to view?"
          }
        ]
        inquirer.prompt(viewRoleQuestions)
          .then(answers => {
            console.log(answers.view_role);
            connection.query("SELECT * FROM roles");
          })
        //Need to figure out a way to display table here with query
        break;

        case "View department":
        const viewDepartmentQuestions = [
          {
            type: "input",
            name: "view_department",
            message: "What is the department you're trying to view?"
          }
        ]
        inquirer.prompt(viewDepartmentQuestions)
          .then(answers => {
            console.log(answers.view_department)
            connection.query("SELECT * FROM departments", "SHOW FULL TABLES FROM employees_db.departments]");
          })
        break;

        case "Update employee roles":
        const editEmployeeQuestions = [
          {
            type: "input",
            name: "edit_employee",
            message: "Which employee are you trying to edit?"
          }
        ]
        inquirer.prompt(editEmployeeQuestions)
          .then(answers => {
            console.log(answers.edit_employee);
            connection.query("SELECT * FROM departments", "DROP TABLE IF EXISTS empresults", "CREATE TABLE empresults");
          })
        break;

        case "Exit app":
        connection.end();
        break;
    }
  });

