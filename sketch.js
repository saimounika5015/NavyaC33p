const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var plinko;
var division;
var wall1, wall2;

var score = 0;
var particle;
var turn = 0;

var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight = 300;

var division1 = 500;
var division2 = 200;
var division3 = 100;
var division4 = 200;
var division5 = 500;

var PLAY = 0;
var END = 1;
var gamestate = PLAY
var count=0;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,590,400,30)
  wall1 = new Divisions(400,145,5,200)
  wall2 = new Divisions(0,145,5,200)


  for (var k = 0; k <=width; k = k + 80) { 

    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
  }

  for (var j = 50; j <=width-50; j=j+50) { 
    plinkos.push(new Plinko(j,50)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,120)); 
  }

  for (var j = 50; j <=width-50; j=j+50) { 
    plinkos.push(new Plinko(j,190)); 
  }

  
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,260)); 
  }



}


function draw() {
  background(0); 

  Engine.update(engine);
 
  ground.display();

  //score = division1+division2+division3+division4+division5+score
  
  if(particle!=null){
    particle.display();
    var pos = particle.body.position;
    if(pos.y>500){

      if(pos.x<80){
        score+=500;
      // division1=500;
        particle=null;

        if(count>=5){
          gamestate = END;
        }
      }
      else if(pos.x>81 && pos.x<160){
        score+=200
        //division2+=200;
        particle = null;

        if(count>=5){
          gamestate = END;
        }
      }

      else if(pos.x>161 && pos.x<240){
        score+=100
        //division3+=100;
        particle = null;

        if(count>=5){
          gamestate = END;
        }
      }

      else if(pos.x>241 && pos.x<320){
        score+=200
        //division4+=200;
        particle = null;

        if(count>=5){
          gamestate = END;
        }
      }

      else if(pos.x>321 && pos.x<400){
        score+=500
        //division5+=500;
        particle = null;

        if(turn>=5){
          gamestate = END;
        }
      }
    }
  }

  if (gamestate === END){
    textSize(20);
    text("GAME OVER", 160, 280);
  }
 /* if(frameCount%60===0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))

  }*/

  for (var i = 0; i < divisions.length; i++) { 
    divisions[i].display(); 
  } 
  
  for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display(); 
  } 

  
/*
  for (var j = 0; j<particles.length;j++ ){
    particles[j].display();
  }*/

  //drawSprites();

  text(mouseX + ", "+mouseY, mouseX, mouseY)
  textSize(16)
  text(division1, 30,330);
  text(division2, 110,330)
  text(division3, 190,330)
  text(division4, 270,330)
  text(division5, 350,330)
  textSize(20)
  text("Score: "+score, 5, 25);
  
}

function mousePressed(){

  if(gamestate!==END){
   count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}