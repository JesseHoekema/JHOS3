function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000);

let isDragging = false;
let startY = 0;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaY = e.clientY - startY;

        if (deltaY < -50) {
            window.location.href = 'login.html'; // Hier kun je de link naar de ontgrendelpagina aanpassen
        }
    }
});
const arrow = document.getElementById('arrow');

function jumpArrow() {
  arrow.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    arrow.style.transform = 'translateY(0)';
  }, 200); // Verkort de tijd naar 0.2 seconden
}

setInterval(jumpArrow, 3100);

document.addEventListener('DOMContentLoaded', function() {
    var clock = document.getElementById('clock');
    var date = document.getElementById('date');

    var monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = monthNames[now.getMonth()]; // Gebruik de afkorting van de maand
        var year = now.getFullYear();

        clock.textContent = hours + ':' + minutes + ':' + seconds;
        date.textContent = day + ' ' + month + ' ' + year;
    }

    updateClock();
    setInterval(updateClock, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    var clock = document.getElementById('clock');
    var date = document.getElementById('date');

    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = monthNames[now.getMonth()];
        var year = now.getFullYear();

        clock.textContent = hours + ':' + minutes + ':' + seconds;
        date.textContent = day + ' ' + month + ' ' + year;
    }

    function loadSettings() {
        var clockColor = localStorage.getItem('clockColor');
        var dateColor = localStorage.getItem('dateColor');

        if (clockColor) {
            clock.style.color = clockColor;
        }

        if (dateColor) {
            date.style.color = dateColor;
        }
    }

    loadSettings();
    updateClock();

    setInterval(updateClock, 1000);
});


