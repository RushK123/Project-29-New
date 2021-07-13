const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var wall1, wall2;
var stones;
var bridge, link, jointPoint;
var ground



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(0, height -10, width*2, 20);
  wall1 = new Base(windowWidth-48, 300, 70, 90);
  wall2 = new Base(windowWidth/36, 300,70,90);
  bridge = new Bridge(17, { x: width / 2 - 400, y: height / 2 });
  jointPoint = new Base(width-400, height/2 + 10 , 40, 20);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link (bridge, jointPoint)
   for (var i = 0; i<=8; i++){
     var x = random(width/2 -200, width/2 + 300)
     var y = random(-10, 140);
     var stone = new Stone(x,y,80,80);
    stones.push(stone);
    
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  wall1.show();
  wall2.show();
  bridge.show();
  for (var stone of stones){
    stone.show();
  }

}
