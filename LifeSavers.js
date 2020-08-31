class LifeSaver {
    constructor(x,y,radius, angle, ){
        var options = {
            isStaic : false
        }
            this.body = Bodies.circle(x,y,radius/2,options)
            this.radius = radius/2
            World.add(world,this.body)
    }
    display(){
            var angle = this.body.angle
            push()
            translate (this.body.position.x,this.body.position.y)
            rotate (angle)
            ellipseMode(RADIUS)
            fill(random(0,255),random(0,255),random(0,255))
            ellipse(0,0,this.radius,this.radius)
            pop()
    }
}