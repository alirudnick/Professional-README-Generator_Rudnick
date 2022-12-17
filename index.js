const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project.",
        default: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: ",
        default: '',
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        default: '',
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and any examples.", // add campability for uploading a screenshot
        default: '',
    },
    {
        type: "input",
        name: "contributing",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        default: '',
    },
    {
        type: "input",
        name: "tests",
        message: "Link test files.", // Go the extra mile and write tests for your application. Then provide examples on how to run them.
        default: '', // ofc add file upload capabilities 
    },
    {
        type: "confirm",
        name: "license",
        message: "Does your GitHub apppliation have a license?",
        default: false,
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You need to enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "repo",
        message: "Enter your GitHub repo name.",
        default: '',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('You need to enter your GitHub repo name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        default: '',
    },
]

.then((answers)=> {
    console.log(answers)
})
.catch((error)=> {
    console.log(error)
});

