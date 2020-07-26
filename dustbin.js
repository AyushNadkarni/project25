class Dustbin{

    constructor(x,y,width,height){
        var options= {
            "isStatic":true,
            "restitution":0.5,
            "friction":1.0,
            "density":1.2
         }

         this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.body = loadImage("sprites/dustbingreen.png")
        this.width = width; 
        this.height = height; 
    }
    
    display(){

    rectMode(CENTER)

    rect(this.body.position.x, this.body.position.y, this.width, this.height);
}
}
