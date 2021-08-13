const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;
function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);  
    box2=new Box(230,50,70,140);  
    box3=new Box(230,100,60,40);
    box4 = new Box(200,150,70,50);
    ground1 = new Ground(200,590,1000,10)
  
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground1.display();
     
         
}

