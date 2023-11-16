let h1_text = document.querySelector("#text");
let p_tag = document.querySelector("p");
let btn = document.querySelector(" #myButton"); 

//p_tag.innerHTML = h1_text; 
btn.addEventListener("click",button_clicked);

function button_clicked()
{
    if(h1_text.textContent == "Hello")
    {
        h1_text.textContent = "Bye";
        h1_text.style.color = "blue";
    } else{
        h1_text.textContent = "Hello";
    }
}