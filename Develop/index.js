// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');






const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: [
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'Mozilla Public License 2.0'
      ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}




// use async and wait to avoid async shenanigans 
async function init() {
        
    const userData = await inquirer.prompt(questions);

    const markdown = generateMarkdown(userData);

    //console.log(markdown);
    fs.writeFile('READMEexample.md', markdown, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Success`);
        }
    });
   
 }






// Function call to initialize app
init();
