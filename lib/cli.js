const inquirer = require("inquirer");
const fs = require("fs");
const exp = require("constants");
const renderShape = require("./shapes.js");

//inquirer prompts
function init() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter up to 3 characters: ",
      name: "characters",
    },
    {
      type: "input",
      message: "Enter a color (Keyword or Hexadecimal): ",
      name: "color",
    },
    {
      type: "rawlist",
      message: "Select a shape: ",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
    },
    {
      type: "input",
      message: "Enter a color for the shape (Keyword or Hexadecimal): ",
      name: "shapeColor",
    },
  ]);
  renderShape();
}

exports.init = init;
//write file here
