// setup canvas for drawing 
let WIDTH = 800;
let HEIGHT = 600; 

// get access to canvas element
let cvs = document.getElementById("canvas");
cvs.width = WIDTH; 
cvs.height = HEIGHT;
// capital words means it won't change anymore; written once and will not change the whole game
//canvas.style.background = "blue"; 

// ctx is what we will call when we want to draw to canvas 
let ctx = cvs.getContext("2d");

class Rectangle
{
    constructor(xpos,ypos,width,height,color)
    {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.color = color;
    
    }

    draw(ctx)
    {
        ctx.fillstyle = this.color; 
        ctx.fillRect(this.xpos,this.ypos,this.width,this.height);
    }
}

class Circle
{
    constructor(xpos,ypos,radius, color)
    {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx)
    {
        ctx.fillstyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI,false);
        // in raidans when drawing in javascript, false/true = counterclockwise or clockwise. 
        ctx.fill();
        ctx.closePath();
    }
}

//create a rectangle with the given info.
rect1 = new Rectangle(0,0, 100, 100, "red");
rect1.draw(ctx); // pass in the context 
rect2 = new Rectangle( 200, 200, 50, 10, "white");
rect2.draw(ctx); 

let circle1 = new Circle(WIDTH/2,HEIGHT/2,20,"green");
