// Added packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// Created an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "Title",
    },
    {
      type: "input",
      message: "Describe what this app is going to be used for?",
      name: "Description",
    },
    {
      type: "input",
      message: "If you want to add a table of contents do so here?",
      name: "Table",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "Installation",
    },
    {
      type: "input",
      message: "Please list any usage instructions here?",
      name: "Usage",
    },
    {
      type: "input",
      message:
        "If you have a screenshot and have added it to the assets folder please put the file name here",
      name: "Picture",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "Credits",
    },
    {
      type: "checkbox",
      message:
        "Did you add a License to this project, please tell us which one.",
      name: "License",
      choices: ["MIT", "Apache", "BSD"],
    },
    {
      type: "checkbox",
      message: "Did you add a Badge to this project, please tell us which one.",
      name: "Badge",
      choices: ["MIT", "Apache", "BSD"],
    },
    {
      type: "input",
      message:
        "If you created an application or package and would like other developers to contribute it please do it here.",
      name: "Contributing",
    },
    {
      type: "input",
      message: "Whats your GitHub username?",
      name: "Github",
    },
    {
      type: "input",
      message: "Whats your Email?",
      name: "Email",
    },
  ])
  .then((answers) => {
    let readme = `
# ${answers.Title}

![${answers.Badge}](https://img.shields.io/static/v1?label=${answers.Badge}&message=License)

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

## Screenshot
![${answers.alt}](../assets/${answers.Picture})

## Usage
${answers.Usage}

## Credits
${answers.Credits}

## License
${answers.License}

## Badges
![${answers.Badge}](https://img.shields.io/static/v1?label=${answers.Badge}&message=License)


## Contributing
${answers.Contributing}

##  Questions
If you have any questions you can reach me at: [https://github.com/${answers.Github}][(${answers.Email})]

`;
    fs.writeFile("./README/README.md", readme, (err) => {
      if (err) {
        throw err;
      }
      console.log("Great Job!!");
    });
  });
