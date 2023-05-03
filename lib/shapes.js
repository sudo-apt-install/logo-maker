const cli = require("./cli");

function renderShape(shape) {
  let shapeSelection = "";
  switch (shape) {
    case "Circle":
      shapeSelection = `<svg height="500" width="500">
            <circle cx="50" cy="50" r="40" fill="${data.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
          </svg> `;
      break;

    case "Triangle":
      shapeSelection = `<svg height="500" width="500">
		    <polygon points="250,60 100,400 400,400" fill="${data.shapeColor}"/><text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
            </svg>`;
      break;

    case "Square":
      shapeSelection = `<svg width="400" height="400">
            <rect width="400" height="400" fill="${data.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
          </svg>`;
      break;
    default:
      break;
  }
  console.log(shapeSelection);
  return shapeSelection;
}

module.exports = renderShape;
