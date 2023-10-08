document.addEventListener('DOMContentLoaded', function() {
    const settingsPage = `
        <h1>Instellingen</h1>
        <label for="image-url">Afbeelding URL:</label>
        <input type="text" id="image-url">
        <button onclick="saveSettings()">Opslaan</button>
    `;

    const mainPage = `
        <h1>Instellingen</h1>
        <div class="background"></div>
    `;

    const saveSettings = function() {
        const imageUrl = document.getElementById('image-url').value;
        localStorage.setItem('background-image-url', imageUrl);
        alert('Instellingen opgeslagen!');
        loadMainPage();
    };

    const loadMainPage = function() {
        const imageUrl = localStorage.getItem('background-image-url');
        const backgroundDiv = document.querySelector('.background');
        if (imageUrl) {
            backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
        } else {
            backgroundDiv.style.backgroundImage = 'none';
        }
    };

    document.body.innerHTML = settingsPage;

    window.saveSettings = saveSettings;
    window.loadMainPage = loadMainPage;
});
