function fallingLeft(){
    // headband
    push();
        fill(44, 163, 184);
        translate(gameChar_x, gameChar_y);
        rotate(-20);
        rect(25, -21, 10, 15, 0, 5, 0, 5);
    pop();
    fill(93, 203, 222);
    ellipse(gameChar_x+15, gameChar_y-27, 10, 10);
    
	// feet
    push();
        fill(255, 158, 0);
        translate(gameChar_x, gameChar_y);
        rotate(30);
        arc(-14, 7, 10, 13, 180, 0);
    pop();
    
	// body
    fill(55, 84, 115);
    ellipse(gameChar_x, gameChar_y-25, 30, 30);
    rect(gameChar_x-15, gameChar_y-25, 30, 20, 0, 0, 5, 5);
    
	// headband
    fill(153, 212, 222);
    rect(gameChar_x-16, gameChar_y-30, 32, 6, 2);
    
	// eyes
    fill(255);
    ellipse(gameChar_x-11, gameChar_y-20, 10,10);
    ellipse(gameChar_x-1, gameChar_y-20, 10,10);
    fill(54, 53, 50);
    ellipse(gameChar_x-11, gameChar_y-20, 5,5);
    ellipse(gameChar_x-1, gameChar_y-20, 5,5);
    
	// feet
    push();
        fill(255, 158, 0);
        translate(gameChar_x, gameChar_y);
        rotate(-30);
        arc(14, 7, 10, 13, 180, 0);
    pop();

	// movement
	fill(55, 55, 55)
	rect(gameChar_x+35, gameChar_y-30, 20, 4, 5)
	rect(gameChar_x+40, gameChar_y-20, 20, 4, 5)
	rect(gameChar_x+35, gameChar_y-10, 20, 4, 5)
}

function fallingRight(){
	// feet
	push();
	fill(255, 158, 0);
		translate(gameChar_x, gameChar_y);
		rotate(-30);
		arc(14, 7, 10, 13, 180, 0);
	pop();

	// body
	fill(55, 84, 115);
	ellipse(gameChar_x, gameChar_y-25, 30, 30);
	rect(gameChar_x-15, gameChar_y-25, 30, 20, 0, 0, 5, 5);

	// headband
	fill(153, 212, 222);
	rect(gameChar_x-16, gameChar_y-30, 32, 6, 2);
	push();
		translate(gameChar_x, gameChar_y);
		rotate(20);
		fill(44, 163, 184);
		rect(-35, -20, 10, 15, 5, 0, 5 ,0);
	pop();
	fill(93, 203, 222);
	ellipse(gameChar_x-15, gameChar_y-27, 10, 10);
	
	// eyes
	fill(255);
	ellipse(gameChar_x+1, gameChar_y-20, 10,10);
	ellipse(gameChar_x+11, gameChar_y-20, 10,10);
	fill(54, 53, 50);
	ellipse(gameChar_x+1, gameChar_y-20, 5,5);
	ellipse(gameChar_x+11, gameChar_y-20, 5,5);

	// feet
	push();
	fill(255, 158, 0);
		translate(gameChar_x, gameChar_y);
		rotate(30);
		arc(-14, 7, 10, 13, 180, 0);
	pop();

	// movement
	fill(55, 55, 55)
	rect(gameChar_x-55, gameChar_y-30, 20, 4, 5)
	rect(gameChar_x-60, gameChar_y-20, 20, 4, 5)
	rect(gameChar_x-55, gameChar_y-10, 20, 4, 5)
} 

function movingLeft(){
	// headband
	fill(44, 163, 184);
	rect(gameChar_x+13, gameChar_y-27, 10, 15, 0, 5, 0, 5);
	fill(93, 203, 222);
	ellipse(gameChar_x+15, gameChar_y-27, 10, 10);

	// feet
	push();
		fill(255, 158, 0);
		translate(gameChar_x, gameChar_y);
		rotate(30);
		arc(-12, 5, 10, 13, 180, 0);
	pop();

	// body
	fill(55, 84, 115);
	ellipse(gameChar_x, gameChar_y-25, 30, 30);
	rect(gameChar_x-15, gameChar_y-25, 30, 20, 0, 0, 5, 5);

	// headband
	fill(153, 212, 222);
	rect(gameChar_x-16, gameChar_y-30, 32, 6, 2);

	// eyes
	fill(255);
	ellipse(gameChar_x-11, gameChar_y-20, 10,10);
	ellipse(gameChar_x-1, gameChar_y-20, 10,10);
	fill(54, 53, 50);
	ellipse(gameChar_x-11, gameChar_y-20, 5,5);
	ellipse(gameChar_x-1, gameChar_y-20, 5,5);

	// feet
	push();
		fill(255, 158, 0);
		translate(gameChar_x, gameChar_y);
		rotate(-30);
		arc(8, 3, 10, 13, 180, 0);
	pop();

	// movement
	fill(55, 55, 55)
	rect(gameChar_x+30, gameChar_y-30, 20, 4, 5)
	rect(gameChar_x+35, gameChar_y-20, 20, 4, 5)
	rect(gameChar_x+30, gameChar_y-10, 20, 4, 5)
} 

