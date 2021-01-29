var hr = hour()
var mn = minute()
var sc = second()

var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background("black");  
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

  push()
  rotate(scAngle)
  translate(0,0)
  stroke("red")
  strokeWeight(7)
  line(400,200,100,0)
  pop()

  push()
  rotate(mnAngle)
  translate(0,0)
  stroke("yellow")
  strokeWeight(7)
  line(400,200,300,1)
  pop()

  push()
  rotate(hrAngle)
  translate(0,0)
  stroke("blue")
  strokeWeight(7)
  line(400,200,200,0)
  pop()

}