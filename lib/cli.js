const inquirer = require('inquirer');
const fs = require('fs');

//inquirer prompts 
function init() {
    inquirer
        .createPromptModule([
            {
                type: "input",
                message: ""
            }
        ])
}
//write file here