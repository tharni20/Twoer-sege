
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1, base2 ;var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29;
var rock1;
var launcher;


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  base1 = new Base (400,500,300,20);
  base2 = new Base (900,350,300,20);

  rock1 = new Rock (100,300,20);

  launcher = new Slingshot (rock1.body,{x:100, y:300});

  box1 = new Box (330,470,30,40);
  box2 = new Box (360,470,30,40);
  box3 = new Box (390,470,30,40);
  box4 = new Box (420,470,30,40);
  box5 = new Box (450,470,30,40);
  box6 = new Box (480,470,30,40);
  
  box7 = new Box (345,430,30,40);
  box8 = new Box (375,430,30,40);
  box9 = new Box (405,430,30,40);
  box10 = new Box (435,430,30,40);
  box11 = new Box (465,430,30,40);

  box12 = new Box (355,390,30,40);
  box13 = new Box (385,390,30,40);
  box14 = new Box (415,390,30,40);
  box15 = new Box (445,390,30,40);

  box16 = new Box (385,350,30,40);
  box17 = new Box (415,350,30,40);
  
  box18 = new Box (405,310,30,40);

  box19 = new Box (800,320,30,40);
  box20 = new Box (830,320,30,40);
  box21 = new Box (860,320,30,40);
  box22 = new Box (890,320,30,40);
  box23 = new Box (920,320,30,40);
  box24 = new Box (950,320,30,40);

  box25 = new Box (980,360,30,40);
  box26 = new Box (375,430,30,40);
  box27 = new Box (405,430,30,40);
  box28 = new Box (435,430,30,40);
  box29 = new Box (465,430,30,40);

}

function draw() {
  background("grey");  
  drawSprites();
  
 // Engine.run(engine);

  base1.display();
  base2.display();
  rock1.display();
  launcher.display();
  fill ("black")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill ("red");
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill ("purple");
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill ("pink");
  box16.display();
  box17.display();
  fill("white");
  box18.display();

  fill("green");
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  fill("yellow");
  box25.display();
/*
  fill ("yellow");
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();  
*/
}

function mouseDragged(){
  Matter.Body.setPosition (rock1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}
