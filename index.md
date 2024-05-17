---
layout: base
title: 𐙚˙✧˖°📷 ༘ ⋆｡ ˚
image: /images/mario_animation.png
hide: true
---


<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav_home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %} 

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startCheering();
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startFlipping();
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>


<span style="font-style: italic;">
welcome to my blog! <br> click enter to hear music on each page :P
</span>




<div class="container">

<hr>

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px; max-width:6%; float: left; border-color: #000000; ">
<img src="{{site.baseurl}}/images/personpfp.jpg"  alt="pfp"/> 
</div> 

<a href="{{site.baseurl}}/navigation/csp"><span style="color: #5f6163; font-weight:300; font-size:16px;"> MYAH! </span></a>


<hr style="float:left;">

<br>
<hr>


<span style="background-color: #c9deff; color: #5f6163; font-weight:700; font-size:30px;">
𐙚˙✧ ⋆｡ ˚
</span>




<span style="color:#c9deff;font-weight:700;font-size:18px">
    
</span>


<center> <span style="color:#6e3f07;font-weight:700;font-size:20px">
            
</span> </center>


<span style="color:#fab1ee;font-weight:500;font-size:18px">

</span>



<span style="color:#6e3f07;">

</span>


<center>
<div style="text-align: center; margin-top: 20px; margin-bottom: 20px; max-width: 70%">
<img src="{{site.baseurl}}/images/snake/Get To Know Me Poster - Madriaga, Mya.png"  alt="get to know me poster"/>
</div>
</center>

<span style="color:#5a4f5e;font-weight:700;font-size:20px">
             
</span>

<br><br><br>

</div>

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

var audio = new Audio('{{site.baseurl}}/assets/paudio/mewoo.mp3'); // replace 'your_audio_file.mp3' with the path to your audio file
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

