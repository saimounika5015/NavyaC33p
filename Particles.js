class Particle{

    constructor(x,y){

        this.body = Bodies.circle(x,y,7, {restitution:0.8, friction:0.3,density:1.0})
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world,this.body);
    
    
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        ellipse(pos.x, pos.y, 14,14);


    }



}