class bob{
    constructor(x,y){
    var options = {
     
        'restitution':1.0,
        'friction':0.2,
        'density':0.6
      
    }
    this.body = Bodies.circle(x,y,55,options);
  
    World.add(world,this.body);

    }

    display(){
    var pos = this.body.position;
    fill(250,0,250)
    ellipseMode(RADIUS);
  ellipse(pos.x, pos.y,50,50);
    }

}