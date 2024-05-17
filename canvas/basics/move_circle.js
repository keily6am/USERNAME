let cvs = document.getElementById("canvas");
let HEIGHT = window.innerHeight;
let WIDTH = window.innerWidth;

cvs.width = WIDTH;
cvs.height = HEIGHT;

let ctx = cvs.getContext("2d");

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
        if(this.rad>5){
            this.rad-=5;
        }
    }
    //hit the right wall
    if(this.x - this.radius <= 0)
    {
        this.dx = this.dx * -1;
        this.hit_counter++;
        if(this.rad>5){
            this.rad-=5;
        }
    }
    //hit the bottom wall
    if(this.y + this.radius >= HEIGHT)
    {
        this.dy = this.dy * -1;
        this.hit_counter++;
        if(this.rad>5){
            this.rad-=5;
        }
    }
    //hit the top wall
    if(this.y + this.radius <=0)
    {
        this.dy = this.dy * -1;
        this.hit_counter++;
        if(this.rad>5){
            this.rad-=5;
        }
    }
}
}
function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color ="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];}
        return color;
}

let circle = [];
let n = 10;
for(let i=0;i<n;i++){
    let x=Math.random()*WIDTH;
    let y=Math.random()*HEIGHT;
    let radius=Math.random()*50+10;
    let rand_color=getRandomColor();
    let dx=(Math.random()-0.5)*5;
    let circle= new Circle(x,y,radius,rand_color,dx,dy);
    circles.push(circle);

}
let circle1 = new Circle(WIDTH / 2,HEIGHT / 2, 50, "blue", -3, 2);
circle1.draw(ctx);

//game loop

function animate(){
    //clear context 
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //update positions
    for(let i=0;i<circles.length;i++){
        let circle=circles[i];
        circle.update();
        circle.draw(ctx);}

    //draw objects
    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);