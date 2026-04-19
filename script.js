const words = ["Graphic Designer","UI Designer","Content Creator","Visual Artist"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
document.getElementById("typing").textContent =
currentWord.substring(0,j--);
}
else{
document.getElementById("typing").textContent =
currentWord.substring(0,j++);
}

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,100);
return;
}

if(isDeleting && j === 0){
isDeleting=false;
i++;
if(i===words.length){
i=0;
}
}

setTimeout(type,110);
}

type();


/* bubble generator */

const bubbles = document.querySelector(".bubbles");

for(let i=0;i<40;i++){

let bubble = document.createElement("span");

let size = Math.random()*60;

bubble.style.width = 20+size+"px";
bubble.style.height = 20+size+"px";
bubble.style.left = Math.random()*100+"%";
bubble.style.animationDuration = 10+Math.random()*20+"s";

bubbles.appendChild(bubble);

}