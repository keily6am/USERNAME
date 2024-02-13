let cvs = documennt.getElementById("canvas");
let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = cvs.getContext("2d");

class Circle{
    constructor(x,y,radius,color,dx,dy)
    {
        this.x = x;
        this.y = y;
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

        ctx.fillText(this.hit_counter,this.x,this.y);
        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos,this.rad,0,Math.PI*2,false);
        ctx.stoke();
        ctx.closePath();

    }
}

update()
{
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

    //hit the left wall
    if(this.x + this.radius >= WIDTH)
    {
        this.dx = this.dx * -1;
        this.hit_counter++;
    }
    //hit the right wall
    if(this.x - this.radius <= 0)
    {
        this.dx = this.dx * -1;
        this.hit_counter++;
    }
    //hit the bottom wall
    if(this.y + this.radius >= HEIGHT)
    {
        this.dy = this.dy * -1;
        this.hit_counter++;
    }
    //hit the top wall
    if(this.y + this.radius <=0)
    {
        this.dy = this.dy * -1;
        this.hit_counter++;
    }
}

let circle1 = new Circle(WIDTH / 2,HEIGHT / 2, 50, "blue", -3, 2);
circle1.draw(ctx);

//game loop

function animate(){
    //clear context 
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //update positions
    circle1.update();

    //draw objects
    circle1.draw(ctx);

    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);