// Functie om een bestand te uploaden naar lokale opslag
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Selecteer een bestand om te uploaden.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const fileData = event.target.result;
        const fileName = file.name;

        // Opslaan in lokale opslag
        localStorage.setItem(fileName, fileData);

        // Vernieuw de lijst met bestanden
        displayFileList();
    };

    reader.readAsDataURL(file);
}

// Functie om de lijst met bestanden weer te geven
function displayFileList() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const fileName = localStorage.key(i);
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = localStorage.getItem(fileName);
        link.target = '_blank';
        link.textContent = fileName;
        listItem.appendChild(link);
        fileList.appendChild(listItem);
    }
}

// Roep displayFileList op om de lijst met bestanden bij het laden weer te geven
displayFileList();
