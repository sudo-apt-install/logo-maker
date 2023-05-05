const inquirer = require("inquirer");
const fs = require("fs");
const exp = require("constants");
const renderShape = require("./shapes.js");

//inquirer prompts
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to 3 characters: ",
        name: "characters",
      },
      {
        type: "input",
        message: "Enter a color for the shape (Keyword or Hexadecimal): ",
        name: "shapeColor",
      },
      {
        type: "list",
        message: "Select a shape: ",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter a color for the text (Keyword or Hexadecimal): ",
        name: "color",
      },
    ])
    .then((data) => {
      console.log("\n");
      console.table(data);
      console.log("\n");
      
       fs.writeFile('logo.svg', renderShape(data.shape, data), (err) => {
        err ? console.error(err) : console.log('Success!')
       });

      // init();
    });
}

exports.init = init;
//write file here
