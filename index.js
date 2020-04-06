// Import required modules with const
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer')
inquirer
.prompt([
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

function writeToFile(fileName, data) {
}

function init() {

}

init();
