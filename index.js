const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

empArray = [];

function inquirerRun() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Add a Manager", "Add an Intern", "Add an Engineer", "Quit"],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "Add a Manager":
          addManager();
          break;

        case "Add an Intern":
          addIntern();
          break;

        case "Add an Engineer":
          addEngineer();
          break;

        case "Quit":
          endMenu();
          break;
      }
    });
}

async function addManager() {
  const managerInfo = await inquirer.createPromptModule([
    {
      type: "input",
      name: "name",
      message: "What is their name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide the employees name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is their employee id?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please provide the employees id");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
      validate: (emailInput) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          emailInput
        );
        if (valid) {
          return true;
        } else {
          console.log("Please provide the employees email address");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is their office number?",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please provide the employees id");
          return false;
        }
      },
    },
  ]);
  const { name, id, email, officeNumber } = managerInfo;
  const manager = new Manager(name, id, email, officeNumber);
  empArray.push(manager);
  inquirerRun();
}

inquirerRun();