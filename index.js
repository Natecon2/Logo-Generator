import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes.js';

async function main() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (text) => {
          if (text.length > 3) {
            return 'Text should be up to three characters.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ]);

    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle(userInput.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(userInput.shapeColor);
        break;
      case 'square':
        shape = new Square(userInput.shapeColor);
        break;
      default:
        console.error('Invalid shape selection');
        return;
    }

    const svg = shape.render();

    const filePath = './examples/logo.svg';

    fs.writeFileSync(filePath, svg);

    console.log(`Generated ${filePath}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
