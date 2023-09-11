// shapes.js

export class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      const svg = `
        <svg width="300" height="200">
          <circle cx="150" cy="100" r="50" fill="${this.color}" />
        </svg>
      `;
      return svg;
    }
  }
  
  export class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      const svg = `
        <svg width="300" height="200">
          <polygon points="150,50 100,150 200,150" fill="${this.color}" />
        </svg>
      `;
      return svg;
    }
  }
  
  export class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      const svg = `
        <svg width="300" height="200">
          <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        </svg>
      `;
      return svg;
    }
  }
  
  