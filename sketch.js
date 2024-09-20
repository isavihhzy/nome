function setup() {
  createCanvas(500,500);
  background("#9C27B0");
}

function draw() {

  stroke("blue");
  fill("red")
  
  if (mouseIsPressed) {
rect(mouseX,mouseY, 40, 40);
   }
}
