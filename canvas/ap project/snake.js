// Canvas initialization
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const WIDTH = 1500;
const HEIGHT = 500;


cvs.width = WIDTH;
cvs.height = HEIGHT;


class Circle {
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


        ctx.fillText(this.hit_counter, this.xpos, this.ypos);
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.rad, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }


    update() 
    {
        this.xpos += this.dx;
        this.ypos += this.dy;


        // Check for collisions with the walls
        if (this.xpos + this.rad >= WIDTH || this.xpos - this.rad <= 0) {
            this.dx = -this.dx;
        }


        if (this.ypos + this.rad >= HEIGHT || this.ypos - this.rad <= 0) {
            this.dy = -this.dy;
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
}


class Square {
    constructor(x, y, length, color, dx, dy)
    {
        this.xpos = x;
        this.ypos = y;
        this.length = length;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        this.width = 3;
        this.hit_counter = 0;
    }


    draw(ctx) 
    {
        ctx.fillStyle = "white";
        ctx.lineWidth = this.width;
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";


        ctx.fillText(this.hit_counter, this.xpos, this.ypos);
        ctx.beginPath();
        ctx.rect(this.xpos - this.length / 2, this.ypos - this.length / 2, this.length, this.length);
        ctx.fill();
        ctx.closePath();
    }


    update() 
    {
        this.xpos += this.dx;
        this.ypos += this.dy;


        // Check for collisions with the walls
        if (this.xpos + this.length >= WIDTH || this.xpos - this.length <= 0) {
            this.dx = -this.dx;
        }


        if (this.ypos + this.length >= HEIGHT || this.ypos - this.length <= 0) {
            this.dy = -this.dy;
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




    set_color(color) 
    {
        this.color = color;
    }
}






//distance formula
function get_distance(x1, y1, x2, y2) 
{
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}


let square1 = new Square(WIDTH / 2, HEIGHT / 2, 40, "black", 0, 0); // Centered initial position
let score = 0;






let circles = [];
let n = 10;
for (let i = 0; i < n; i++) 
{
    let x = Math.random() * WIDTH;
    let y = Math.random() * HEIGHT;
    let color = "black";
    let radius = 10;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    let circle = new Circle(x, y, radius, color, dx, dy);
    circles.push(circle);
}






const countdownEl = document.getElementById('countdown');
let time = 10;




//start game loop
animate();
setInterval(updateCountdown, 1000);


// game loop
function animate() 
{
    // clear context
    ctx.clearRect(0, 0, WIDTH, HEIGHT);


    if (time <= 0) 
    {
        return;
    }
    // update positions
    for (let i = 0; i < circles.length; i++) 
    {
        circles[i].update();
    }


    // drawing squares
    square1.draw(ctx);
    // check for collisions with other circles
    for (let j = circles.length - 1; j >= 0; j--) 
    {
        let distance = get_distance(square1.get_x(), square1.get_y(), circles[j].get_x(), circles[j].get_y());
        let min_distance = square1.length + circles[j].rad;
        if (distance <= min_distance) 
        {
            circles.splice(j, 1);
            score++;
            square1.length = square1.length - 1;
        }
    }


    // Check if all circles have been collected
    let allCollected = circles.every(circle => circle.hit_counter > 0);




    // request next frame
    requestAnimationFrame(animate);


    // Display score


    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Score: " + score, 100, 40);




    for (let i = 0; i < circles.length; i++) 
    {
        circles[i].draw(ctx);
    }


    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Timer:" + time, 100, 90);




    square1.update();


}


animate();


cvs.setAttribute('tabindex', 0);
cvs.focus();


document.addEventListener("keydown", handle_keydown);
document.addEventListener("keyup", handle_keyup);


function handle_keydown(event) 
{
    if (event.key == "ArrowRight")
    {
        square1.set_dx(4);
    } 
    else if (event.key == "ArrowLeft") 
    {
        square1.set_dx(-4);
    } 
    else if (event.key == "ArrowUp") 
    {
        square1.set_dy(-4);
    } 
    else if (event.key == "ArrowDown") 
    {
        square1.set_dy(4);
    }
}


function handle_keyup(event) 
{
    if (event.key == "ArrowRight" || event.key == "ArrowLeft") 
    {
        square1.set_dx(0);
    } 
    else if (event.key == "ArrowUp" || event.key == "ArrowDown") 
    {
        square1.set_dy(0);
    }
}


function updateCountdown() 
{
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;




    if (time < 0) 
    {
        time = 0;
    }
}
