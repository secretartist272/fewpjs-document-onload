// Your code goes here

document.addEventListener('DOMContentLoaded', function() {
    console.log("The DOM has loaded");
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

const pText = document.querySelector('p#text')

document.addEventListener("DOMContentLoaded", function() {
    pText.textContent = "This is really cool!"
})