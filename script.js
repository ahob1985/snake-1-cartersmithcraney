// Author: Carter Smith Craney

// Global UI Variables
let canvasDiv; 
let canvas;
let textDiv; 
let textP;
let buttonDiv;
let resetButton;

// Global Game Variables
let snake;
let food;
let resolution; 
let scaledWidth;
let scaledHeight;
let score;

function setup() {
  // Build the interface

  // Set the resolution to 20. Play with this later if you want.

  // Scaled width and height are width / resolution, height / resolution

  // Set the game's framerate to 5 (or whatever you prefer)

  // Call resetGame() to initialize everything else.

}

function draw() {
  // Scale the canvas according to resolution, then refresh the background
scale(resolution); 
background(20);
  // Check if snake is eating the food

  // Draw the snake
snake.update(); 
snake.show();
  // Draw the food

  // Check for game over

}

function createFood() {

}

function keyPressed() {

}

function resetGame() {
snake = new Snake();
}
