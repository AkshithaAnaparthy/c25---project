class Paper {
  constructor(x, y,radius) {
    var options = {
       
        restitution:0.9,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
   this.radius=radius;
   this.image = loadImage("Paper.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
var angle= this.body.angle
    push();
    //translate(pos.x,pos.y);
    //rotate(angle)
    fill("purple");
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius)
    pop();
  }
};