document.addEventListener('DOMContentLoaded', function() {
    var clearButton = document.getElementById('clear-local-storage');

    function clearLocalStorage() {
        var confirmation = confirm('Weet je zeker dat je alle gegevens wilt wissen?');

        if (confirmation) {
            localStorage.clear();
            alert('Alle gegevens zijn gewist.');
        }
    }

    clearButton.addEventListener('click', clearLocalStorage);
});
