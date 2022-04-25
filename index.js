// variables

const fs = require('fs');
const inquirer = require('inquirer');

// attempt 1 i know its WRONG
// // Number of Employees
// let numEmployees = 5;

// let questions = [];

// // for loop based on number of employees
// for (let i = numEmployees; i < numEmployees.length; i++) {
//   questions.push({});
// }

// Attempt 2

// const questions = [
//   // team manager
//   {
//     type: 'input',
//     message: "What is the team manager's name?",
//     name: 'team.manager.name',
//   },
//   {
//     type: 'input',
//     message: "What is the team manager's employee ID?",
//     name: 'team.manager.employeeID',
//   },
//   {
//     type: 'input',
//     message: "What is the team manager's email address?",
//     name: 'team.manager.email',
//   },
//   {
//     type: 'input',
//     message: "What is the team manager's office number?",
//     name: 'team.manager.officeNumber',
//   },
//   // add employee 1
//   {
//     type: 'list',
//     name: 'add.employee.one',
//     message: 'Would you like to add an engineer or an inter?',
//     choices: ['engineer', 'intern', 'no more employees'],
//   },
//   {
//     type: 'input',
//     name: 'engineerOne.name',
//     message: "What is the engineer's name?",
//     name: 'engineer.one.name',
//     when(answers) {
//       return answers.add.employee.one === 'engineer';
//     },
//   },
//   {
//     type: 'input',
//     name: 'engineerOne.employeeID',
//     message: "What is the engineer's employee ID?",
//     when(answers) {
//       return answers.add.employee.one === 'engineer';
//     },
//   },
//   {
//     type: 'input',
//     name: 'engineerOne.email',
//     message: "What is the engineer's email address?",
//     when(answers) {
//       return answers.add.employee.one === 'engineer';
//     },
//   },
//   {
//     type: 'input',
//     name: 'engineerOne.officeNumber',
//     message: "What is the engineer's office number?",
//     when(answers) {
//       return answers.add.employee.one === 'engineer';
//     },
//   },
//   // Intern 1
//   {
//     type: 'input',
//     name: 'internOne.name',
//     message: "What is the intern's name?",
//     when(answers) {
//       return answers.add.employee.one === 'intern';
//     },
//   },
//   {
//     type: 'input',
//     name: 'internOne.employeeID',
//     message: "What is the intern's employee ID?",
//     when(answers) {
//       return answers.add.employee.one === 'intern';
//     },
//   },
//   {
//     type: 'input',
//     name: 'internOne.email',
//     message: "What is the intern's email address?",
//     when(answers) {
//       return answers.add.employee.one === 'intern';
//     },
//   },
//   {
//     type: 'input',
//     name: 'internOne.officeNumber',
//     message: "What is the intern's office number?",
//     when(answers) {
//       return answers.add.employee.one === 'intern';
//     },
//   },
// ];

// Attempt 3
let engineerCount = 0;
let internCount = 0;

const StarterQuestions = [
  // team manager
  {
    type: 'input',
    message: "What is the team manager's name?",
    name: 'team.manager.name',
  },
  {
    type: 'input',
    message: "What is the team manager's employee ID?",
    name: 'team.manager.employeeID',
  },
  {
    type: 'input',
    message: "What is the team manager's email address?",
    name: 'team.manager.email',
  },
  {
    type: 'input',
    message: "What is the team manager's office number?",
    name: 'team.manager.officeNumber',
  },
  // add employee
  {
    type: 'list',
    name: 'add.employee',
    message: 'Would you like to add an engineer or an inter?',
    choices: ['engineer', 'intern', 'no more employees'],
  },
];

let engineerQuestions = [
  {
    type: 'input',
    name: `engineer${engineerCount}.name`,
    message: "What is the engineer's name?",
    when(answers) {
      return answers.add.employee.one === 'engineer';
    },
  },
  {
    type: 'input',
    name: `engineer${engineerCount}.employeeID`,
    message: "What is the engineer's employee ID?",
    when(answers) {
      return answers.add.employee.one === 'engineer';
    },
  },
  {
    type: 'input',
    name: `engineer${engineerCount}.email`,
    message: "What is the engineer's email address?",
    when(answers) {
      return answers.add.employee.one === 'engineer';
    },
  },
  {
    type: 'input',
    name: `engineer${engineerCount}.officeNumber`,
    message: "What is the engineer's office number?",
    when(answers) {
      return answers.add.employee.one === 'engineer';
    },
  },
  {
    type: 'list',
    name: 'engineerAdd.employee',
    message: 'Would you like to add an engineer or an inter?',
    choices: ['engineer', 'intern', 'no more employees'],
  },
];

let internQuestions = [
  {
    type: 'input',
    name: `intern${internCount}.name`,
    message: "What is the intern's name?",
    when(answers) {
      return answers.add.employee.one === 'intern';
    },
  },
  {
    type: 'input',
    name: `intern${internCount}.employeeID`,
    message: "What is the intern's employee ID?",
    when(answers) {
      return answers.add.employee.one === 'intern';
    },
  },
  {
    type: 'input',
    name: `intern${internCount}.email`,
    message: "What is the intern's email address?",
    when(answers) {
      return answers.add.employee.one === 'intern';
    },
  },
  {
    type: 'input',
    name: `intern${internCount}.officeNumber`,
    message: "What is the intern's office number?",
    when(answers) {
      return answers.add.employee.one === 'intern';
    },
  },
];

inquirer.prompt(StarterQuestions).then((answers) => {
  if (answers.add.employee === 'engineer') {
    engineerCount++;
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
      while (engineerAnswers.engineerAdd.employee === 'engineer')
        engineerCount++;
    });
  }
});
