var fixedRect, movingRect,r1,r2,r3,r3;
var object1,object2,edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  r1 = createSprite(100,100,50,50);
  r1.shapeColor= "green";

  r2 = createSprite(200,200,60,50);
  r2.shapeColor= "green";
  r2.velocityX=5;

  r3 = createSprite(400,200,70,80);
  r3.shapeColor= "green";
  r3.velocityX=-5;

  r4 = createSprite(1000,400,50,50);
  r4.shapeColor= "green";
}

function draw() {
  background(0,0,0); 
  
  edges = createEdgeSprites();
  
  
  r2.bounceOff(edges);
  r3.bounceOff(edges);
  
  
  bounceOff(r2,r3);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(r1,movingRect)){
    movingRect.shapeColor = "red";
    r1.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    r1.shapeColor = "green";

  }

  
  drawSprites();
}
