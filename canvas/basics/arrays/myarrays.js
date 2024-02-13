// setup canvas for drawing
let cvs = document.getElementById("canvas");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = cvs.getContext("2d");

class Circle_Outline
{
    constructor(x,y,radius,width,color,text)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.width = width;
        this.color = color;
        this.text = text; 
    }

    draw(ctx)
    {
        ctx.stokeStyle = this.color;
        ctx.lineWidth = this.width;

        ctx.font = "12px Arial";
        ctx.textAlign = "center"; 
        ctx.textBaseline = "middle"; 
        ctx.fillStyle = this.color;
        ctx.fillText = (this.text,this.x,this.y);
        
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius, 0,2*Math.PI,false);
        ctx.stroke();
        ctx.closePath();

    }
}

update()
{
    this.xpos+=this.dx;
    this.ypos+=this.dy;

    //hit the left wall
    if(this.xpos-this.radius<=0)
    {
        this.dx = this.dx*-1;
        this.hit_counter++;
    }
    //hit the right wall
    if(this.xpos+this.radius>=WIDTH)
    {
        this.dx = this.dx*-1;
        this.hit_counter++;
    }
    //hit the bottom wall
    if(this.ypos+this.radius>=HEIGHT)
    {
        this.dy = this.dy*-1;
        this.hit_counter++;
    }
    //hit the top wall
    if(this.ypos+this.radius<=0)
    {
        this.dy = this.dy*-1;
        this.hit_counter++;

    }
}


/*
letcircle1 = new Circle_Outline(WIDTH/2, HEIGHT/2, 50, 5, "blue", "Hello World!");
circle1.draw(ctx);
*/

const array_circles = [];
let n = 5;

for(let i=0; i<n; i++)
{
    let rand_x = Math.random()*WIDTH;
    let rand_y = Math.random()*HEIGHT;
    //console.log(rand_x);
    let circle = new Circle_Outline(rand_x,rand_y,50,5,"black",i);
    //choosing a random x and y 
    //creating a new circle ; starting off at zero 
    //everytime u go thru loop u get a new circle and push thru the array, each circle will have different starting points.
    array_circles.push(circle);

}

for(let i=0; i<array_circles.length; i++) //length= how many times we'll do those functions
{
    array_circles[i].draw(ctx); 
}