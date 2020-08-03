var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	

	


	packageSprite=createSprite(200, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//packageSprite.velocityX=3;
	

	helicopterSprite=createSprite(200, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helicopterSprite.velocityX=3;
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(packageSprite.position.x , 200 , 5 , options);
	packageSprite.y=helicopterSprite.y
   packageSprite.x=helicopterSprite.x
	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Matter.Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	options=
	{
		restitution:0.3,
		isStatic:false
	}
}
else
{
	options=
	{
		restitution:0.3,
		isStatic:true
	}
}


  
 packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 
 packageSprite.velocityX=packageBody.velocityX;
  Matter.Engine.update(engine);
  drawSprites();
 
}

function keyPressed() {
 
}




