function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  //parameters so image fits canvas
  drawheartShape(30, 30, 1.8);
}
function drawheartShape(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  //colorofshape
  fill("pink");
  translate(-100, -100);
  //heart shape
  beginShape();
  vertex(100, 100);
  vertex(200, 150), vertex(300, 100);
  vertex(200, 300);
  endShape(CLOSE);
  pop();
}
