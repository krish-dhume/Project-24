class Rubber{
    constructor(x,y,radius){
        var options={
            friction:3.1,
            restitution:0.3,
            density:1
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(myworld,this.body)
        this.radius=radius;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        fill("blue");
        stroke("black");
        strokeWeight(3)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius);
        pop()
    }
}