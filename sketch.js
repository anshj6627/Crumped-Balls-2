
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin1,paper1;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

dustbin1= new dustbin(1000,515,150,120);
paper1=new Paper(280,420,10);
ground1= new Ground(600,height,1200,20);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  //ground display

 
  paper1.display();
  ground1.display();
  dustbin1.display();
  drawSprites();
  
}
function keyPressed(){
if (keyCode==UP_ARROW){
  Body.applyForce(paper1.body,paper1.body,{x:142,y:-145});
  }

}