function movingRight(){
	// feet
	push();
		fill(255, 158, 0);
		translate(gameChar_x, gameChar_y);
		rotate(-30);
		arc(12, 5, 10, 13, 180, 0);
	pop();

	// body
	fill(55, 84, 115);
	ellipse(gameChar_x, gameChar_y-25, 30, 30);
	rect(gameChar_x-15, gameChar_y-25, 30, 20, 0, 0, 5, 5);

	// headband
	fill(153, 212, 222);
	rect(gameChar_x-16, gameChar_y-30, 32, 6, 2);
	fill(44, 163, 184);
	rect(gameChar_x-23, gameChar_y-27, 10, 15, 5, 0, 5, 0);
	fill(93, 203, 222);
	ellipse(gameChar_x-15, gameChar_y-27, 10, 10);
	
	// eyes
	fill(255);
	ellipse(gameChar_x+1, gameChar_y-20, 10,10);
	ellipse(gameChar_x+11, gameChar_y-20, 10,10);
	fill(54, 53, 50);
	ellipse(gameChar_x+1, gameChar_y-20, 5,5);
	ellipse(gameChar_x+11, gameChar_y-20, 5,5);

	// feet
	push();
		fill(255, 158, 0);
		translate(gameChar_x, gameChar_y);
		rotate(30);
		arc(-8, 3, 10, 13, 180, 0);
	pop();

	// movement
	fill(55, 55, 55)
	rect(gameChar_x-50, gameChar_y-30, 20, 4, 5)
	rect(gameChar_x-55, gameChar_y-20, 20, 4, 5)
	rect(gameChar_x-50, gameChar_y-10, 20, 4, 5)
} 

function isFallingDown(){
	// headband
	push();
		translate(gameChar_x, gameChar_y);
		rotate(20);
		fill(44, 163, 184);
		rect(-35, -20, 10, 15, 5, 0, 5 ,0);
	pop();
	fill(93, 203, 222);
	ellipse(gameChar_x-15, gameChar_y-27, 10, 10);
	
	// body
	fill(55, 84, 115);
	ellipse(gameChar_x, gameChar_y-25, 30, 30);
	rect(gameChar_x-15, gameChar_y-25, 30, 20, 0, 0, 5, 5);
	
	// headband
	fill(153, 212, 222);
	rect(gameChar_x-16, gameChar_y-30, 32, 6, 2);
	
	// eyes
	fill(255);
	ellipse(gameChar_x-5, gameChar_y-20, 10,10);
	ellipse(gameChar_x+5, gameChar_y-20, 10,10);
	fill(54, 53, 50);
	ellipse(gameChar_x-5, gameChar_y-20, 5,5);
	ellipse(gameChar_x+5, gameChar_y-20, 5,5);
	
	// feet
	fill(0);
	fill(255, 158, 0);
	push();
		translate(gameChar_x, gameChar_y);
		rotate(30);
		arc(-14, 7, 10, 13, 180, 0);
	pop();
	push();
		translate(gameChar_x, gameChar_y);
		rotate(-30);
		arc(14, 7, 10, 13, 180, 0);
	pop();
} 

function notMoving(){
	// headband
	fill(44, 163, 184);
	rect(gameChar_x-23, gameChar_y-27, 10, 15, 5, 0, 5, 0);
	fill(93, 203, 222);
	ellipse(gameChar_x-15, gameChar_y-27, 10, 10);

	// body
	fill(55, 84, 115);
	ellipse(gameChar_x, gameChar_y-25, 30, 30);
	rect(gameChar_x-15, gameChar_y-25, 30, 20, 0, 0, 5, 5);

	// headband
	fill(153, 212, 222);
	rect(gameChar_x-16, gameChar_y-30, 32, 6, 2);

	// eyes
	fill(255);
	ellipse(gameChar_x-5, gameChar_y-20, 10,10);
	ellipse(gameChar_x+5, gameChar_y-20, 10,10);
	fill(54, 53, 50);
	ellipse(gameChar_x-5, gameChar_y-20, 5,5);
	ellipse(gameChar_x+5, gameChar_y-20, 5,5);

	// feet
	fill(255, 158, 0);
	arc(gameChar_x-6, gameChar_y, 10, 13, 180, 0);
	arc(gameChar_x+6, gameChar_y, 10, 13, 180, 0);
}