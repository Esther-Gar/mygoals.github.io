function timeDayUpdate() {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = weekDays[currentDate.getUTCDay()];
    const currentTimeUTC = currentDate.getTime();

    document.getElementById("currentDay").textContent = currentDay;
    document.getElementById("currentTimeUTC").textContent = currentTimeUTC;
}

timeDayUpdate();
setInterval(timeDayUpdate, 500);