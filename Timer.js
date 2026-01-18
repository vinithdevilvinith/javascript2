// const days=document.querySelector("#days")
// const hours=document.querySelector("#hours")
// const minutes=document.querySelector("#minutes")
// const seconds=document.querySelector("#seconds")
// //const mseconds=document.querySelector("#mseconds")

// const currentYear=new Date().getFullYear();
// const newYear=new Date(`January 1 ${currentYear + 1}00:00:00`);

// function updateTime(){
//     const currentDate=new Date();
//     const diff=newYear-currentDate;
//     const d=Math.floor(diff/1000/60/60/24);
//     const h=Math.floor((diff/1000/60/60)%24);
//     const m=Math.floor((diff/1000/60)%60);
//     const s=Math.floor((diff/1000)%60);
//     const ms=Math.floor(diff%1000);

//     days.innerHTML=d<10?"0"+d:d;
//     hours.innerHTML=h<10?"0"+h:h;
//     minutes.innerHTML=m<10?"0"+m:m;
//     seconds.innerHTML=s<10?"0"+s:s;
//     //mseconds.innerHTML=s<10?"0"+ms:ms;

// }
// setInterval(updateTime,1000);

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();
const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0);

function updateTime() {
    const currentDate = new Date();
    const diff = newYear - currentDate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

updateTime(); // first time call
setInterval(updateTime, 1000);
