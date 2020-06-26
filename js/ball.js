function Ball(x, y, radius, color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: 0,
    y: 0
  }

  this.floor = canvas.height - this.radius;
  this.isOnFloor = 0;
  this.friction = parseFloat(document.getElementById("ballFriction").value);

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  this.update = function(){
    this.draw();
  }

  this.move = function(){
    if((this.x + this.radius <= 0 && left == true) || (this.x >= canvas.width - this.radius && left == true)){
      this.velocity.x -= Math.round(this.velocity.x / 2);
      this.velocity.x *= -1;
    }

    if(this.velocity.y == 0){
      if(this.isOnFloor == 2){
        this.floor = this.y;
      }else{
        this.isOnFloor = 1;
      }
    }

    if(this.y < canvas.height - this.radius){
      this.velocity.y--;
    }

    if(this.y >= canvas.height - this.radius && this.velocity.y < 0){
      this.velocity.y = 0;
    }

    this.x += this.velocity.x;
    this.y -= this.velocity.y;
  }

  this.jump = function(amount){
    if(this.velocity.y == 0){
      this.velocity.y = amount;
    }
  }
}
