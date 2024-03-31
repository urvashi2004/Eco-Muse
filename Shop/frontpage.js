const menuicon=document.querySelector('#menu-icon');
const navbar=document.querySelector(".navbar");
const navbg=document.querySelector(".nav-bg");

menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle("active");
    navbg.classList.toggle("active");
})

document.getElementById("buyplants").addEventListener("click",tobuyplants);

function tobuyplants(){
    window.location.assign("acc.html");
}

document.getElementById("buyplants2").addEventListener("click",tobuyplants);

