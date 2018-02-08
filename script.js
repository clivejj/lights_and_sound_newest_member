var canvas = document.getElementById("cj");
var stopButton = document.getElementById("stop");

var ctx = canvas.getContext("2d");

var requestID = 0;
var expanding = true;

canvas.addEventListener('click', draw);

function draw(e) {
    window.cancelAnimationFrame(requestID);
    var r = 1;
    var augmenter = 1;
    function circle() {
	clear();
	ctx.beginPath();
	ctx.arc(250, 250, r, 0, 2 * Math.PI);
	ctx.fill();
	if (r == 1)
	    augmenter = 1;
	if (r == 250)
	    augmenter = -1;
	r += augmenter;
	requestID = window.requestAnimationFrame(circle);
    }
    circle();
}

stopButton.addEventListener('click', stop);

function stop(e) {
    window.cancelAnimationFrame(requestID);
}

function clear() {
    ctx.clearRect(0, 0, 500, 500);
}


    




