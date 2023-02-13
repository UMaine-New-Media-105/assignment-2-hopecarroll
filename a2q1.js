function setup() {
  createCanvas(400, 400);
}
function draw() {
  //first row
  fill("palevioletred");
  drawSquares(0);
  drawSquares(81);
  drawSquares(162);
  drawSquares(243);
  drawSquares(324);
  fill("skyblue");
  // Special tile
  rect(81, 81, 80, 80);
  rect(243,81,80,80);
  rect(81,162,80,80);
  rect(162,162,80,80);
  rect(243,162,80,80);
  rect(81,243,80,80);
  rect(243,243,80,80);
  noFill();
}
function drawSquares(topY) {
  fill("palevioletred");
  rect(0, topY, 80, 80);
  rect(81, topY, 80, 80);
  rect(162, topY, 80, 80);
  rect(243, topY, 80, 80);
  rect(324, topY, 80, 80);
}
