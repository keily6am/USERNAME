//canvas initalization
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const WIDTH = 1500;
const HEIGHT =500;

cvs.width = WIDTH;
cvs.height = HEIGHT;

class Circle{
    constructor(xpos, ypos, radius, color, dx, dy)
    {
        this.xpos = xpos;
        this.ypos = ypos;
        this.rad = radius;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        this.width = 3;
        this.hit_counter = 0;
    }

    draw(ctx)
    {
        ctx.fillStyle = "purple";
        ctx.lineWidth = this.width;
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(this.hit_counter, this.xpos,this.ypos);
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.rad, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();

    }

    update()
    {
        this.xpos += this.dx;
        this.ypos += this.dy;
    }

    // Here I'll check for collisions with the walls
    if (this.xpos + this.rad >= WIDTH || this.xpos - this.rad<=0;
    {
        this.dx= -this.dx;
    }

    if(this.ypos + this.rad>=HEIGHT|| this.ypos-this.rad<=0)
    {
        this.dy=-this.dy;
    }
}

get_x()
{
    return this.xpos;
}

set_dx(dx)
{
    this.dx = dx;
}

get_y()
{
    return this.ypos;
}

set_dy(dy)
{
    this.dy = dy;
}

get_rad()
{
    return this.rad;
}

set_color(color)
{
    this.color = color;
}