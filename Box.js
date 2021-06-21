class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(rgb(47, 135, 170));
    rect(0, 0, this.width, this.height);
    pop();
    }else{
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility);
    pop();
    }

  }
}