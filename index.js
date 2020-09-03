// Detecting Mouse Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // this.style.color = "white";


    var clickedButton = this.innerHTML;
    makeSound(clickedButton);

    pressedButton(clickedButton);
}
)}

// Detecting Keyboard Press
document.addEventListener('keydown', function(event) {
   button = event.key;
   makeSound(button);
   pressedButton(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;


    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

      default:

  }
}

function pressedButton(classInput)
{
  var keyPressed = document.querySelector("." + classInput);
  keyPressed.classList.add("pressed");
  setTimeout(removeAnimation, 200)

  function removeAnimation(){
    keyPressed.classList.remove("pressed");
  }
}

// });
