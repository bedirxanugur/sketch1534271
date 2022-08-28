// Bedirhan Ugur
// https://twitter.com/bedirxanugur
// https://www.instagram.com/bedirxanugur

function setup() {
  createCanvas(800, 800);

  colorMode(HSB, 360, 100, 100, 100);

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = "white";
  background(100);

  rectMode(CENTER);

  frameRate(1);
 // noLoop();
}

function draw() {
  background(100);

  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      fill(random(200, 180), random(30, 100), random(30, 100), random(50, 100));

      noStroke();

      circle(i * 80, j * 80, random(180));

      circle(i * 80 + 10, j * 80, random(80));
      circle(i * 80 + 20, j * 80, random(80));

      fill(random(10, 20), random(100), 100, random(100) + 30);

      rect(i * 80, j * 80 + i * 50, random(width), random(3));
      //rect(i * 80, j * 80 + i * 10, random(height), random(3));

      stroke(0, 0, 100, random(80, 100));

      strokeWeight(10);
      point(random(i * 80), random(j * height));

      strokeWeight(random(5));

      point(i * 80 + 10, j * 80 - 20);
      stroke(random(10, 20), random(100), 100, random(100) + 30);
      strokeCap(PROJECT);
      line(
        random(i * 80 + 10, j * 80 - 20),
        random(i * 80 + 10, j * 80 - 20),
        random(i * 80 + 10, j * 80 - 20),
        random(i * 80 + 10, j * 80 - 20),      );
    }
  }
}
