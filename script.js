
const emoji = document.getElementById("emoji");
const animations = ["float", "rotate", "bounce"];
let current = 0;

function cycleAnimation() {
  emoji.classList.remove(animations[current]);
  current = (current + 1) % animations.length;
  emoji.classList.add(animations[current]);
}
