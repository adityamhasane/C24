const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1120,350,50,50);
    box2 = new Box(980,350,50,50);
    box3 = new Box(1120,300,50,50);
    box4 = new Box(980,300,50,50);
    ground = new Ground(200,height,2000,20);

    bird1 = new Bird(200,200);
    pig1 = new Pig(1050,300);
    pig2 = new Pig(1050,350);
log1 = new Log(1045,250,200,PI/2)
log2 = new Log(1045,320,200,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();


}