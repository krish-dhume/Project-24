class Hammer{
    constructor(x,y,height,angle){
        var options={
            restitution:0.5,
            friction:4,
            density:2
            
        }
        this.body=Bodies.rectangle(x,y,20,height,options)
        World.add(myworld,this.body)
        this.height=height;
        this.width=210;
        
    }
    display(){
       var angle=this.body.angle;
       var pos=this.body.position;
       pos.x=mouseX;
       pos.y=mouseY;
       push()
       translate(this.body.position.x,this.body.position.y)
       rotate(angle)
       fill("orange")
       stroke("white")
       strokeWeight(4)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
    }
}