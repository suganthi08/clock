var hour, min, sec;
var hourAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,800);
 angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(400, 400);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(6);
  line(0, 0, 200, 0);
  pop();

  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(6);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(6);
  line(0, 0, 100, 0);
  pop();

/*
    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
    */
}