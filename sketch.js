var rect1,rect2,sprite1,sprite2

function setup() {
  createCanvas(600,600);
  
  rect1 = createSprite(200,100,20,20)
  rect2= createSprite(200,500,20,20)

  rect1.shapeColor = "white";

  rect1.velocityY = 3;
  rect2.velocityY = -3;

  sprite1 = createSprite(100,100,50,50);
  sprite2 = createSprite(100,200,50,50);

  sprite2.shapeColor = "green";
  sprite1.shapeColor = "green";
}

function draw() {
  background(0);  

  sprite2.x = World.mouseX;
  sprite2.y = World.mouseY;


  bounceOff(rect1,rect2);
  
  if(isTouching(sprite1,sprite2)){

    sprite1.shapeColor = "blue";
    sprite2.shapeColor = "blue";

  }
  else{

    sprite1.shapeColor = "green";
    sprite2.shapeColor = "green";

  }

  drawSprites();

}



