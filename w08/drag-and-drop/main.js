var mice = document.querySelectorAll('#mouseContainer img');

var mouse = null;

for (var i = 0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', this.id);
        console.log("data aquired");
    });
}

let cat = document.getElementById("cat");
cat.addEventListener("dragover", function (event) {
    event.preventDefault();
});

cat.addEventListener("drop", function (event) {
    console.log("Mouse dropped");
    var mouseHash = {
        mouse1: 'NOMNOMNOM',
        mouse2: 'Mreow',
        mouse3: 'Purrrrrr...'
    };

    var ch = document.getElementById('catHeading');

    var mouseID = event.dataTransfer.getData('text/plain');
    catHeading.innerHTML = mouseHash[mouseID];
    var mousey = document.getElementById(mouseID);
    mousey.parentNode.removeChild(mousey);
    event.preventDefault();
});