class ground{
    constructor()
    {
    var options = {
        isStatic:true
    }    

    this.body = Bodies.rectangle(450,100,750,20,options);
    this.width = 600;
    this.height = 50;
    World.add(world,this.body);

    }
    
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("grey");
    rect(pos.x,pos.y,this.width,this.height);

    }
   
}
