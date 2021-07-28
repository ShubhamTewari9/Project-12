var path, boy, leftBoundary, rightBoundary;
var pathImg, boy_running ;
var i;

function preload(){
  //loadImage of the path
  pathImg = loadImage("path.png")

  //loadAnimation of the boy
  boy_running = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.PNG", "Jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //create sprite for the path
 path = createSprite(200,200,50,400) 
 path.addImage("path", pathImg)
 path.y = path.width /2;
 path.velocityY = 4;

//create a boy sprite
boy = createSprite(200,300,50,400) 
boy.addAnimation("boy", boy_running)
boy.scale=0.5;
  
// create left Boundary
leftBoundary=createSprite(0,0,110,800);
leftBoundary.visible = false

//create right Boundary
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX
  
  // collide the boy with the left and right invisible boundaries.
  boy.collide(rightBoundary);
  boy.collide(leftBoundary)
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
