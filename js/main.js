// Import styles
import './css/styles.css';

// Import modules
import { draw as drawSnake, update as updateSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { draw as drawFood, update as updateFood, getFood } from './food.js';

// Set up game canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const GAME_SPEED = 100;

// Set up game variables
let lastRenderTime = 0;
let gameOver = false;

// Game loop function
function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press OK to restart.')) {
      window.location = '/';
    }
    return;
  }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / GAME_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

// Update game state
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

// Draw everything on canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSnake(ctx);
  drawFood(ctx);
}

// Check if snake has collided with itself or the wall
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

// Check if snake is outside game grid
function outsideGrid(position) {
  return (
    position.x < 1 || position.x > 21 ||
    position.y < 1 || position.y > 21
  );
}

// Start game loop
window.requestAnimationFrame(main);
