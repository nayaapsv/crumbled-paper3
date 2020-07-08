class launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
             pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display(){
        if (this.launch.bodyA){

        
        var bodyA1 = this.launch.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
    line(bodyA1.x,bodyA1.y,pointB.x,pointB.y)
        }
    }
    fly(){
    this.launch.bodyA=null;
    }
    
}