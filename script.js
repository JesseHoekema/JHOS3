document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('note-input');
    const saveButton = document.getElementById('save-button');
    const clearButton = document.getElementById('clear-button');
    const notesList = document.getElementById('notes-list');

    function saveNote() {
        const noteText = noteInput.value;
        if (noteText.trim() !== '') {
            const noteItem = document.createElement('li');
            noteItem.innerText = noteText;
            notesList.appendChild(noteItem);
            noteInput.value = '';

            // Save note to local storage
            const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
            savedNotes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(savedNotes));
        }
    }

    function clearNotes() {
        notesList.innerHTML = '';
        localStorage.removeItem('notes');
    }

    function loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        savedNotes.forEach(function(noteText) {
            const noteItem = document.createElement('li');
            noteItem.innerText = noteText;
            notesList.appendChild(noteItem);
        });
    }

    saveButton.addEventListener('click', saveNote);
    clearButton.addEventListener('click', clearNotes);

    loadNotes();
});
