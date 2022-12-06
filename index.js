// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const { generateMarkdown } = require('./utils/generateMarkdown');
 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input ",
        name: ["user"],
        message: "What is your Github username?"

    },

    {
        type: "input",
        name: ["email"],
        message: "What is your email address?"

    },

    {
      
        type: "input",
        name: ["title"], 
        message: "What is the title of your project?"

    },

    {
       
        type: "input",
        name: ["description"],
        message: "Provide a description of your project:"

    },

    {
        type: "input",
        name: ["installation"],
        message: "What are the installation intructions for your project?"
    },

    {

        type: "input",
        name: ["test"],
        message: "What command should be used to run tests?",
        default: "npm test" 
    },

    {

        type: "input",
        name: ["contribution"],
        message: "What are the contribution guidelines for your project?"
    },

    {

        type: "input",
        name: ["usage"],
        message: "What is the usage information for your project"
    },

    {

        type: "list",
        name: ["license"],
        message: "What is the license of your project?", 
        choices: ["MIT", "GNU LGPL", "ISC", "Unlicense", "none"],
        default: "MIT" 
    },

]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('Your README has been created!')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) // Prompt user to get input data
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('./utils/README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}


// Function call to initialize app
init();
