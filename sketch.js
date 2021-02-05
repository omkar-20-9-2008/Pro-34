const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var world;
var engine;
var ground;

function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(750,400,1500,10);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

}

