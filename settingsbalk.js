document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const position = document.getElementById('position').value;
    localStorage.setItem('balkPositie', position);
    alert('Balk positie opgeslagen!');   
    location.reload();
});
