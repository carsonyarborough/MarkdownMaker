const readmetemps = require('./utility/ReadMeTemplates.js');
const fs = require('fs');
const inquirer = require('inquirer');



const questions = [
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'useremail',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'usergithub',
    },
    {
        type: 'list',
        message: 'What license do you want?',
        name: 'license',
        choices: ['no license','MIT','ISC','MPL 2.0','Apache 2.0'],
    }
  
]




inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFileSync('readme.md', generateReadMe(response), (err) =>
            err ? console.log(err) : console.log('response recorded'))
    })


