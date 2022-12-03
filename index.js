// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input ",
        name: ["Github"],
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
        message: "What are the installation intructions for yout project?"
    },

    {

        type: "input",
        name: ["test"],
        message: "What command should be used to run tests?"
        default: 'npm test'
    },

    {

        type: "input",
        name: ["contribution"],
        message: "What are the contribution guidlines for your project?"
    },
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
