for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var binh = this.innerHTML;
    makeSound(binh);
    Animate(binh);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  Animate(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w": var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;
    case "a": var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
    case "s": var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;
    case "d": var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;
    case "j": var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k": var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l": var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(binh);
      break;
  }
  //What to do when click


}

function Animate(e) {
  var pa = document.querySelector("." + e);
  pa.classList.add("pressed");
  setTimeout(function () { pa.classList.remove("pressed"); }, 100);

}
