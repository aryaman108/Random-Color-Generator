let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let l3=document.querySelector("h3");
    let a=getrandomcolor();
    l3.innerText=a;

    let div=document.querySelector("div");
    div.style.backgroundColor=a;
})

function getrandomcolor(){
    let r=Math.floor(Math.random()*255)+1;
    let g=Math.floor(Math.random()*255)+1;
    let b=Math.floor(Math.random()*255)+1;

    let color=`rgb(${r},${g},${b})`;
    return color;
}

let box=document.querySelector("div");

box.addEventListener("scroll",function(){
    console.log("Mouse nsode box");
})


let inp=document.querySelector("input");
inp.addEventListener("keypress",function(){
    console.log("keypress nsode box",inp);
})