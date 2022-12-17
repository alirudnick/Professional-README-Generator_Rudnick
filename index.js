const inquirer = require("inquirer");
const fs = require("fs");
const fileGenerator = require("./fileGenerator");


// Questions  //
let questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },{
        type: "input",
        message: "Please present your logo.",
        name: "logo"
    },{
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "confirm",
        message: "Does your application have a license?",
        name: "license",
    },{
        type: "input",
        message: "Please describe your project.",
        name: "description"

    }
];


// Write the Readme file. //
inquirer.prompt(questions).then(function(response) {
   console.log(response);
   
    var content = fileGenerator(response);
    console.log(content);
     fs.writeFile("./ReadMe.md", content, function(err){
         if (err) throw err
         console.log("success");
     });
} ); 