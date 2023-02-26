// Hope Carroll Personal Flag
//Countries: Honduras and Cameroon
function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  CameroonColors();
  fill("blue");
  blueHonduras();
  noStroke();
  //Cameroon star color
  fill("yellow");
  HondurasStars(300, 200, 0.5);
  // Honduras stars turned into smiley face!
  fill("blue");
  HondurasStars(200, 150, 0.5);
  HondurasStars(200, 250, 0.5);
  HondurasStars(400, 150, 0.5);
  HondurasStars(400, 250, 0.5);
  HondurasStars(240, 295, 0.5);
  HondurasStars(300, 300, 0.5);
  HondurasStars(360, 295, 0.5);
}
function blueHonduras(x, y, size) {
  translate(x, y);
  scale(size);
  rect(0, 0, 600, 70);
  rect(0, 330, 600, 70);
}
function HondurasStars(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  // star code used from Jon's "Transform Shapes" tutorial
  rotate(180);
  //first point
  triangle(0, 50, 20, 0, -20, 0);
  //second point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //third point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //fourth point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  //fifth point
  rotate(72);
  triangle(0, 50, 20, 0, -20, 0);
  pop();
}
function CameroonColors(x, y, size) {
  translate(x, y);
  scale(size);
  fill("green");
  rect(0, 70, 200, 260);
  fill("red");
  rect(200, 70, 200, 260);
  fill("yellow");
  rect(400, 70, 200, 260);
}
