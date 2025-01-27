let stroke1 = prompt("enter a basic color name in lowercase", "gray");
let stroke2 = prompt("enter a stroke weight between 10-25", "10");
let fill1 = prompt("enter a basic color for the hat", "green");
let fill2 = prompt("choose a color for the house", "red");
let fill3 = prompt("what color is the sky?", "blue");

function setup() {
  createCanvas(1000, 800);
  background("cyan");
  
}


function draw() {
  //background
  //ground
  strokeWeight(0);
  fill(fill3);
  rect(0, 0, 1000, 375);
  //house
  fill(fill2);
  quad(200, 200, 400, 200, 500, 600, 200, 600);
  //chimney
  rect(220, 25, 50, 100);
  //roof
  triangle(150, 200, 300, 25, 450, 200);
  //snowman legs
  fill("#f1f1f1");
  stroke(stroke1);
  strokeWeight(stroke2);
  ellipse(500, 600, 300);
  //torso
  ellipse(500, 400, 375);
  //noggin
  ellipse(500, 275, 225);
  //hat
  fill(fill1);
  triangle(425, 250, 575, 250, 500, 50);
  //left eye
  fill(0);
  strokeWeight(5);
  ellipse(450, 325, 25);
  //right eye
  fill(0);
  strokeWeight(10);
  ellipse(550, 300, 25);
  //mouth
  noFill();
  stroke(0)
  strokeWeight(15);
  arc(500, 335, 75, 75, 0, 1)
  //left arm
  noFill();
  stroke(0);
  strokeWeight(15);
  line(650, 400, 700, 650);
  //right arm
  noFill();
  stroke(0);
  strokeWeight(15);
  line(350, 400, 300, 650);
}
