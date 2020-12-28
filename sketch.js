var fixedRect, movingRect;
var g1,g2,g3,g4,g5,g6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1 = createSprite(100,100,50,50);
  g1.shapeColor = "green";
  g2 = createSprite(200,100,50,50);
  g2.shapeColor = "green";
  g3 = createSprite(300,100,50,50);
  g3.shapeColor = "green";
  g4 = createSprite(400,100,50,50);
  g4.shapeColor = "green";
  g5 = createSprite(800,100,50,50);
  g5.shapeColor = "blue";
  g5.velocityY = 5;
  g6 = createSprite(800,650,50,50);
  g6.shapeColor = "green";
  g6.velocityY = -5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touch(movingRect,g2))
  {
    movingRect.shapeColor = "red";
    g2.shapeColor = "white";
  }
  else 
  {
    movingRect.shapeColor = "green";
    g2.shapeColor = "green";
  }

jump(g5,g6);
 
  

drawSprites();
}


