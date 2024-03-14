---
toc: false
comments: false
layout: post
title: sprite sheet yuuji
courses: {'csse': {'week': 0}}
type: ccc
permalink: m/navigation/csse
---
<body>
    <div>
        <canvas id="spriteContainer"> <!-- Within the base div is a canvas. An HTML canvas is used only for graphics. It allows the user to access some basic functions related to the image created on the canvas (including animation) -->
            <img id="dogSprite" src="/mya10/images/snake/yuuji.png">  // change sprite here
        </canvas>
        <div id="controls"> <!--basic radio buttons which can be used to check whether each individual animaiton works -->
            <input type="radio" name="animation" id="punch 1" checked>
            <label for="punch 1">punch 1</label><br>
            <input type="radio" name="animation" id="punch 2">
            <label for="punch 2">punch 2</label><br>
            <input type="radio" name="animation" id="punch 3">
            <label for="punch 3">punch 3</label><br>
            <input type="radio" name="animation" id="punch 4" checked>
            <label for="punch 4">punch 4</label><br>
            <input type="radio" name="animation" id="punch 5" checked>
            <label for="punch 5">punch 5</label><br>
            <input type="radio" name="animation" id="punch 6" checked>
            <label for="punch 6">punch 6</label><br>
            <input type="radio" name="animation" id="punch 7" checked>
            <label for="punch 1">punch 7</label><br>
        </div>
    </div>
</body>

<script>
    // start on page load
    window.addEventListener('load', function () {
        const canvas = document.getElementById('spriteContainer');
        const ctx = canvas.getContext('2d');
        const SPRITE_WIDTH = 45;  // matches sprite pixel width
        const SPRITE_HEIGHT = 52; // matches sprite pixel height
        const FRAME_LIMIT = 8;  // matches number of frames per sprite row, this code assume each row is same

        const SCALE_FACTOR = 5;  // control size of sprite on canvas
        canvas.width = SPRITE_WIDTH * SCALE_FACTOR;
        canvas.height = SPRITE_HEIGHT * SCALE_FACTOR;

        class Dog {
            constructor() {
                this.image = document.getElementById("dogSprite");
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
        const dog = new Dog();

        // update frameY of dog object, action from idle, bark, walk radio control
        const controls = document.getElementById('controls');
        controls.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT') {
                const selectedAnimation = event.target.id;
                switch (selectedAnimation) {
                    case 'punch 1':
                        dog.frameY = 0;
                        break;
                    case 'punch 2':
                        dog.frameY = 1;
                        break;
                    case 'punch 3':
                        dog.frameY = 2;
                        break;
                    case 'punch 4':
                        dog.frameY = 4;
                        break;
                    case 'punch 5':
                        dog.frameY = 5;
                        break;
                    case 'punch 6':
                        dog.frameY = 6;
                        break;
                    case 'punch 7':
                        dog.frameY = 7;
                        break;
                    default:
                        break;
                }
            }
        });

        // Animation recursive control function
        function animate() {
            // Clears the canvas to remove the previous frame.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draws the current frame of the sprite.
            dog.draw(ctx);

            // Updates the `frameX` property to prepare for the next frame in the sprite sheet.
            dog.update();

            // Uses `requestAnimationFrame` to synchronize the animation loop with the display's refresh rate,
            // ensuring smooth visuals.
          //  requestAnimationFrame(animate);
     setTimeout(function() {
    requestAnimationFrame(animate);
  }, 150);
        }
        // run 1st animate
        animate();
    });
</script>
