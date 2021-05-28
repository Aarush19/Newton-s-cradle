
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof;
var rope;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);
		roof = new Object (400,350,700,50);

		rope = new Object (100,350,700,10);
		rope = new Object (300,350,700,10);
		rope = new Object (500,350,700,10);
		rope = new Object (700,350,700,10);

		bobObject1 = new Object (100,600,50,50);
		bobObject2 = new Object (300,600,50,50);
		bobObject3 = new Object (500,600,50,50);
		bobObject4 = new Object (700,600,50,50);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof = createSprite (400,100,700,30);

  rope = createSprite (100,300,10,400);
  rope = createSprite (300,300,10,400);
  rope = createSprite (500,300,10,400);
  rope = createSprite (700,300,10,400);

  bobObject1 = createSprite (100,500,70,70);
  bobObject2 = createSprite (300,500,70,70);
  bobObject3 = createSprite (500,500,70,70);
  bobObject4 = createSprite (700,500,70,70);
  
  drawSprites();
 
}
