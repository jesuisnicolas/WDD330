const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
angle = (angle + 2)%360;
squareElement.style.transform = `rotate(${angle}deg)`
window.requestAnimationFrame(rotate);
}

// rotate();
const id = requestAnimationFrame(rotate);