
const dayelem = document.getElementById("days");
const houelem = document.getElementById("hours");
const minselem = document.getElementById("mins");
const secondselem = document.getElementById("seconds");
const newYears = "1 Jan 2022";

function work(){
     const newYearsdate = new Date(newYears);
     const currentDate = new Date();
     const totalSeconds = (newYearsdate-currentDate)/1000;
     const day = Math.floor(totalSeconds/3600/24);
     const hours = Math.floor(totalSeconds/3600)%24;
     const mins = Math.floor(totalSeconds/60)%60;
     const seconds = Math.floor(totalSeconds)%60;
     dayelem.innerHTML = day;
     houelem.innerHTML = coperate(hours);
     minselem.innerHTML = coperate(mins);
     secondselem.innerHTML = coperate(seconds);

}
function coperate(time){
    return time < 10 ? `0${time}`: time;
} 
work();
setInterval(work,1000);