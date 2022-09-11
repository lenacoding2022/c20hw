
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
let engine;
let world;
var ball, ball_2;
var ground, ground_2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={ 
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  ball_2 = Bodies.circle(150,10,30)
  World.add(world,ball_2)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground_2 = Bodies.rectangle(400,300,500,10, ground_options)
  World.add(world, ground_2)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

4
function draw() 
{
  background(51);
  Engine.update(engine);

  rect(ground_2.position.x, ground_2.position.y, 500,10)
  ellipse(ball_2.position.x, ball_2.position.y,30,30)
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}

