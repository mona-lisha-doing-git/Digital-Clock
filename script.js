let clock = document.getElementById("clock");
let toggleBtn = document.getElementById("toggleBtn");

// true = 24-hour, false =. 12-hour
let is24Hour = true;

function updateClock(){
    let now = new Date();

    // extracting 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "";

    if(!is24Hour){
        ampm = hours >= 12? " PM" : " AM";
        hours = hours % 12;
        hours = hours? hours:12;
    }

    hours = hours < 10? "0" + hours : hours;
    minutes = minutes < 10? "0" + minutes : minutes;
    seconds = seconds < 10? "0" + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}${ampm}`;
}

updateClock();

setInterval(updateClock, 1000); // runs every 1000ms (1 sec)

// Toggle button
toggleBtn.addEventListener("click", function(){
    is24Hour = !is24Hour;
    if(is24Hour){
        toggleBtn.textContent = "12-Hour"
    }else{
        toggleBtn.textContent = "24-Hour"
    }
    updateClock();
});