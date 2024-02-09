let cvs = documennt.getElementById("canvas");
let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = canvas.getContext("2d");

class Circle{
    constructor(xpos,ypos,radius,color,dx,dy)
    {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.width = 10;
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
        ctx.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI,false);
        ctx.stoke();
        ctx.closePath();

    }
}

update()
{
    this.xpos = this.xpos + this.dx;

    // hit the left wall
    if(this.xpos-this.radius<=0)
        this.dx = this.dx*-1;

    // hit the right wall
    if(this.xpos+this.radius>=WIDTH)
        this.dx = this.dx*-1
}

let circle1 = new Circle(WIDTH/2,HEIGHT/2,50,"blue", -3,2);
circle1.draw(ctx);

//game loop

function animate()
{
    //clear context 
    ctx.clearReact(0,0,WIDTH,HEIGHT);

    //update positions
    circle1.update();

    //draw objects
    circle1.draw(ctx);

    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);