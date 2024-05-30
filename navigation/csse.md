---
layout: post
title: about me!
search_exclude: true
course: csse
---

<div class="container">

im mya, i am very interested in music, fashion, programing(ish..), interior design, psychology... and a lot more! I love to do online graphic design, and I also enjoy taking photos 

i love listening to any genre, so if you're interested in a music reccomendation i MAY or may not be able to give you songs or name artists lol
</div>

<img src="{{site.baseurl}}/images/download (1).jpg" style="width: 200px; height: 90px; float: left;" alt="draw.io"/>


<script>
// Function to play a sound effect
function playSoundEffect() {
    var audio = new Audio('{{site.baseurl}}/assets/paudio/hbwii.mp3'); // replace 'your_sound_effect.mp3' with the path to your sound effect file
    audio.play();
}

// Attach click event listener to document
document.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor link (<a>) or any other clickable element
    if (event.target.tagName === 'A' || event.target.classList.contains('clickable-element')) {
        playSoundEffect(); // Play the sound effect
    } else {
        playAudio(); // If the clicked element is not a clickable element, play the background audio
    }
});

var audio = new Audio('{{site.baseurl}}/assets/audio/ikyfl.mp3'); // replace 'your_audio_file.mp3' with the path to your audio file
audio.loop = true; // enable looping

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Check if the pressed key is Enter (key code 13)
        playAudio();
    }
});

function playAudio() {
    if (!audio.paused) { // Check if audio is currently playing
        audio.pause(); // Pause the audio if it's already playing
    } else {
        audio.currentTime = 0; // Reset audio to start
        audio.play(); // Play the audio if it's not already playing
    }
}
</script>




