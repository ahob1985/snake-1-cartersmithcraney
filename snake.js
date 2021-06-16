class Snake {

  constructor() {
this.body = []; 
this.body[0] = createVector(floor(scaleWidth / 2), floor(scaledHeight / 2));
  }

  update() {
let head = this.body[this.body.length - 1].copy(); 
this.body.shift(); 
head.x += this.xDirection; 
head.y += this.yDirection; 
this.body.push(head);
  }

  endGame() {

  }

  grow() {

  }

  eat(food) {

  }

  show() {
for(let i = 0; i < this.body.length; i++) { 
  fill(0); 
  noStroke(); 
  rect(this.body[i].x, this.body[i].y, 1, 1);
}
  }

  setDirection(x, y) {
 this.xDirection = x; 
 this.xDirection = y;
  }

}
