class Car{
    constructor(x,y,image){
        var options={
            'isStatic':false,
            'friction':0.4,
            'density':3
           
        }
        this.body = Bodies.circle(100,360,10,options);
      this.image=image
      World.add(world, this.body);
      player.x=this.body.position.x;
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("red");
     image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
    