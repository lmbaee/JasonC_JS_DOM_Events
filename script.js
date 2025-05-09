//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

  //Get the element with an id of onload
  let onLoadEl = document.getElementById("onload");
 
  //Add some HTML within the element we grabbed
  onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
 
 })

 //Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

let clickButton = document.getElementById("clickMe");

clickButton.addEventListener("click", function() {
  clickButton.innerText = "You clicked me!";
});

function changeBtnStyle() {
  const btn = document.querySelector(".cool-btn")
  btn.classList.toggle("glow"); // Toggles glow effect
 }
 
 let darkModeButton = document.getElementById("darkModeBtn");

darkModeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  darkModeButton.innerText =
    document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
