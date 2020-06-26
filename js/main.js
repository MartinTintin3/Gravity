const canvas = document.querySelector("#canvas"); // or .canvas if you made your canvas have a class of canvas
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
const ctx = canvas.getContext("2d");


var right = false;
var left = false;
var ball = new Ball(canvas.width / 2, canvas.height - 40, 40, "#000000");

setInterval(function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(right == false && ball.velocity.x > 0){
    ball.velocity.x -= parseFloat(document.getElementById("ballFriction").value);
  }else if(left == false && ball.velocity.x < 0){
    ball.velocity.x += parseFloat(document.getElementById("ballFriction").value);
  }else if(ball.velocity.x < 0.9 && ball.velocity.x > -0.9){
    ball.velocity.x = 0;
  }

  ball.move();
  ball.update();
  // canvas.height - ball.radius;
}, 16);

document.addEventListener('keydown', function(e) {
  switch (e.keyCode){
    case 38: case 32: case 87:
      if(ball.velocity.y == 0 && ball.floor == ball.y){
        ball.jump(30);
        break;
      }
      break;
    case 39: case 68:
      right = true;
      ball.velocity.x = parseInt(document.getElementById("ballSpeed").value);
      break;
    case 37: case 65:
      left = true;
      ball.velocity.x = parseInt(document.getElementById("ballSpeed").value) * -1;
      break;
  }
});

document.addEventListener('keyup', function(e) {
  switch (e.keyCode){
    case 39:  case 68:
      right = false;
      break;
    case 37:  case 65:
      left = false;
      break;
  }
});

canvas.addEventListener('mousedown', e => {
  ball.jump(30);
});
