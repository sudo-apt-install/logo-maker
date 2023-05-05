const cli = require("./cli");

function renderShape(shape, data) {
  let shapeSelection = "";
  switch (shape) {
    case "Circle":
      shapeSelection = `<svg viewbox="-100 -80 200 200">
      <circle cx="50" cy="50" r="50" fill="${data.shapeColor}" />
      <text x="50" y="65" font-size="200%" text-anchor="middle" fill="${data.color}">123</text>
    </svg> `;
      break;

    case "Triangle":
      shapeSelection = `<svg height="500" width="500">
		    <polygon points="250,60 100,400 400,400" fill="${data.shapeColor}"/><text x="50%" y="50%" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
            </svg>`;
      break;

    case "Square":
      shapeSelection = `<svg>
      <rect x="0" y="0" width="50dvw" height="50dvh" fill="${data.shapeColor}" /><text x="50%" y="50%" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
    </svg>`;
      break;
    default:
      break;
  }
  console.log(shapeSelection);

  return shapeSelection;
  // return `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>SVG Logo</title>
  // </head>
  // <body>
  //     ${shapeSelection}
  // </body>
  // </html>`;
}

module.exports = renderShape;
