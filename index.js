// Import required modules with const
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer')
const questions = inquirer
.prompt([
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "user"
  },  
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
    {
    type: "input",
    message: "Enter a brief description of your project",
    name: "description"
    },
    {
    type: "list",
    message: "Which license should your app use?",
    name: "license",
    choices: ["MIT","Public domain", "LGPL", "Proprietary"]
    },
    {
    type: "input",
    message: "What commands should the user run to install this application?",
    name: "install",
    default: "npm i"
    },
    {
    type: "input",
    message: "What should the user know about using this application?",
    name: "instructions"
    },

])
.then(answers => {
  console.log(answers)
  api.getUser(answers.user)
  .then(response =>console.log(response.data))
  writeToFile()
  
})
.catch(error => {
  console.log(error)
})

module.exports = questions;

function writeToFile() {
  fs.appendFile("README.md", answers.user + '\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }
  
  });
  
}


function init() {

}

init();

