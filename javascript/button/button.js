let h1_text = document.querySelector("#text");
let p_tag = document.querySelector("p");
let btn = document.querySelector(" #myButton"); 
let button = document.querySelector(" #greenbut"); 
let buut = document.querySelector(" #bluebut"); 

//p_tag.innerHTML = h1_text; 
btn.addEventListener("click",btn_clicked);

function btn_clicked()
{
    if(h1_text.textContent == "Hello")
    {
        h1_text.textContent = "Byee";
        h1_text.style.color = "red";
    } else{
        h1_text.textContent = "Hello";
        h1_text.style.color = "white";
    }
}
button.addEventListener("click",button_clicked);
function button_clicked()
{
    if(h1_text.textContent == "Hello")
    {
        h1_text.textContent = "Byeee";
        h1_text.style.color = "green";
    } else{
        h1_text.textContent = "Hello";
        h1_text.style.color = "white";
    }
}
buut.addEventListener("click",buut_clicked);
function buut_clicked()
{
    if(h1_text.textContent == "Hello")
    {
        h1_text.textContent = "Bye";
        h1_text.style.color = "blue";
    } else{
        h1_text.textContent = "Hello";
        h1_text.style.color = "white";
    }
}