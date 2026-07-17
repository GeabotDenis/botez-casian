const eventDate = new Date("October 16, 2026 13:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(function(){

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

if(distance>0){

countdown.innerHTML=
`
<div>${days} zile</div>
<div>${hours} ore</div>
<div>${minutes} minute</div>
<div>${seconds} secunde</div>
`;

}else{

countdown.innerHTML="🤍 A sosit ziua cea mare!";

}

},1000);
