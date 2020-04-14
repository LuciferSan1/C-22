const Engine = Matter.Engine;
const Bodies  = Matter.Bodies;
const World = Matter.World;


var bubbles = [];
var engine, world;
var ground;
var gSlider;


function setup(){

  var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(0,350,800,10);
gSlider = createSlider(0, 100, 10);
gSlider.position(40, 365);
gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);


}

function mousePressed() {

  bubbles.push(new Bubble(mouseX,mouseY));

}

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  var fVal = gSlider.value();
for (var i = 0;i<bubbles.length;i++){

  
  bubbles[i].display();
  
}


}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    this.w = random(20, 100);
    this.h = random(12,60);
    this.gravity = 10;
    
    
    

  this.display = function(){
      stroke(255);
      fill("green");
      rect(this.x,this.y,this.w,this.h);
      
      this.y +=this.gravity;
    
      
     
  }
  
  
}

