const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


const newYears = '1 Jan 2024';

function countdown() {
    const currentDate = new Date();
    const newYearDate = new Date(newYears);

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600  / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = formatItem(days);
    hoursElement.innerHTML = formatItem(hours);
    minutesElement.innerHTML = formatItem(minutes);
    secondsElement.innerHTML = formatItem(seconds);


    function formatItem(currentTime) {
        return currentTime < 10 ? `0${currentTime}` : currentTime;
    }
}
countdown()

setInterval(countdown , 1000);