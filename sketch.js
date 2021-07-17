const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//*
var box1, box2, box3,box4;
var hero,hero2,monster,rope,ground;
var bg="gamingbackground2.png"
var bg2="superhero1.png"

function preload() {
  backgroundImg= loadImage(bg);
  heroImg=loadImage(bg2)
  getTime()
}

function setup() {
  createCanvas(2000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1100,700, 2200, 20);

  hero = new Hero(400,500,200);
  //hero2=new Hero(mouseX,mouseY)
  rope = new Rope(hero.body,{ x:20, y:5 });
  monster = new Monster(1500,70,300);

  box1 = new Box(1250, 100, 70, 70);
  box2 = new Box(1250, 100, 70, 70);
  box3 = new Box(1250, 100, 70, 70);
  box4 = new Box(1250, 100, 70, 70);
  box5 = new Box(1250, 100, 70, 70);

  box6 = new Box(1100, 100, 70, 70);
  box7 = new Box(1100, 100, 70, 70);
  box8 = new Box(1100, 100, 70, 70); 
  box9 = new Box(1100, 100, 70, 70);
  box10 = new Box(1100, 100, 70, 70);
  box11 = new Box(1100, 100, 70, 70);
  box12 = new Box(1100, 100, 70, 70);
  box13 = new Box(1100, 100, 70, 70);
 
  box14 = new Box(950, 100, 70, 70);
  box15 = new Box(950, 100, 70, 70);
  box16 = new Box(950, 100, 70, 70);
  box17 = new Box(950, 100, 70, 70);
  box18 = new Box(950, 100, 70, 70);
  box19 = new Box(950, 100, 70, 70);

  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(800, 100, 70, 70);
  box22 = new Box(800, 100, 70, 70);
  box23 = new Box(800, 100, 70, 70);
  box24 = new Box(800, 100, 70, 70);
  box25 = new Box(800, 100, 70, 70);
  box26 = new Box(800, 100, 70, 70);
 

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);


  Engine.update(engine);
  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

 box6.display();
 box7.display();
 box8.display();
 box9.display()
box10.display();
box11.display();
box12.display();
box13.display();

box14.display()
box15.display();
box16.display();
box17.display();
box18.display();
box19.display()

box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();

  hero.display();
  rope.display();
  monster.display();
  //console.log(hero)

  textSize(100-50-20)
  text("use arrow keys",1000,100)


  textSize(10)
  stroke(round(random(0,255)))
  fill(round(random(0,255)))
  
  text("use ⬆ key to go up",1500,20)
  text("use ⬇ key to go down",1500,30)
  text("use ⬅ key to go back",1500,40)
  text("use ➡ key to go forward",1500,50)
}
  /*function mouseDragged (){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  }*/
  function mouseReleased (){
   // if(keyCode=== RIGHT_ARROW){
      rope.fly()
    
      
    }
     
  //}
  
  function keyPressed(){
    if(keyCode===32){
      rope.attach(hero.body)
    }
    if(keyCode===RIGHT_ARROW){
      mouseReleased();
      Matter.Body.applyForce(hero.body,{x:hero.body.position.x,y:hero.body.position.y},{x:20000,y:0})
     }
    if(keyCode===LEFT_ARROW){
      mouseReleased();
      Matter.Body.applyForce(hero.body,{x:hero.body.position.x,y:hero.body.position.y},{x:-2000,y:0})
     }
    if(keyCode===UP_ARROW){
      mouseReleased();
      Matter.Body.applyForce(hero.body,{x:hero.body.position.x,y:hero.body.position.y},{x:0,y:-2000})
     }
    if(keyCode===DOWN_ARROW){
      mouseReleased();
      Matter.Body.applyForce(hero.body,{x:hero.body.position.x,y:hero.body.position.y},{x:0,y:2000})
     }
    if(keyCode===DOWN_ARROW + keyCode===RIGHT_ARROW){
      mouseReleased();
      Matter.Body.applyForce(hero.body,{x:hero.body.position.x,y:hero.body.position.y},{x:0,y:2000})
     }
  }
  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
       var responseJSON=await response.json()
      var datetime=responseJSON.datetime
       var hours= datetime.slice(11,13)
   
       if(hours>=0600 && hours<=11100){
         bg="gamingbackground2.png"
       bg2="superhero1.png"
       }else{
         bg="gamingbackground1.jpg"
         bg2="superhero2.png"
       }
       backgroundImg=loadImage(bg)
       heroImg=loadImage(bg2)
  console.log(hero, hours)
      
   }

