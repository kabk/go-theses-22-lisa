//import Headroom from "headroom.js";

// select your header or whatever element you wish
// const header = document.querySelector("menu");

// const headroom = new Headroom(header);
// headroom.init();


// Initialize variables
let timer, currSeconds = 0;

const startIdleTimer = () => {
    // Increment the timer seconds
    currSeconds++;

    // Set the timer text to the new value
    document.querySelector(".log").textContent = currSeconds + ' second' + (currSeconds > 1 ? 's' : '')

    // Show timer
    if (document.querySelector(".log").classList.contains('conceal')) {
        document.querySelector(".log").classList.toggle('conceal')
    }

    // Hide "Active" notification
    if (!document.querySelector(".active").classList.contains('conceal')) {
        document.querySelector(".active").classList.add('conceal')
    }
}

const resetTimer = () => {

    // Clear the previous interval
    clearInterval(timer);

    // Reset the seconds of the timer
    currSeconds = 0;

    // Set a new interval
    timer = setInterval(startIdleTimer, 1000);

    // Hide timer
    if (!document.querySelector(".log").classList.contains('conceal')) {
        document.querySelector(".log").classList.toggle('conceal')
    }

    // Show "Active" notification
    if (document.querySelector(".active").classList.contains('conceal')) {
        document.querySelector(".active").classList.toggle('conceal')
    }

}

// Register several events, not just scroll
var events = ['scroll', 'touchstart'];
events.forEach((item) => {
    document.addEventListener(item, resetTimer, true);
});

// Reset timer on start
window.addEventListener('load', resetTimer, true);

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
    offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    scrollDuration = 700;