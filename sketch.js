const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Common = Matter.Common;

var Plinkos = [];
var ground, ground1, ground2;
var Divisions = [];
var LifeSavers = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 800, 480, 10);
  ground1 = new Ground(480, 400, 1, 800);
  ground2 = new Ground(0, 400, 1, 800);

  for (var a = 80; a <= 400; a = a + 80){
    Divisions.push(new Division(a, 700, 5, 350));
  }

  for (var c = 40; c <= 440; c = c + 40){
    Plinkos.push(new Plinko(c, 100, 10));
  }

  for (var d = 20; d <= 460; d = d + 40){
    Plinkos.push(new Plinko(d, 200, 10));
  }

  for (var e = 40; e <= 440; e = e + 40){
    Plinkos.push(new Plinko(e, 300, 10));
  }

  for (var f = 20; f <= 460; f = f + 40){
    Plinkos.push(new Plinko(f, 400, 10));
  }
}

function draw() {
  background("red");
  Engine.update(engine);
  
  if (frameCount %90 === 0){
    LifeSavers.push(new LifeSaver(random(239, 241), 10, 16));
}
  
  ground.display();
  ground1.display();
  ground2.display();

  for (var b = 0; b < Divisions.length; b++){
    Divisions[b].display();
  }

  for (var g = 0; g < Plinkos.length; g++){
    Plinkos[g].display();
  }

  for (var h = 0; h < LifeSavers.length; h++){
    LifeSavers[h].display();
  }
}