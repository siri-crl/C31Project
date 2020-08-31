class Plinko{
    constructor(x, y, radius, angle) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius/2;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(0);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}