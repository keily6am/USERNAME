// setup canvas for drawing
let cvs = document.getElementById("Canvas");
let WIDTH = 1200;
let HEIGHT = 550;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = cvs.getContext("2d");

class Base
{
    constructor(xpos,ypos,radius,color)
    {
        this.x = xpos;
        this.y = ypos;
        this.rad = radius;
        this.color = color;
        this.width = 3;

         //turret angle.length and color

         this.angle = 30;
         this.turret_length = 50;
         this.turret_color = "black";

    }
    
    draw(ctx)
    {
        ctx.fillStyle = this.color;

        //draw the base(half circle: color filled in)
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rad,0,Math.PI, false);
        ctx.fill();
        ctx.closePath();

        //draw turrent from center of circle to a point
        ctx.strokeStyle = this.turrent_color;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(this.x+this.turret_length*Math.cos(this.angle*Math.PI/180),
                    this.y-this.turret_length*Math.sin(this.angle*Math.PI/180));
        ctx.stroke();
        ctx.closePath();


    }

    rotate_turret_left()
    {
        if(this.angle<=179)
        this.angle = this.angle + 1;
    }

    rotate_turret_right()
    {
        this.angle = this.angle - 1;
    }

}

let myBase = new Base(WIDTH/2, HEIGHT- 10, 40, "red");

//game loop
function animate()
{
    //clear context
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //update positions
}