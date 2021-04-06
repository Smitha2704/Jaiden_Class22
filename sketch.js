

//NameSpacing
const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ground;

function setup() {
  createCanvas(400,400);

  //1: Create Engine; 2: Create World; 3: Create grounds
  engine = Engine.create();
  world=engine.world;

  //JSON format: Javascript object notation format
  var option={
    isStatic:true
  }
  ground= Bodies.rectangle(200, 350, 400,20,option);
  World.add(world,ground);
  console.log(ground);

  var ball_options = {
    restitution:0.8
  }
  ball = Bodies.circle(200, 250, 30, ball_options);
  World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);
  
}