function fontfamily() {
    let element = document.getElementById("MegaPuperBlock1");
    element.style.fontFamily = "serif";
}
function colorText() {
    let elem = document.getElementById("MegaPuperBlock2");
    elem.style.color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
}
function borderColor() {
    document.getElementById("MegaPuperBlock3").style.borderColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
}
function backgroundColor() {
    let body = document.getElementById("body");
    body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
}
function borderRadius() {
    let border = document.getElementById("MegaPuperBlock5");
    border.style.borderRadius = '5px';
}


function getRandom(){
    return Math.floor(Math.random() * (255 - 0) + 0);
} 