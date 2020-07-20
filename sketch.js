var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

//The Bodies
 //paper 
   paper1 = new Paper(150, 500, 10);   
 //dustbin  
   dustbinRight = new Dustbin(639, 540, 10, 150);
   dustbinMiddle = new Dustbin(750, 600, 200, 10);
   dustbinLeft = new Dustbin(851, 540, 10, 150);
 //ground
   ground = new Ground(600, height-35, 1200, 15); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

//displaying
  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  paper1.display();
  
  ground.display();

  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-15});
 }
}