class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var option = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Rope = Constraint.create(option)
        World.add(World, this.rope)
    
    }
    }