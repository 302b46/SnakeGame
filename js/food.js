// Define the Food class
class Food {
    constructor() {
      // Generate random x and y coordinates for the food
      this.x = Math.floor(Math.random() * 20) * box;
      this.y = Math.floor(Math.random() * 20) * box;
    }
  
    // Draw the food on the canvas
    draw() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, box, box);
    }
  
    // Update the position of the food
    update() {
      // Generate new x and y coordinates for the food
      this.x = Math.floor(Math.random() * 20) * box;
      this.y = Math.floor(Math.random() * 20) * box;
    }
  }
  