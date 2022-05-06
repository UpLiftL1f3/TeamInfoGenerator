// variables

const fs = require('fs');
const inquirer = require('inquirer');

// Attempt 3
let engineerCount = 0;
let internCount = 0;
let promptAnswers;
let teamArr = [];

// Initial questions which includes the manager's info
const starterQuestions = [
  // team manager
  {
    type: 'input',
    message: "What is the team manager's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the team manager's employee ID?",
    name: 'employeeID',
  },
  {
    type: 'input',
    message: "What is the team manager's email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is the team manager's office number?",
    name: 'officeNumber',
  },
  // add employee
  {
    type: 'list',
    name: 'addEmployee',
    message: 'Would you like to add an engineer, an inter or exit to website?',
    choices: ['engineer', 'intern', 'exit to website'],
  },
];

// Engineering employee information
let engineerQuestions = [
  {
    type: 'input',
    name: `name`,
    message: "What is the engineer's name?",
  },
  {
    type: 'input',
    name: `employeeID`,
    message: "What is the engineer's employee ID?",
  },
  {
    type: 'input',
    name: `email`,
    message: "What is the engineer's email address?",
  },
  {
    type: 'input',
    name: `officeNumber`,
    message: "What is the engineer's office number?",
  },
  {
    type: 'list',
    name: 'addEmployee',
    message: 'Would you like to add an engineer, an inter, or exit to website?',
    choices: ['engineer', 'intern', 'exit to website'],
  },
];

// Intern employee information
let internQuestions = [
  {
    type: 'input',
    name: `name`,
    message: "What is the intern's name?",
  },
  {
    type: 'input',
    name: `employeeID`,
    message: "What is the intern's employee ID?",
  },
  {
    type: 'input',
    name: `email`,
    message: "What is the intern's email address?",
  },
  {
    type: 'input',
    name: `officeNumber`,
    message: "What is the intern's office number?",
  },
  {
    type: 'list',
    name: 'addEmployee',
    message: 'Would you like to add an engineer, an inter, exit to website?',
    choices: ['engineer', 'intern', 'exit to website'],
  },
];

// Function Declarations
// Initializing initial questions (manager info)
async function starterFunction() {
  const starterAnswers = await inquirer.prompt(starterQuestions);
  const managerObj = {
    position: 'Manager',
    name: starterAnswers.name,
    email: starterAnswers.email,
    employeeID: starterAnswers.employeeID,
    officeNumber: starterAnswers.officeNumber,
  };
  teamArr.push(managerObj);
  console.log(teamArr);
  promptAnswers = starterAnswers;
  console.log(promptAnswers.addEmployee);
}

// Initializing Engineer info questions
async function engineerFunction() {
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  const engineerObj = {
    position: 'Engineer',
    name: engineerAnswers.name,
    email: engineerAnswers.email,
    employeeID: engineerAnswers.employeeID,
    officeNumber: engineerAnswers.officeNumber,
  };
  teamArr.push(engineerObj);
  console.log(teamArr);
  promptAnswers = engineerAnswers;
  console.log(promptAnswers);
}

// Initializing Intern info questions
async function internFunction() {
  const internAnswers = await inquirer.prompt(internQuestions);
  const internObj = {
    position: 'Intern',
    name: internAnswers.name,
    email: internAnswers.email,
    employeeID: internAnswers.employeeID,
    officeNumber: internAnswers.officeNumber,
  };
  teamArr.push(internObj);
  console.log(teamArr);
  promptAnswers = internAnswers;
  console.log(promptAnswers);
}

async function main() {
  await starterFunction();
  while (!promptAnswers.addEmployee == 'exit to website') {
    if (promptAnswers.addEmployee === 'engineer') {
      engineerFunction();
    } else if (promptAnswers.addEmployee === 'intern') {
      internFunction();
    }
    return;
  }
}

main();

// inquirer.prompt(StarterQuestions);
// while (
//   starterAnswers.add.employee !== 'no more employees' ||
//   engineerQuestions.add.employee !== 'no more employees' ||
//   internQuestions.add.employee !== 'no more employees'
// ) {}
