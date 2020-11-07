
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1;
var Dustbin1,Dustbin2,Dustbin3;
var Ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Paper1 = new Paper(50,690,50);
	
	Dustbin1 = new Dustbin(600,690,200,20);
	Dustbin2 = new Dustbin(500,625,20,150);
	Dustbin3 = new Dustbin(700,625,20,150);

	Ground1 = new Ground(400,700,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  Ground1.display();
  KeyPressed();
  
  drawSprites();
}

function KeyPressed(){
	if(keyWentUp("UP_ARROW")){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:	85,y: -125})
	}
}



