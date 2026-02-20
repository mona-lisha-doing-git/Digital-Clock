let clock = document.getElementById("clock");

function updateClock(){
    let now = new Date();

    // extracting 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10? "0" + hours : hours;
    minutes = minutes < 10? "0" + minutes : minutes;
    seconds = seconds < 10? "0" + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(updateClock, 1000); // runs every 1000ms (1 sec)