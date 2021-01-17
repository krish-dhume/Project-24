
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var ground;
var stone;
var rubber;
var hammer;
function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
  ground=new Ground(600,500,1200,50);
  stone=new Stone(600,450,70,70);
	rubber=new Rubber(900,450,30)
   hammer=new Hammer(700,320,30);

}


function draw() {
	background(0,255,255);
	Engine.update(myengine);
  

	ground.display();
  stone.display();
 rubber.display();
 hammer.display();
  drawSprites();
 
}



