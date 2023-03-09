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