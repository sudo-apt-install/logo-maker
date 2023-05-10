# SVG Logo maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Tests](#tests)
4. [License](#license)

## Description

### User Story

`AS a freelance web developer I WANT to generate a simple logo for my projects SO THAT I don't have to pay a graphic designer`

### Acceptance Criteria

`
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the "logo(.svg)" file in a browser
THEN I am shown an image that matches the criteria I entered
`

### Demonstrational gif
![Logo maker gif](./Assets/logo%20maker%20in%20action.gif)


## Installation

Clone the repository.

You can run the program in your terminal after initializing NodeJs and running the command `npm i` to install any missing dependencies. From the root folder you can run the command `node index.js` then follow the prompts from there.

## Tests
 You should have all dependencies at this point, so you can just run `npm test` or `npm test --coverage` in your terminal.


## License

MIT
