/**
 * Recursive prompt example
 * Allows user to choose when to exit prompt
 */

//  'use strict';
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./dist/generateHTML');
const fs = require("fs");

// const generateInitHTML = function(data){
// const golf = new Manager(data.mngrName, data.mngrID, data.mngrEmail, data.mngrOfficeNum);
// console.log(golf.getRole())
// generateHTML(golf);
//}

 
const initQuestions = [
    {
        type: 'input',
        name: 'mngrName',
        message: "What's the name of the Manager?",
    },
    {
        type: 'input',
        name: 'mngrID',
        message: "What's the Manager's employee ID?",
    },
    {
        type: 'input',
        name: 'mngrEmail',
        message: "What's the Manager's email address?",
        validate(value) {
            const pass = value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            if (pass){
                return true;
            }
            return 'Please enter a valide email address'
        },
    },
    {
        type: 'input',
        name: 'mngrOfficeNum',
        message: "What's the Manager's office number?",
    },
    // {
    //     type: 'confirm',
    //     name: 'askAgain',
    //     message: 'Want to enter another team member (just hit enter for YES)?',
    //     default: true,
    // },
    {//Creating a checkbox input type for user to select options
        type: 'checkbox',
        message: 'Would you like to add another team member? Please select from the following options',
        name: 'optSelected',
        choices: [
        {
            name: 'Engineer',
        },
        {
            name: 'Intern',
        },
        {
            name: 'Done building my team',
        },
        ], //Depending on what license the user selects, the appropriate links will populate the README file.
        validate(answer) {
        if (answer == "Engineer") {
            answer.link = 'https://opensource.org/licenses/MIT';
            answer.shield = 'https://img.shields.io/badge/License-MIT-yellow.svg';
            return true;
        } else if (answer == "Intern"){
            answer.link = 'https://opensource.org/licenses/ISC';
            answer.shield = 'https://img.shields.io/badge/License-ISC-blue.svg'
            return true
        } else {
            return true;
        }
        },
    },
 ];
 
 function init() {
   inquirer.prompt(initQuestions).then((answers) => {
        
    const golf = new Manager(answers.mngrName, answers.mngrID, answers.mngrEmail, answers.mngrOfficeNum);
    console.log(golf.getRole());
    console.log(golf);
    // generateInitHTML(answers);

     
    //  if (answers.askAgain) {
    //    init();
    //  } else {
    //    console.log('Your manager is:', mngrOutput.join(', '));
    //  }
   });
 }
 
 init();