
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Describe what this app is going to be used for?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'If you want to add a table of contents do so here?',
        name: 'Table',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Please list any usage instructions here?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'If you have a screenshot and have added it to the assets folder please put the file name here',
        name: 'Picture',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'Credits',
    },
    {
        type: 'checkbox',
        message: 'Did you add a License to this project, please tell us which one.',
        name: 'License',
        choices: ['MIT', 'Apache', 'BSD']
    }, 
    {
        type: 'checkbox',
        message: 'Did you add a Badge to this project, please tell us which one.',
        name: 'Badge',
        choices: ['MIT', 'Apache', 'BSD']
    }, 
    {
        type: 'input',
        message: 'Whats your GitHub username?',
        name: 'Github'
    },
    {
        type: 'input',
        message: 'Whats your Email?',
        name: 'Email'
    },
    
]).then(answers => {
    let readme = `
<${answers.Title}>

## Description
${answers.Description}

## Table of Contents
${answers.Table}
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.Installation}

![${answers.alt}](../assets/${answers.Picture})

## Usage
${answers.Usage}

## Credits
${answers.Credits}

## License
[https://choosealicense.com/](https://choosealicense.com/).
${answers.License}

## Badges
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
${answers.Badge}

## Contributing
${answers.Contributing}

##  Questions
[https://github.com/${answers.Github}]
[${answers.Email}]
`
fs.writeFile('./README/README.md',readme,(err)=>{
    if(err){
        throw err
    }
    console.log("Great Job!!");
})
});


// license style: ?style=flat&logo=appveyor 
// badges : https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR> color brightgreen
