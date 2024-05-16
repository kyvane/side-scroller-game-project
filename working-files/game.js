function renderCampfire(){
	push();
		// tent interior
		fill(24, 58, 55);
		beginShape();
			vertex(campfire.x_pos+135, floorPos_y-70);
			vertex(campfire.x_pos+180, floorPos_y);
			vertex(campfire.x_pos+90, floorPos_y);
		endShape();

		// tent entrance
		fill(196, 73, 0);
		bezier(
			campfire.x_pos+90, floorPos_y,
			campfire.x_pos+110, floorPos_y,
			campfire.x_pos+110, floorPos_y,
			campfire.x_pos+135, floorPos_y-70
		)
		bezier(
			campfire.x_pos+180, floorPos_y,
			campfire.x_pos+162, floorPos_y,
			campfire.x_pos+162, floorPos_y,
			campfire.x_pos+135, floorPos_y-70
		)

		// tent exterior
		fill(239, 214, 172);
		beginShape();
			vertex(campfire.x_pos+135, floorPos_y-70);
			vertex(campfire.x_pos+240, floorPos_y-70);
			vertex(campfire.x_pos+290, floorPos_y);
			vertex(campfire.x_pos+180, floorPos_y);
		endShape();
		beginShape();
			vertex(campfire.x_pos+135, floorPos_y-70);
			vertex(campfire.x_pos+80, floorPos_y);
			vertex(campfire.x_pos+90, floorPos_y);
		endShape();

		// tent pegs
		fill("brown");
		rect(campfire.x_pos+79, floorPos_y, 2, -5);
		rect(campfire.x_pos+179, floorPos_y, 2, -5);
		rect(campfire.x_pos+289, floorPos_y, 2, -5);

		if(campfire.isReached){
			// campfire flame
			push();
				translate(campfire.x_pos+25, floorPos_y);
				fill(244, 211, 94);
				arc(0, -5, 30, 70, 180, 0);
				fill(238, 150, 75);
				arc(0, -5, 15, 40, 180, 0);
			pop();
			
			// campfire logs
			push();
				translate(campfire.x_pos, floorPos_y+4)
				fill(82, 63, 56);
				rotate(-10);
				rect(0, 0, 50, -6)
			pop();
			push();
				translate(campfire.x_pos, floorPos_y-4)
				fill(82, 63, 56);
				rotate(10);
				rect(0, 0, 50, -6)
			pop();
			return
		}else{
			// campfire logs
			push();
				translate(campfire.x_pos, floorPos_y+4)
				fill(82, 63, 56);
				rotate(-10);
				rect(0, 0, 50, -6)
			pop();
			push();
				translate(campfire.x_pos, floorPos_y-4)
				fill(82, 63, 56);
				rotate(10);
				rect(0, 0, 50, -6)
			pop();
		}
	pop();
}


function checkCampfire(){
	if(gameChar_x >= campfire.x_pos){
		campfire.isReached = true;
		gameOver = true;
	}
}


function checkIsPlayerDead(){
	if(gameChar_y > height){
		lives--;
		if(lives>0){
			init()
		}else{
			gameOver = true;
		}
	}
}


function renderScoreboard(){
	push();
		fill(25, 25, 25);
		noStroke();
		textSize(22);
		textFont('Verdana');
		textStyle(BOLD);
		text("Score:  " + gameScore, 20, 35)
	pop();
}


function renderLifeTokens(){
	for(var i = 0; i < lives; i++){
		push();
			translate(35*i+32, 48);
			stroke(25, 25, 25);
			strokeWeight(2);
			blendMode(BLEND)
			fill(237, 66, 114)
			beginShape();
				vertex(0, 0);
				bezierVertex(-20/2, -20/2, -20, 20/3, 0, 20);
				bezierVertex(20, 20/3, 20/2, -20/2, 0, 0);
			endShape();
		pop();
	}
}


function gameLose(){
    fill(0, 0, 0, 100);
	rect(width/2-400, height/2-200, 800, 400, 50);

	fill(248, 248, 248);
	textFont('Verdana');
	textStyle(BOLD);
	textAlign(CENTER, BASELINE);

	textSize(100);
	text("game over", width/2, height/2-25);
	textSize(50);
	text("you lost!", width/2, height/2+40);
	textSize(20);
	text("try harder next time :(", width/2, height/2+90)

	sound_walk.stop()
}


function gameWin(){
    fill(0, 0, 0, 100);
	rect(gameChar_x-400, height/2-200, 800, 400, 50);

	fill(248, 248, 248);
	textFont('Verdana');
	textStyle(BOLD);
	textAlign(CENTER, BASELINE);

	textSize(100);
	text("game over", gameChar_x, height/2-25);
	textSize(50);
	text("you won!", gameChar_x, height/2+40);
	textSize(20);
	text("congratulations", gameChar_x, height/2+90)

	sound_walk.stop()
}