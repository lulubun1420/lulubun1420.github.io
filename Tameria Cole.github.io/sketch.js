function setup() {
  createCanvas(400, 400);
  stroke(220);
  strokeWeight(4);
}

function draw() {
  background(0,180,0);
  fill(300,200,0);
  triangle(130,160, 175,125,110,105);
  triangle(280,160, 225,125,290,105);
  ellipse (200,200, 200, 150);
  noFill();
  
  
  beginShape();
  vertex(255,220);
  vertex(290,210)
  vertex(300,230)
  vertex(330,200)
  endShape();
  beginShape();
  vertex(145,220);
  vertex(110,210)
  vertex(100,230)
  vertex(70,200)
  endShape();
  
  
  
  
  vertex(255,228);
  vertex(285,218)
  
   beginShape();
  vertex(300,240)
  vertex(330,210)
  endShape();
  beginShape();
  vertex(145,228);
  vertex(115,218)
  vertex(100,240)
  vertex(70,210)
  endShape(); 
  
  
  console.log(mouseX + ", " + mouseY);

fill(0,500,60)
ellipse(150,170,45,45)

fill(0,100,180);
ellipse(250,170,75,75);
     // ellipseMode(RADIUS);
fill(255)
triangle(167,222,222,222,190,266);
triangle(196,223,207,223,200,230);
  beginShape();
  curveVertex(218,266);
    curveVertex(210,239);
    curveVertex(20,200);  
    curveVertex(227,257);
  endShape(); 
}
