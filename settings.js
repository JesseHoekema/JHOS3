document.addEventListener('DOMContentLoaded', function() {
    var clockColorInput = document.getElementById('clock-color');
    var dateColorInput = document.getElementById('date-color');
    var saveButton = document.getElementById('save-settings');

    function saveSettings() {
        var newClockColor = clockColorInput.value;
        var newDateColor = dateColorInput.value;

        localStorage.setItem('clockColor', newClockColor);
        localStorage.setItem('dateColor', newDateColor);
    }

    saveButton.addEventListener('click', saveSettings);
});
