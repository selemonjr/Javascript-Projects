const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const newYear = new Date("December 31, 2021 00:00:00");
function timer() {
    const currentTime = new Date();
    const diff = newYear - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60) % 60;
    const s = Math.floor(diff/1000) % 60;
    days.textContent = d < 10 ? "0" + d : d;
    hours.textContent = h < 10 ? "0" + h : h;
    minutes.textContent = m < 10 ? "0" + m : m;
    seconds.textContent = s < 10 ? "0" + s : s;
    setInterval(timer,1000); 
}
timer()