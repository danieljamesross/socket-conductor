let socket = null; // variable to hold the socket
let diameter = 75; // diameter of the ball
let newColor = 'rgb(255,69,0)';
let b = null;
let mover = null;
let vecX = 0;
let vecY = 0;
let beat = "!";

setup = () => {
    const cnv = createCanvas(windowWidth, windowHeight);
    // socket connection
    socket = io.connect('http://localhost:3000')
    b = new Ball(100, 100, diameter);
}

windowResized  = () => {
    resizeCanvas(windowWidth, windowHeight);
}

draw = () => {
    background(51);
    conductor();
    mover = createVector(vecX, vecY);
    b.changeColor(newColor);
    b.applyForce(mover);
    let grav = createVector(windowWidth,windowHeight);
    if (mouseIsPressed) {
	b.gravity(grav);
    }
    b.update(0.2);
    b.show(beat);
}

conductor = () => {
    beat = 1 + (second() % 4);
    switch (beat) {
	case 1:
	    vecX = windowWidth * 0.5;
	    vecY = windowHeight * 0.9;
	    newColor = 'rgb(0,128,0)'; //green
	    break;
	case 2:
	    vecX = windowWidth * 0.9;
	    vecY = windowHeight * 0.9;
	    newColor = 'rgb(30,144,255)'; //blue
	    break;
	case 3:
	    vecX = windowWidth * 0.1;
	    vecY = windowHeight * 0.9;
	    newColor = 'rgb(255,215,0)'; //yellow
	    break;
	case 4:
	    vecX = windowWidth * 0.5;
	    vecY = windowHeight * 0.1;
	    newColor = 'rgb(255,69,0)'; //red
	    break;
    }
}
