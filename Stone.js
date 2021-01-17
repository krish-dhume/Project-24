class Stone{
    constructor(x,y,width,height){
        var options={
            friction:3.5,
            restitution:1,
            density:1.7
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myworld,this.body)
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        fill("black")
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}