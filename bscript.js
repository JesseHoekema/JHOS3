function goBack() {
    document.getElementById('browserFrame').contentWindow.history.back();
}

function goForward() {
    document.getElementById('browserFrame').contentWindow.history.forward();
}

function loadURL() {
    const urlInput = document.getElementById('urlInput');
    const browserFrame = document.getElementById('browserFrame');

    browserFrame.src = urlInput.value;
}
