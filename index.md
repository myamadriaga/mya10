---
layout: base
title: 𐙚˙✧˖°📷 ༘ ⋆｡ ˚
image: /images/mario_animation.png
hide: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <button id="playButton">music!</button>
    <audio id="backgroundMusic" autoplay>
        <source src="{{site.baseurl}}/assets/paudio/apt.mp3" type="audio/mp3">
        Your browser does not support the audio element.
    </audio>
    <script>
        var audio = document.getElementById("backgroundMusic");
        var playButton = document.getElementById("playButton");
        playButton.addEventListener("click", function() {
            if (audio.paused) {
                audio.play();
                playButton.innerHTML = "Pause Music";
            } else {
                audio.pause();
                playButton.innerHTML = "Play Music";
            }
        });
   </script>





</script>
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

<center><span style="color:#6e3f07;font-weight:700;font-size:30px">
𐙚˙✧ Mya Madriaga ⋆｡ ˚
</span></center>




<span style="color:#fab1ee;font-weight:700;font-size:18px">
    i'm 15 years old, a sophomore and Filipino + African American!
Some of my interests are: listening to music, sort of making music or paying a lot of attention to the rythym and beats of music, different mixed media art (I make keychains, etc), and fashion
</span>


<center> <span style="color:#6e3f07;font-weight:700;font-size:20px">
            some games I really like are: 
</span> </center>


<span style="color:#fab1ee;font-weight:500;font-size:18px">
Fortnite.. Borderlands, Final Fantasy, Skyrim, Resident Evil.. 
</span>



<span style="color:#6e3f07;">
im taking computer science because I wanted to major in it, while having my minor be fashion!
I really want to create a steady future as far as my profession, So I believe that if I take computer science it will help me take a liking to it! 
</span>

𐙚˙✧˖°📷 ༘ ⋆｡ ˚
<div style="text-align: center; margin-top: 20px; margin-bottom: 20px;">
<img src="{{site.baseurl}}/images/snake/Get To Know Me Poster - Madriaga, Mya.png" alt="get to know me poster"/>
</div>
𐙚˙✧˖°📷 ༘ ⋆｡ ˚

<span style="color:#5a4f5e;font-weight:700;font-size:20px">
             some of my favorite artists: 
</span>


- Lamp,
- The Cardigans,
- Frank Ocean,
- Sade,
- Keyshia Cole,
- Luis Miguel,
- Rihanna,
- SHISHAMO,
- Beabadoobee,
- Ichiko Aoba,
- Dahlia,