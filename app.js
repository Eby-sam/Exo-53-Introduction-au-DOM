let para = document.getElementsByTagName('p');
let span = document.getElementsByTagName('span');
let a = 0;
let b = 0;
let anime = document.getElementsByClassName('anime');
let linkOne = document.getElementById('linkOne');
let linkTwo = document.getElementById('linkTwo');
let linkThree = document.getElementById('linkThree');
let linkFour = document.getElementById('linkFour');
let linkFive = document.getElementById('linkFive');
let para2 = document.getElementById('para2');
let i = 0;

while (i<para.length){
    para[i].style.color = "blue";
    para[i].style.width = "2.5rem";
    i++;
}

while (a<span.length){

    span[a].style.backgroundColor = "white";
    span[a].dir = "rtl";
    a++;
}

while (b<anime.length){
    anime[b].style.animation = "taille";
    anime[b].style.animationDuration = "5s";
    b++;
}

linkOne.innerText = "lien 1";
linkOne.href = "#";

linkTwo.innerText = "lien 2";
linkTwo.href = "#";

linkThree.innerText = "lien 3";
linkThree.href = "#";

linkFour.innerText = "lien 4";
linkFour.href = "#";

linkFive.innerText = "lien 5";
linkFive.href = "#";

para2.innerText = "re-hello :) ";