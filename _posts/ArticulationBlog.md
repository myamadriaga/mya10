---
layout: post
title: Articulation Blog
search_exclude: true
course: csse
---


# Articulation Blog: 

<hr>
<span style= "background-color: #FFFFFF;">
Example of the Functions for Spam Musubi:
<hr>
States:
1. initial state, rice
2. adding rice, 
3. add spam
4. add seaweed 
5. done

<hr>

```js
class SpamMusubiMaker {
    constructor() {
        this.state = 'rice'; // Initial state
    }

    makeMusubi() {
        switch (this.state) {
            // 1. Add rice
            case 'rice':
                console.log('Adding rice...');
                this.state = 'spam';
                break;
            // 2. Add spam
            case 'spam':
                console.log('Adding spam...');
                this.state = 'seaweed';
                break;
            // 3. Wrap with seaweed
            case 'seaweed':
                console.log('Wrapping with seaweed...');
                this.state = 'done';
                break;
            // 4. Musubi is done
            case 'done':
                console.log('Musubi is done!');
                break;
            default:
                console.log('Invalid state');
        }
    }
}

// Example usage
const musubiMaker = new SpamMusubiMaker();
musubiMaker.makeMusubi();  // Adding rice...
musubiMaker.makeMusubi();  // Adding spam...
musubiMaker.makeMusubi();  // Wrapping with seaweed...
musubiMaker.makeMusubi();  // Musubi is done!
```

We have states representing different stages of making the musubi: 'rice', 'spam', 'seaweed', and 'done'. The makeMusubi() method transitions between these states, performing appropriate actions at each stage. When the musubi is done ('done' state), the method prints a message indicating that the musubi is ready. This simulates the process of making a spam musubi, starting with adding rice, then adding spam, wrapping with seaweed, and finally indicating that the musubi is done. (Of course without further complications such as cooking the spam, etc;)

<hr>

This is how that relates similarly to my work: 

States:
Light Mode
Dark Mode

Transitions:
Turning on a light switch transitions from Dark Mode to Light Mode.
Turning off a light switch transitions from Light Mode to Dark Mode.
Toggle button or user setting to manually switch between Light Mode and Dark Mode.

<hr>

# Javascript Objects:

- a lot of my work didn't really have to do with objects directly in the game, but I still looked into it and also can connect it to my most prominent work:

ThemeManager can be a javascript object, containing a currentTheme property to track the theme, a toggletheme method which toggles between the modes, as well as the initialize method which initializes the theme based on a saved preference in local storage (which actually have to add within the theme code i did)

there can also be a Button object, which handles user interactions with the button to toggle the theme. 

<hr>

# Single Responsibility Principle: 

This was actually a problem within my code, where I could combine documents that had code w/ the same function. I could also end up creating an object/function, where other editors of the code can edit/add to, or use the function that removes a theme, or adds a theme. + the idea for that was just to contain the code in a js file called (ex: document.js), which would contain code that has to do with the style of the document, or anything that will potentially change the document. 

example:

Document.js
```js
// LightMode.js
export class LightMode {
    enable() {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// DarkMode.js
export class DarkMode {
    enable() {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
}
```

settingsControl.js
```js
import { LightMode, DarkMode } from './Document.js';
```
<hr>
<hr>
<div class="container">
<div style= "background-color: #FFFFFF color: #000000">
# Javascript Objects, + How they are collected: 

JavaScript objects are collections of key-value pairs, where keys (also called properties) are strings (or symbols), and values can be any data type, including other objects, arrays, or functions. Objects in JavaScript are used to store and organize data, and they can be created using curly braces {} or the new Object() syntax.

To collect data in an object, you define keys and assign corresponding values.

example: 
</div>

```js
let character {
    name: "Smiski"
    isCollectable: true;
},
greet: function() {
    console.log("wuts up! my name is " + this.name);
};
```
<hr>
<div class="container">
<div style= "background-color: #FFFFFF color: #000000">

Each property is a key-value pair, where they key is a string and the value can be a variety of data types. 

# Javascript Objects and the Game Level: 

Javascript objects can represent different elements, like the player, enemies, or obstacles; which are collected into a bigger structure to interact with them easily.

