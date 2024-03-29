const canvas = document.querySelector("#canvas"); // or .canvas if you made your canvas have a class of canvas
canvas.height = window.innerWidth - 10;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
const ctx = canvas.getContext("2d");


var right = false;
var left = false;
var ball = new Ball(canvas.width / 2, canvas.height - 40, 40, "#FF0000");
var bounce = new Audio('Jump.wav');


setInterval(function(){
  speed = parseInt(document.getElementById("ballSpeed").value);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(right == false && ball.velocity.x > 0 && ball.y < canvas.height - ball.radius){
    ball.velocity.x -= Math.round(parseFloat(document.getElementById("ballFriction").value) / 2);
  }else if(left == false && ball.velocity.x < 0 && ball.y < canvas.height - ball.radius){
    ball.velocity.x += Math.round(parseFloat(document.getElementById("ballFriction").value) / 2);
  }else if(right == false && ball.velocity.x > 0 && ball.y >= canvas.height - ball.radius){
    ball.velocity.x -= parseFloat(document.getElementById("ballFriction").value);
  }else if(left == false && ball.velocity.x < 0 && ball.y >= canvas.height - ball.radius){
    ball.velocity.x += parseFloat(document.getElementById("ballFriction").value);
  }else if(ball.velocity.x < 0.9 && ball.velocity.x > -0.9){
    ball.velocity.x = 0;
  }

  ball.move();
  ball.update();
  // canvas.height - ball.radius;
}, 16);

const requests = new XMLHttpRequest();
requests.open('GET', "")
requests.send()

document.addEventListener('keydown', function(e) {
  switch (e.keyCode){
    case 38: case 32: case 87:
      if(ball.velocity.y == 0 && ball.floor == ball.y){
        ball.jump(parseInt(document.getElementById("ballJumpHeight").value));
        bounce.play()
        break;
      }
      break;
    case 39: case 68:
      //if(ball.y >= canvas.height - ball.radius){
        right = true;
        ball.velocity.x = parseInt(document.getElementById("ballSpeed").value);
        break;
      //}
    case 37: case 65:
      //if(ball.y >= canvas.height - ball.radius){
        left = true;
        ball.velocity.x = parseInt(document.getElementById("ballSpeed").value) * -1;
        break;
      //}
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
  if(ball.velocity.y == 0 && ball.floor == ball.y){
    ball.jump(parseInt(document.getElementById("ballJumpHeight").value));
    bounce.play()
  }
});
