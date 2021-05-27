const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var person=[];
var engine, world;
var corona1,corona2;
var box1,log;
var backgroundImg,platform;
var sanitizer1, SlingShot;

var gameState = "onSling";
var bg = "sprites/bg1.png";

var score = 0;
function preload() {
}

function setup(){
    var canvas = createCanvas(1300,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    corona1 = new corona(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    corona2 = new corona(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7)
     sanitizer1= new sanitizer(200,50);

      //log6 = new Log(230,180,80, PI/2);
    SlingShot = new slingShot(sanitizer1.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg);
       background(backgroundImg);
       nostroke();
       textsize(35);
       fill("green")
       text("Score"+ score,width-300,60)
   
    Engine.update(engine);
    //strokeweight(4)
    box1.display();
    box2.display();
    ground.display();
    corona1.display();
    // corona1.score();
    log1.display();

    box3.display();
    box4.display();
    corona2.display();
    //corona2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    sanitizer1.display();
    platform.display();
    //log6.display();
    slingShot.display();
}
function mouseDragged(){
     Matter.body.setposition(sanitizer1.body,{x: mouseX, y: mouseY});
}  

function mouseReleased(){
    slingShot.fly();
}

function keypressed(){
    if(keycode===32){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200, y:50});
        slingShot.attach(bird.body);

    }
}
