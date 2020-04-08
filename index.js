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
    type: "input",
    message: "Give the user short instructions on how to install your application",
    name: "install"
    },
])
.then(answers => {
  console.log(answers.user)
  api.getUser()
})
.catch(error => {
  console.log(error)
})

module.exports = questions;

function writeToFile(fileName, data) {
}

function init() {

}

init();
