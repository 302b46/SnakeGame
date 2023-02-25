class Snake {
  constructor() {
    this.snakeArray = [{ x: 10, y: 10 }];
    this.direction = "right";
  }

  move() {
    let head = { x: this.snakeArray[0].x, y: this.snakeArray[0].y };

    switch (this.direction) {
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
    }

    this.snakeArray.unshift(head);
    this.snakeArray.pop();
  }

  changeDirection(direction) {
    if (direction == "up" && this.direction != "down") {
      this.direction = "up";
    } else if (direction == "down" && this.direction != "up") {
      this.direction = "down";
    } else if (direction == "left" && this.direction != "right") {
      this.direction = "left";
    } else if (direction == "right" && this.direction != "left") {
      this.direction = "right";
    }
  }

  checkCollision() {
    let head = this.snakeArray[0];

    // Check collision with walls
    if (
      head.x < 0 ||
      head.x >= 20 ||
      head.y < 0 ||
      head.y >= 20
    ) {
      return true;
    }

    // Check collision with itself
    for (let i = 1; i < this.snakeArray.length; i++) {
      if (head.x == this.snakeArray[i].x && head.y == this.snakeArray[i].y) {
        return true;
      }
    }

    return false;
  }

  checkFoodCollision(food) {
    let head = this.snakeArray[0];

    if (head.x == food.x && head.y == food.y) {
      return true;
    }

    return false;
  }

  grow() {
    let tail = { x: this.snakeArray[this.snakeArray.length - 1].x, y: this.snakeArray[this.snakeArray.length - 1].y };
    this.snakeArray.push(tail);
  }

  getSnakeArray() {
    return this.snakeArray;
  }
}
