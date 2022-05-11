// variables
const { Manager, Engineer, Intern } = require('./models');
const inquirer = require('inquirer');
const fs = require('fs');

// Attempt 3
let promptAnswers;
let employees = [];
let finalHtml;

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
    name: `github`,
    message: "What is the engineer's github?",
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
    name: `school`,
    message: "What is the intern's school?",
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
async function startQuestionnaire() {
  const starterAnswers = await inquirer.prompt(starterQuestions);
  console.log({ starterAnswers });

  const managerObj = new Manager(
    starterAnswers.name,
    starterAnswers.employeeID,
    starterAnswers.email,
    starterAnswers.officeNumber
  );
  employees.push(managerObj);
  console.log(employees);
  promptAnswers = starterAnswers;
  // console.log(promptAnswers.addEmployee);
  return promptAnswers;
}

// Initializing Engineer info questions
async function getEngineerInfo() {
  const engineerAnswers = await inquirer.prompt(engineerQuestions);

  const engineerObj = new Engineer(
    engineerAnswers.name,
    engineerAnswers.employeeID,
    engineerAnswers.email,
    engineerAnswers.github
  );
  employees.push(engineerObj);
  console.log(employees);
  promptAnswers = engineerAnswers;
  console.log(promptAnswers);
  return promptAnswers;
}

// Initializing Intern info questions
async function getInternInfo() {
  const internAnswers = await inquirer.prompt(internQuestions);

  const internObj = new Intern(
    internAnswers.name,
    internAnswers.employeeID,
    internAnswers.email,
    internAnswers.school
  );
  employees.push(internObj);
  console.log(employees);
  promptAnswers = internAnswers;
  console.log(promptAnswers);
  return promptAnswers;
}

async function collectAnswers() {
  const startingData = await startQuestionnaire();
  console.log(startingData);
  // console.log(startingData.addEmployee);
  if (startingData) {
    console.log('WORKING');
    promptAnswers = startingData;
    while (!(promptAnswers.addEmployee === 'exit to website')) {
      console.log('inside while loop');
      if (promptAnswers.addEmployee === 'engineer') {
        promptAnswers = await getEngineerInfo();
      } else if (promptAnswers.addEmployee === 'intern') {
        promptAnswers = await getInternInfo();
      }
      // return;
    }
  }
}

function generateHtml(employees) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./assets/css/main.css" rel="Stylesheet" />
        <title>Team Info Generator</title>
      </head>
      <body>

      <!-- Navbar -->
      <nav class="md:w-full relative mx-auto p-4 bg-red-500">
        <!-- Flex Container -->
        <h1 class="text-brightRedSupLight" id="nav-title">Team Info Generator</h1>
      </nav>

      <!-- Hero Section -->
      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div class="max-w-2xl mx-auto py-11 sm:py-24 lg:py-20 lg:max-w-none">
            <h2 class="text-2xl font-extrabold text-gray-900">Employees</h2>

            <div
              class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 justify-center align-middle"
            >

        ${employees
          .map((employee) => {
            let customProp = '';
            if (employee.getRole() === 'Manager') {
              customProp = 'Office Number: ' + employee.officeNumber;
            } else if (employee.getRole() === 'Engineer') {
              customProp = 'GitHub: ' + employee.github;
            } else if (employee.getRole() === 'Intern') {
              customProp = 'school:' + employee.school;
            }
            return `
            <!-- NEW -->
            <div class="group relative">
              <div
                class="relative w-full h-full bg-white rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 shadow-2xl shadow-black"
              >
                <!-- <div
                class="h-full flex flex-col md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0"
              > -->
                <section class="h-full w-full">
                  <header
                    class="h-1/3 flex flex-col p-6 bg-lightBlue content-center justify-center rounded-t-lg"
                  >
                    <span
                      class="text-white text-2xl font-bold w-full align-text-top text-center pt-4"
                      >${employee.name}</span
                    >
                    <span
                      class="text-white text-lg font-medium align-text-bottom text-right pt-2 pb-3"
                      >${employee.getRole()}</span
                    >
                  </header>
                  <section
                    class="h-4/6 w-full flex flex-col p-4 bg-darkGrayishBlue content-center justify-center rounded-b-lg"
                  >
                    <div class="space-y-2 content-center justify-center">
                      <h1 class="bg-white pl-3">Employee ID: ${employee.id}</h1>
                      <!-- <br /> -->
                      <h1 class="bg-white pl-3">Employee Email: ${
                        employee.email
                      }</h1>
                      <!-- <br /> -->
                      <h1 class="bg-white pl-3">${customProp}</h1>
                    </div>
                  </section>
                </section>
              </div>
            </div>
            `;
          })
          .join('\n')}
          </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
}

// function declaration for writeHtmlToFile
function writeHtmlToFile(html) {
  console.log('new HTML' + html);
  fs.writeFile('../../rendered.html', html, (err) => {
    if (err) console.log(err);
    else {
      console.log('File written successfully\n');
    }
  });
}

async function main() {
  await collectAnswers();
  const html = generateHtml(employees);
  console.log(html);
  writeHtmlToFile(html);
  // console.log('FINISH');
}

main();
console.log(employees);
