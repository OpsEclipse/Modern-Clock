
function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
  
}

function draw() {
  background(0);  
  

  fill("white");
  textSize(30)
  textFont("fantasy")
  text("6", 200,385);
  text("3", 370,200);
  text("12", 180,40);
  text("9", 20,200);

  translate(200,200)
  rotate (-90);

  let hr = hour();
  let hrAngle = map(hr,0,12,0,359);

  strokeWeight(9);
  stroke("green");
  noFill();
  arc(0,0,260,260,0,hrAngle);

  let mn = minute();
  let mnAngle = map(mn,0,60,0,359);

  strokeWeight(9);
  stroke("blue");
  noFill();
  arc(0,0,280,280,0,mnAngle);

  let sc = second()
  let scAngle = map(sc,0,60,0,359);

  strokeWeight(9);
  stroke("red");
  noFill();
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(hrAngle);
  stroke("green");
  line(0,0,98,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke("blue");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,60,0);
  pop();
  
  
  //text(hr+":"+":"+mn+":"+sc,200,200);

  drawSprites();
}