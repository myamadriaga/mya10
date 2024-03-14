---
toc: false
comments: false
layout: post
title: sprite sheet y2
courses: {'csse': {'week': 0}}
type: ccc
permalink: m/navigation/csse
---

<body>
    <div>
        <canvas id="spriteContainer"> <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
            <img id="zoroSprite" src="/mya10/images/snake/yuuji.png">  // change sprite here
        </canvas>
        <div id="controls"> <!--basic radio buttons which can be used to check whether each individual animaiton works -->
            <input type="radio" name="animation" id="idle" checked>
            <label for="idle">Idle</label><br>
            <input type="radio" name="animation" id="run">
            <label for="run">run</label><br>
            <input type="radio" name="animation" id="jump">
            <label for="jump">jump</label><br>
        </div>
    </div>
</body>

<script>
    // start on page load
    window.addEventListener('load', function () {
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 39;  // matches sprite pixel width
        const SPRITE_HEIGHT = 45; // matches sprite pixel height
        const FRAME_LIMIT = 6;  // matches number of frames per sprite row, this code assume each row is same

        const SCALE_FACTOR = 3;  // control size of sprite on canvas
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        class zoro {
            constructor() {
                this.image = document.getElementById("zoroSprite");
                this.x = 0;
                this.y = 0;
                this.minFrame = 0;
                this.maxFrame = FRAME_LIMIT;
                this.frameX = 0;
                this.frameY = 0;
            }
            // draw dog object
            draw(context) {
                context.drawImage(
                    this.image,
                    this.frameX * SPRITE_WIDTH,
                    this.frameY * SPRITE_HEIGHT,
                    SPRITE_WIDTH,
                    SPRITE_HEIGHT,
                    this.x,
                    this.y,
                    canvas.width,
                    canvas.height
                );
            }

            // update frameX of object
            update() {
                if (this.frameX < this.maxFrame) {
                    this.frameX++;
                } else {
                    this.frameX = 0;
                }
            }
        }

        // dog object
        const character = new zoro();
const controls = document.getElementById('controls');
controls.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        const selectedAnimation = event.target.id;
        switch (selectedAnimation) {
            case 'idle':
                zoro.frameY = 0;
                break;
            case 'run':
                zoro.frameY = 1;
                break;
            case 'jump':
                zoro.frameY = 2;
                break;
            default:
                break;
        }

        // Increment the frameY property to make the position on the sprite sheet go lower
        zoro.frameY++;

        // You may want to reset frameY to 0 if it goes beyond a certain limit
        // For example, if you have only a few rows in your sprite sheet
        if (zoro.frameY >= 3) {
            zoro.frameY = 3;
        }
    }
});
        // update 
        // of dog object, action from idle, bark, walk radio control
       // const controls = document.getElementById('controls');
      //  controls.addEventListener('click', function (event) {
        //    console.log(event)
         //   if (event.target.tagName === 'INPUT') {
           //     const selectedAnimation = event.target.id;
            //    switch (selectedAnimation) {
               //     case 'idle':
                  //      zoro.frameY = 0;
                   //     break;
                 //   case 'run':
                 //       zoro.frameY = 1;
                 //       break;
                //    case 'jump':
                 //       zoro.frameY = 2;
                 //       break;
                 //   default:
                 //       break;
                     
         //       }
        //    }
      //  });

        // Animation recursive control function
        function animate() {
            // Clears the canvas to remove the previous frame.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draws the current frame of the sprite.
            character.draw(ctx);

            // Updates the `frameX` property to prepare for the next frame in the sprite sheet.
            character.update();

            // Uses `requestAnimationFrame` to synchronize the animation loop with the display's refresh rate,
            // ensuring smooth visuals.
           // requestAnimationFrame(animate);
         setTimeout(function() {
    requestAnimationFrame(animate);
  }, 200);
        }
        // run 1st animate
        animate();
    });
</script>