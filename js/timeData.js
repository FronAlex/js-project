
function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}


function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = current_datetime.getMonth() + 1;
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());
    var spanJS = document.querySelector('.spanJS');
    var months = { 1: "января", 2: "февраля", 3: "Марта", 4: "апреля", 5: "мая", 6: "июня", 7: "июля", 8: "августа", 9: "сентября", 10: "октября", 11: "ноября", 12: "декабря", };
    spanJS.innerHTML = '';
    spanJS.innerHTML = `${day} ${months[month]} ${year}`

    return hours + ":" + minutes + ":" + seconds;
}


document.querySelector('.timeJS').innerHTML = date_time();

setInterval(function () {
    document.querySelector('.timeJS').innerHTML = date_time();
}, 1000);















