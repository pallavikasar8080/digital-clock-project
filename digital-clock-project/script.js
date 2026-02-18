// 1️⃣ LIVE DIGITAL CLOCK
function updateLiveClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("liveClock").innerText =
        `${hours}:${minutes}:${seconds}`;
}

// 2️⃣ ELAPSED TIME SINCE FEB 17, 2026
function updateElapsed() {
    const startDate = new Date("February 17, 2026 00:00:00");
    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("elapsed").innerText =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// 3️⃣ COUNTDOWN TO 1 JANUARY 2027
function updateCountdown() {
    const now = new Date();
    const targetDate = new Date("January 1, 2027 00:00:00");

    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").innerText =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Run all every second
setInterval(updateLiveClock, 1000);
setInterval(updateElapsed, 1000);
setInterval(updateCountdown, 1000);

updateLiveClock();
updateElapsed();
updateCountdown();
