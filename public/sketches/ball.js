class Ball {
    constructor(x, y, d) {
	this.pos = createVector(x, y);
	this.d = d;
	
    }
    changeColor(newColor) {
	this.ballColor = newColor;
    }
    applyForce(force) {
	this.acc = force;
    }

    gravity(f) {
	this.acc.sub(f);
    }
    
    update(speed) {
	this.vel = p5.Vector.sub(this.acc, this.pos);
	this.vel.mult(speed);
	this.pos.add(this.vel);
    }

    show(word) {
	noStroke();
 	fill(this.ballColor);
 	ellipse(this.pos.x, this.pos.y, this.d);
	textSize(32);
	textAlign(CENTER, CENTER);
	textFont("Roboto");
	fill(255);
	text(word, this.pos.x, this.pos.y);
    }
}
