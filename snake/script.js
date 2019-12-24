var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var backColor = 'lightblue';
var borderColor = 'red';
var snakeColor = 'green';
var snakeBorder = 'darkgreen';
let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
]
let dx = 10;
let dy = 0;
context.fillStyle = backColor;
context.strokestyle = borderColor;
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeRect(0, 0, canvas.width, canvas.height);

function drawSnake(){
  snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart){
  context.fillStyle = 'lightgreen';
  context.strokestyle = 'darkgreen';
  context.fillRect(snakePart.x, snakePart.y, 10, 10);
  context.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
