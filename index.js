const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generatePage = require("./src/generatePage");
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
        choices: ["Add a Manager", "Add an Intern", "Add an Engineer", "Print Your Team"],
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

        case "Print Your Team":
          writeHTML();
          break;
      }
    });
}

// Adding a Manager to the array
async function addManager() {
  const managerInfo = await inquirer.prompt([
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
      validate: (value) => (isNaN(parseInt(value)) ? "Not a number!" : true),
      filter: (value) => (isNaN(parseInt(value)) ? value : parseInt(value, 10)),
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
      type: "number",
      name: "officeNumber",
      message: "What is their office number?",
      validate: (value) => (isNaN(parseInt(value)) ? "Not a number!" : true),
      filter: (value) => (isNaN(parseInt(value)) ? v : parseInt(value, 10)),
    },
  ]);
  const { name, id, email, officeNumber } = managerInfo;
  const manager = new Manager(name, id, email, officeNumber);
  empArray.push(manager);
  inquirerRun();
}

// Adding an Engineer to the array
async function addEngineer() {
  const engineerInfo = await inquirer.prompt([
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
      validate: (value) => (isNaN(parseInt(value)) ? "Not a number!" : true),
      filter: (value) => (isNaN(parseInt(value)) ? value : parseInt(value, 10)),
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
      name: "github",
      message: "What is their GitHub username?",
      validate: (gitInput) => {
        if (gitInput) {
          return true;
        } else {
          console.log("Please provide their Github username");
        }
      }
    }
  ]);
  const { name, id, email, gitHub } = engineerInfo;
  const engineer = new Engineer(name, id, email, gitHub);
  empArray.push(engineer);
  inquirerRun();
};

// Adding an Intern to the array
async function addIntern() {
  const internInfo = await inquirer.prompt([
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
      validate: (value) => (isNaN(parseInt(value)) ? "Not a number!" : true),
      filter: (value) => (isNaN(parseInt(value)) ? value : parseInt(value, 10)),
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
      name: "school",
      message: "What is the school they attend?",
      validate: (schInput) => {
        if (schInput) {
          return true;
        } else {
          console.log("Please enter the school name");
        }
      }
    }
  ]);
  const { name, id, email, school } = internInfo;
  const intern = new Intern(name, id, email, school);
  empArray.push(intern);
  inquirerRun();
};

function writeHTML() {
  fs.writeFileSync("./dist/index.html", generatePage(empString), function (err) {
    if (err) {
      return console.log(err)
    }
  });
  console.log("Your team profile has been created!")
};

inquirerRun();