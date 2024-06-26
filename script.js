function updateTime() {
    const timeElement = document.getElementById('time');
    const timezone = document.getElementById('timezone').value;
    const now = new Date();

    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat([], options);
    const formattedTime = formatter.format(now);

    timeElement.textContent = formattedTime;
}

document.getElementById('timezone').addEventListener('change', updateTime);

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
