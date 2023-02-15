function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  //colorofshape
  fill("pink");
  //heart shape
  beginShape();
  vertex(100, 100);
  vertex(200, 150), vertex(300, 100);
  vertex(200, 300);
  endShape(CLOSE);
}
