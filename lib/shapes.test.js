// lib/shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('render should return the correct SVG string for Circle', () => {
    const circle = new Circle('red');
    const svg = circle.render();
    expect(svg).toContain('<circle');
    expect(svg).toContain('fill="red"');
  });
});

describe('Triangle', () => {
  test('render should return the correct SVG string for Triangle', () => {
    const triangle = new Triangle('blue');
    const svg = triangle.render();
    expect(svg).toContain('<polygon');
    expect(svg).toContain('fill="blue"');
  });
});

describe('Square', () => {
  test('render should return the correct SVG string for Square', () => {
    const square = new Square('green');
    const svg = square.render();
    expect(svg).toContain('<rect');
    expect(svg).toContain('fill="green"');
  });
});
