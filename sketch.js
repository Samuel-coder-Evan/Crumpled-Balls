
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	rect1 = createSprite(700,600,10,120)
	rect2 = createSprite(550,600,10,120)
	rect3 = createSprite(620,658,150,10)

    rect1.shapeColor = ("red")
	rect2.shapeColor = ("red")
	rect3.shapeColor = ("red")
	options = {
		isStatic : true
	}
	r1 = Bodies.rectangle(700,600,10,120,options)
    r2 = Bodies.rectangle(550,600,10,120,options)
	r3 = Bodies.rectangle(620,658,150,10,options)
	
	World.add(world,r1)
	World.add(world,r2)
	World.add(world,r3)
	
	ground = Bodies.rectangle(400,680,800,50,options)

    

    World.add(world,ground)
	//Create the Bodies Here.

	
	Paper1 = new Paper(200,200,20)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background("blue");
  rectMode(CENTER);
  Paper1.display()
  rect(ground.position.x,ground.position.y,800,50)
  
  rect1.display()
  rect2.display()
  rect3.display()
}
function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:30,y:-50})
	}
 console.log(keyCode)
}


