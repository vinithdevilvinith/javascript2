
let clockDiv = document.querySelector(".clock");
clockDiv.style.fontsize = "30px"
function clock() {
    const date = new Date();


const time=date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + " : " + date.getMilliseconds();
    const div = document.createElement("div");
    clockDiv.innerHTML = time;
}
setInterval(clock,1000) 
