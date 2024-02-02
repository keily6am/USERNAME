// setup canvas for drawing 
let WIDTH = 800;
let HEIGHT = 600; 

// get access to canvas element
let canvas = document.getElementById("canvas");
canvas.width = WIDTH; 
canvas.height = HEIGHT;
// capital words means it won't change anymore; written once and will not change the whole game
//canvas.style.background = "blue"; 

// ctx is what we will call when we want to draw to canvas 
let ctx = canvas.getContext("2d");

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
        ctx.fillRect(this.xpos, this.ypos, this.width, this.height );
    }
}