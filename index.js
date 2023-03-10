const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const render = require('./src/page-template.js');
const teamMembers = [];
const idArray = [];
// welcome screen
console.log(
  '\nWelcome to the team gen!\nUse `npm run reset` to reset the dist/ folder\n'
);
function appMenu() {
    function createManager() {
      console.log('build your team :busts_in_silhouette:');
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'enter at least one character.';
            },
          },
          {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                return true;
              }
              return 'enter a positive number greater than zero.';
            },
          },
          function createTeam() {
            inquirer
              .prompt([
                {
                  type: 'list',
                  name: 'memberChoice',
                  message: 'which type of team member would you like to add?',
                  choices: [
                    'Engineer',
                    'Intern',
                    "I don't want to add any more team members",
                  ],
                },
              ])
              .then((userChoice) => {
                switch (userChoice.memberChoice) {
                  case 'Engineer':
                    addEngineer();
                    break;
                  case 'Intern':
                    addIntern();
                    break;
                  default:
                    buildTeam();
                }
              });
          }