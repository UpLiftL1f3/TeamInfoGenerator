// variables

const fs = require('fs');
const inquirer = require('inquirer');

// Attempt 3
let engineerCount = 0;
let internCount = 0;
let promptAnswers;
let teamArr = [];

// Initial questions which includes the manager's info
const StarterQuestions = [
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
    choices: ['engineer', 'intern', 'no more employees'],
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
    message: 'Would you like to add an engineer or an inter?',
    choices: ['engineer', 'intern', 'no more employees'],
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
    message: 'Would you like to add an engineer or an inter?',
    choices: ['engineer', 'intern', 'no more employees'],
  },
];

// inquirer.prompt(StarterQuestions).then((answers) => {
//   if (answers.add.employee === 'engineer') {
//     engineerCount++;
//     inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
//       while (engineerAnswers.engineerAdd.employee === 'engineer')
//         engineerCount++;
//     });
//   }
// });

// console.log(starterAnswers.add.employee);

// Function Declarations
// Initializing initial questions (manager info)
async function starterQuestions() {
  const starterAnswers = await inquirer.prompt(StarterQuestions);
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
  console.log(promptAnswers);
}

// Initializing Engineer info questions
async function engineerQuestions() {
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
async function internQuestions() {
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
  await starterQuestions();
  while (promptAnswers.addEmployee == 'no more employees') {
    if (promptAnswers.addEmployee === 'engineer') {
      engineerQuestions();
    } else if (promptAnswers.addEmployee === 'intern') {
      internQuestions();
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
