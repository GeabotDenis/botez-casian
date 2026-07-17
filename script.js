const seal = document.getElementById("seal");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

seal.addEventListener("click", () => {

seal.classList.add("hide");

setTimeout(() => {
flap.classList.add("open");
},300);

setTimeout(() => {
letter.classList.add("show");
},900);

setTimeout(() => {
intro.style.display="none";
site.classList.remove("hidden");
window.scrollTo(0,0);
},2200);

});

const eventDate = new Date("2026-10-16T13:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(() => {

const now = new Date().getTime();

const distance = eventDate-now;

if(distance<0){

countdown.innerHTML="<h2>A sosit ziua cea mare! 🤍</h2>";

return;

}

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
const seconds=Math.floor((distance%(1000*60))/1000);

countdown.innerHTML=`
<div>${days}<br><small>Zile</small></div>
<div>${hours}<br><small>Ore</small></div>
<div>${minutes}<br><small>Minute</small></div>
<div>${seconds}<br><small>Secunde</small></div>
`;

},1000);