ex: Each javascript object in the game has its main file, such as enemy.js, etc; all of those will state the purpose of those objects. Those objects are then connected to GameSetup to be compiled into the levels. 

- JS files define the object with properties and methods
- GameSetup collects those objects into arrays to manage the game levle
- There is an object that manages interactions and updates the game elements 

# GameLevel and Array of Gamelevels 

- Objects are defined for a single level, then those levels are collected into an array, such as this: 

</div>

```js
let gameLevels = [level1, level2];
```
<div class="container">
this allows management between multiple levels, along with interactions with each level. These steps help organize the code. 

# Conditional Statements:

Conditional statements: ('if', 'else if' or 'else') allow the game to make decisions based on certain conditions, for example an if else statement for the theme toggle, or an if else statement for the fun fact toggle: 
</div>

```js
 const islightMode = document.createElement("input");  // get user defined lightmode boolean
        islightMode.type = "checkbox";
        if (GameEnv.isLightMode) {
            enableLightMode();
            islightMode.checked = true;
        } else {
            enableDarkMode();
            islightMode.checked = false;
        }
```

<div class="container">
# Loop Statements: ('for, 'while' and 'forEach')

- used to repeat actions, like moving enemies or checking for collisions for several game elements 

example: 
</div>

```js
// Loop through all items to check for collection
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (player.position.x === item.position.x && player.position.y === item.position.y) {
        if (item.name === "Strawberry") {
            player.health += 20;  // Apply the effect of the strawberry
            console.log("Player collected a strawberry! Health is now " + player.health);
        } else if (item.name === "Health Potion") {
            player.health += 50;  // Apply the effect of the health potion
            console.log("Player collected a health potion! Health is now " + player.health);
        }
```
<div class="container">
- 'for' loop looks through all items to check if the players position matches any items position; collected item --> effect applied. 

# Conditional and Loop Statements: 

- manage game logic, allows checking of items in real time 

so, if the player interacts with any object at any given time, there is a conditional statement for that specific interaction. 

within GameControl, the game level is affected by a lot of code, such as this code:
</div>

```js
 updateCoinDisplay() {
        const coins = GameEnv.coinScore
        const coinDisplay = document.getElementById('coinScore')
        if (!coinDisplay) {
            console.error("COIN DISPLAY DOES NOT EXIST");
        }
        coinDisplay.textContent = coins
    },     
```
<div class="container">
where it updates the coin display and tracks it when collected; as well as this code 
</div>

```js
startRandomEvent() {
        this.randomEventState = 1;
        this.randomEventId = Math.floor(Math.random() * 3) + 1; //The number multiplied by Math.random() is the number of possible events.
        /**Random Event Key
         * 1: Inverts the Color of the Background
         * 2: Time Stops all Goombas    
         * 3: Kills a Random Goomba
        */
    },

    endRandomEvent() {
        this.randomEventId = 0;
    },
```
<div class="container">
the trigger of random events which is an example of a conditional statement 

# Use of GameLoop
</div>


```js
  /**
     * The main game control loop.
     * Checks if the game is in transition. If it's not, it updates the game environment,
     * checks if the current level is complete, and if it is, transitions to the next level.
     * If the current level is null, it transitions to the beginning of the game.
     * Finally, it calls itself again using requestAnimationFrame to create a loop.
     */    
    gameLoop() {
        // Turn game loop off during transitions
        if (!this.inTransition)
    }
```

<div class="container">

# Level Ending Indication

</div>


```js
/**
     * Transitions to a new level. Destroys the current level and loads the new level.
     * @param {Object} newLevel - The new level to transition to.
     */
    async transitionToLevel(newLevel) {
        this.inTransition = true;

        // Destroy existing game objects
        GameEnv.destroy();

        // Load GameLevel objects
        if (GameEnv.currentLevel !== newLevel) {
            GameEnv.claimedCoinIds = [];
        }
        await newLevel.load();
        GameEnv.currentLevel = newLevel;

        // Update invert property
        GameEnv.setInvert();
        
        // Trigger a resize to redraw canvas elements
        window.dispatchEvent(new Event('resize'));

        this.inTransition = false;
    },
```
<div class="container">

this is the code that plays after the indication of the end of a level. It is triggered after the player hits a certain part of the game (which is known as the pipe.)

</div>







