// setup canvas for drawing
let cvs = document.getElementById("canvas");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = cvs.getContext("2d");

class Circle_Outline
{
    constructor(x,y,raidus,width,color,text)
    {
        this.x = x;
        this.y = y;
        this.raidus = raidus;
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
        ctx.arc(this.x,this.y,this.raidus, 0,2*Math.PI, false);
        ctx.stoke();
        ctx.closePath();

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
