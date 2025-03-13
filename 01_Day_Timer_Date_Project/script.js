function timeDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = now.getHours() > 12 ? 'PM' : 'AM';

    function findHours() {
        if (hours < 10) {
            return `0${hours}`;
        } else {
            return `${hours}`;
        }
    }
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const NowDate = now.toLocaleDateString(undefined, options)
    const timeAll = `${findHours()}:${minutes}:${seconds} ${ampm}`;

    // Time
    timeElement.textContent = timeAll
    // Date
    dateElement.textContent = NowDate

}
setInterval(timeDate, 1000)

timeDate();