const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {name: "Q1", type: "input", message: "What's your name?"}
]) 
.then((answers)=> {
    console.log(answers)
})
.catch((error)=> {
    console.log(error)
});

