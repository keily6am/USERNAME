l //setup canvas for drawing
let cvs = document.getElementById("canvas");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = canvas.getContext("2d");

class Circle
{
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
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.stoke();
        ctx.closePath();

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
get_x()
{
    return this.x;
}

get_y()
{
    return this.y;
}

get_radius()
{
    return this.radius;
}
set_color(color)
{
    this.color = color;
}
}

let circle1 = new Circle(20,20,20,"black",4,2);
let circle2 = new Circle(WIDTH/2, HEIGHT/2, 300,"black",0,0);

function get_distance(x1,y1,x2,y2)
{
    return Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2,y1,2));
}
//game loop
function animate(){
    //clear context 
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //update positions
    circle1.update();
    circle2.update();

    //check for collisions
    if(get_distance(circle1.get_x(),circle1.get_y(),circle2.get_x(),circle2.get_y()<= circle1.get_rad()+circle2.get_rad()))
    {
        circle1.set_color("red");
        circle2.set_color("red");
    }
    else
    {
        circle1.set_color("black");
        circle2.set_color("black");
    }

    //draw objects
    circle1.draw(ctx);
    circle2.draw(ctx);

    requestAnimationFrame(animate);
}