var endDate = new Date('Jan 1, 2025 00:00:00').getTime();

var countDownTimer = setInterval(function () {
    var now = new Date().getTime();
    var remainingTime = endDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    daysLeft = Math.trunc(remainingTime / day);
    hoursLeft = Math.trunc((remainingTime % day) / hour);
    minutesLeft = Math.trunc((remainingTime % hour) / minute);
    secondsLeft = Math.trunc((remainingTime % minute) / second);

    document.getElementById('days').innerHTML = daysLeft;
    document.getElementById('hours').innerHTML = hoursLeft;
    document.getElementById('minutes').innerHTML = minutesLeft;
    document.getElementById('seconds').innerHTML = secondsLeft;

    if (remainingTime <= 0) {
        clearInterval(countDownTimer);
    }

}, 1000);


