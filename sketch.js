const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1_r;
var btn2_up;
var btn3_do;
var btn4_l;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options ={
    restitution: 0.95
  }
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = Bodies. circle(200, 100, 20, ball_options)
  World.add(world, ball)
 
  btn1_r = createImg("right.png")
  btn1_r.position(220,30)
  btn1_r.size(55,55)
  btn1_r. mouseClicked(rForce)

  btn2_up = createImg("up.png")
  btn2_up.position(150,30)
  btn2_up.size(45,45)
  btn2_up. mouseClicked(upForce)

  btn3_do = createImg("down.png")
  btn3_do.position(80,30)
  btn3_do.size(55,55)
  btn3_do. mouseClicked(doForce)

  btn4_l = createImg("left.png")
  btn4_l.position(290,30)
  btn4_l.size(45,45)
  btn4_l. mouseClicked(lForce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)
}

function rForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0})
}

function upForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05})
}

function doForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:0.05})
}

function lForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:-0.05, y:0})
}