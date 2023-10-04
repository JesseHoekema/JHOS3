function changeBackgroundImage() {
    const backgroundImageInput = document.getElementById('backgroundImage');
    const backgroundImageURL = backgroundImageInput.value;

    document.body.style.backgroundImage = `url(${backgroundImageURL})`;
    localStorage.setItem('backgroundImageURL', backgroundImageURL);
}

document.addEventListener('DOMContentLoaded', function() {
    const backgroundImageInput = document.getElementById('backgroundImage');

    const storedBackgroundImageURL = localStorage.getItem('backgroundImageURL');
    if (storedBackgroundImageURL) {
        document.body.style.backgroundImage = `url(${storedBackgroundImageURL})`;
        backgroundImageInput.value = storedBackgroundImageURL;
    }

    backgroundImageInput.addEventListener('change', function() {
        changeBackgroundImage();
    });
});
