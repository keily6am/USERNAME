let sum = 0; 

for(let i = 1; i<= 100; i++)
{
    sum = sum + i ; 
}

//alert("Answer = " + sum ); 
//console.log(" Answer = " + sum);

//answer will refer to the p tag in the html document (down below)
let answer = document.querySelector('p');
//change the interHTML of the <p>
answer.innerHTML = " Answer = " + sum;

// change the css of the <p>
answer.style.color ="red";
answer.style.fontSize = "40px";