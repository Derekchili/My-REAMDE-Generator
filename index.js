// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell me about yourself?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Whats your Linkedin url?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'Whats your Github url?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Whats your Email?',
        name: 'email',
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('result.json',JSON.stringify(fileName,null,4(err))
    error ? console.log(error): console.log(data));
}



// TODO: Create a function to initialize app
function init() {}

[Inquirer.package]('https://www.npmjs.com/package/inquirer/v/8.2.4');

// Function call to initialize app
init();
