var canvas = document.getElementById("cj");
var clearButton = document.getElementById("clear");
var stopButton = document.getElementById("stop");

var ctx = canvas.getContext("2d");

clearButton.addEventListener('click', clear);
stopButton.addEventListener('click', stop);

function clear(e) {
    console.log("clearing!");
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
};


canvas.addEventListener('click', draw);
function draw(e) {
    console.log("drawing!");
ctx.begin
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.endPath();
    ctx.fill();
    lastX = x;
    lastY = y;
};





