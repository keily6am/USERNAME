let canvas = documennt.getElementById("canvas");
let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;

canvas.width = WIDTH;
canvas.height = HEIGHT;

let ctx = canvas.getContext("2d");

class Circle{
    constructor(xpos,ypos,radius,color,dx,dy)
    {
        this.xpos = xpos;
        this.ypos = ypos;
        this.rad = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.width = 3;
        this.hit_counter= 0;

    }

    draw(ctx)
    {
        ctx.stokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(this.hit_counter,this.xpos,this.ypos);

        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos,this.rad,0,2*Math.PI,false);
        ctx.stoke();
        ctx.closePath();

    }
}

update()
{
    this.xpos+=this.dx;
    this.ypos+=this.dy;

    //hit the left wall
    if(this.xpos<0 +this.rad && this.dx<0)
    {
        this.dx*=-1;
        this.hit_counter++;
    }
    //hit the right wall
    if(this.xpos>WIDTH - this.rad && this.dx>0)
    {
        this.dx*=-1;
        this.hit_counter++;
    }
    //hit the bottom wall
    if(this.ypos>HEIGHT - this.rad && this.dy>0)
    {
        this.dy*=-1;
        this.hit_counter++;
    }
    //hit the top wall
    if(this.ypos<0 + this.rad && this.dy<0)
    {
        this.dy*= -1;
        this.hit_counter++;
    }
}

let circle1 = new Circle(WIDTH/2,HEIGHT/2,20,"blue", -3,2);
circle1.draw(ctx);

//game loop

function animate(){
    //clear context 
    ctx.clearReact(0,0,WIDTH,HEIGHT);

    //update positions
    circle1.update();

    //draw objects
    circle1.draw(ctx);

    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);