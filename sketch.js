let x = 20;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(228,76,219);
  strokeWeight(5);
  fill(93, 47, 90);
  triangle(x,20,x+10,50,x+50,50);
  arc(x,70,30,30,0,PI,CHORD);
  circle(x,110, 30);
  rect(x,140, 20, 50);
  
  x = x + 1;
  
  if (x + 50 > 400){
    x = 0;
  }
}