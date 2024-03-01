// setup canvas for drawing
let cvs = document.getElementById("Canvas");
let WIDTH = 1200;
let HEIGHT = 550;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = cvs.getContext("2d");

//event listeners
cvs.setAttribute('tabindex',0);
cvs.focus();
cvs.addEventListener("keydown",bundle_keydown);

function handle_keydown(event)
{
    if(event.key == "ArrowRight")
    {
        myBase.rotate_turret_right();
    }
    if(event.key == "ArrowLeft")
    {
        myBase.rotate_turret_left();
    }

    //console.log(event);
    if(event.key == " ")
    {
        let x = myBase.get_turret_end_x();
        let y = myBase.get_turret_end_y();
        let angle = myBase.get_angle();
        let dx = 1*Math.cos(angle*Math.PI/180);
        let dy = 1*Math.sin(angle*Math.PI/180);

        let bullet1= new Bullet(x,y,3,"blue",dx,-1*dy);
        bullets.push(bullet1)
    }
}

class Base
{
    class Bullet
    {
        constructor(xpos,ypos,radius,color,dx,dy){
            this.x =xpos;
            this.y = ypos;
            this.rad = radius;
            this.color = color;
            this.dx = dx;
            this.dy= dy;


        }

        draw(ctx){
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.rad,0,2*Math.PI, false);
            ctx.fill();
            ctx.closePath();

        }

        update()
        {
            this.x = this.x + this.dx;
            this.y = this.y + this.dy;
        }
    }
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
         this.turret_end_x =0;
         this.turret_end_y =0;

    }
    
    draw(ctx)
    {
        ctx.fillStyle = this.color;

        //draw the base(half circle: color filled in)
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rad,0,Math.PI, false);
        ctx.fill();
        ctx.closePath();

        //calculate and save turret and position
        this.turret_end_x =this.x+this.turret_length*Math.cos(this.angle*Math.PI/180);
        this.turret_end_y = this.y-this.turret_length*Math.sin(this.angle*Math.PI/180)
        //draw turrent from center of circle to a point
        ctx.strokeStyle = this.turrent_color;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(this.turret_end_x,this.turret_end_y);
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
        this.angle = this.angle - 5;
    }

    get.turret_end_x()
    {
        return this.turret_end_x;
    }

    get.turret_end_y()
    {
        return this.
    }

}

let myBase = new Base(WIDTH/2, HEIGHT- 10, 40, "red");
const bullets =[];


//game loop
function animate()
{
    //clear context
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //update positions
    for(let i=0; i<bullets.length;i++)
    {
        bullets[i].update(ctx);
    }
    //check for collisions

    //draw object
    myBase.draw(ctx);
    for(let i=0; i<bullets.length;i++)
    {
        bullets[i].draw(ctx);
    }

    requestAnimationFrame(animate);
}
animate();