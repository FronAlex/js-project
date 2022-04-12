
function format(value) {
    if (value < 10) {
        value = '0'
        return value;
    };
};

function time() {
    var datetime = new Date();
    var day = format(datetime.getDate());
    var month = datetime.getMonth() + 1;
    var year = datetime.getFullYear();
    var hours = format(datetime.getHours());
    var minutes = format(datetime.getMinutes());
    var seconds = format(datetime.getSeconds());
    var spanJS = document.querySelector('.spanJS');
    var months = { 1: "января", 2: "февраля", 3: "Марта", 4: "апреля", 5: "мая", 6: "июня", 7: "июля", 8: "августа", 9: "сентября", 10: "октября", 11: "ноября", 12: "декабря", };
    spanJS.innerHTML = '';
    spanJS.innerHTML = `${day} ${months[month]} ${year}`

    return hours + ":" + minutes + ":" + seconds;
};


document.querySelector('.timeJS').innerHTML = time();

setInterval(function () {
    document.querySelector('.timeJS').innerHTML = time();
}, 1000);






