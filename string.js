class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.string = Constraint.create(options);
        World.add(world, this.string);

    }

    fly(){
        this.string.bodyA = null;
    }

    display(){
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push() 
            stroke(100,229,11); 
            strokeWeight (8)
            //line(pointA.x +20, pointA.y, pointB.x +20, pointB.y);
            pop() 
        }

    }
    
}