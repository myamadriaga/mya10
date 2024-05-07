// Function to play a sound effect
function playSoundEffect(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

// Attach event listeners to all buttons with a specific class
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button-with-sound');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            playSoundEffect('{{site.baseurl}}/assets/paudio/hbwii.mp3'); // Replace with the path to your sound effect file
        });
    });
});
