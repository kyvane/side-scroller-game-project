function setupScene(){
    fgCloud = [
        {pos_x: -1270, pos_y: 95, scale: random(0.6, 1.3)},
        {pos_x: -370, pos_y: 165, scale: random(0.6, 1.3)},
        {pos_x: 620, pos_y: 115, scale: random(0.6, 1.3)},
        {pos_x: 2140, pos_y: 155, scale: random(0.6, 1.3)},
        {pos_x: 3230, pos_y: 150, scale: random(0.6, 1.3)},
    ]

    bgCloud = [
        {pos_x: 300, pos_y: 100, scale: random(0.5, 1.3)},
        {pos_x: 1640, pos_y: 95, scale: random(0.5, 1.3)},
        {pos_x: 2723, pos_y: 115, scale: random(0.5, 1.3)},
        {pos_x: 3900, pos_y: 110, scale: random(0.5, 1.3)}
    ]

    mountain = [
        {pos_x: 345, scale: random(0.8, 1.1)},
        {pos_x: 1195, scale: random(0.8, 1.1)},
        {pos_x: 2600, scale: random(0.8, 1.1)},
    ]

    tree = [
        {pos_x: 250, scale: random(0.8, 1.3)},
        {pos_x: 940, scale: random(0.8, 1.3)}, 
        {pos_x: 1550, scale: random(0.8, 1.3)}, 
        {pos_x: 1720, scale: random(0.8, 1.3)}, 
        {pos_x: 2040, scale: random(0.8, 1.3)}, 
        {pos_x: 2400, scale: random(0.8, 1.3)}, 
        {pos_x: 3200, scale: random(0.8, 1.3)},
		{pos_x: 3500, scale: random(0.8, 1.3)},
		{pos_x: 3700, scale: random(0.8, 1.3)},
		{pos_x: 4200, scale: random(0.8, 1.3)}
    ]

    sun = {
        pos_x: 980,
        pos_y: -30
    }

	canyon = [
		{pos_x: 650, width: 160},
		{pos_x: 1400, width: 100},
		{pos_x: 1800, width: 80},
		{pos_x: 2210, width: 100},
		{pos_x: 2830, width: 250},
		{pos_x: 3240, width: 80},
	]
}



function drawFGclouds(){
    for(var i = 0; i < fgCloud.length; i++){
		push();
			translate(fgCloud[i].pos_x, fgCloud[i].pos_y)
			scale(fgCloud[i].scale);
			fill(255, 255, 255, 100);

			beginShape();
				vertex(10, -35);
				bezierVertex(10, -35, 55, -80, 110, -55);
				bezierVertex(110, -55, 190, -110, 250, -40);
				bezierVertex(250, -40, 300, -70, 340, -20);
				bezierVertex(340, -25, 400, -34, 400, 0);
				bezierVertex(400, 0, 400, 35, 335, 20);
				bezierVertex(335, 20, 290, 55, 240, 30);
				bezierVertex(240, 30, 190, 80, 110, 35);
				bezierVertex(110, 35, 60, 70, 25, 35);
				bezierVertex(25, 35, -50, 45, -70, 10);
				bezierVertex(-70, 10, -90, -25, 10, -35)
			endShape();
			
			// anchor
			// fill("red"); ellipse(0, 0, 5, 5);
		pop();
	}
}

function drawBGclouds(){
    for(var i = 0; i < bgCloud.length; i++){
		push();
			translate(bgCloud[i].pos_x, bgCloud[i].pos_y)
			scale(bgCloud[i].scale);
			fill(255, 255, 255, 150);

			beginShape();
			vertex(10, -35);
				bezierVertex(10, -35, 55, -80, 110, -55);
				bezierVertex(110, -55, 190, -110, 250, -40);
				bezierVertex(250, -40, 300, -70, 340, -20);
				bezierVertex(340, -25, 400, -34, 400, 0);
				bezierVertex(400, 0, 400, 35, 335, 20);
				bezierVertex(335, 20, 290, 55, 240, 30);
				bezierVertex(240, 30, 190, 80, 110, 35);
				bezierVertex(110, 35, 60, 70, 25, 35);
				bezierVertex(25, 35, -50, 45, -70, 10);
				bezierVertex(-70, 10, -90, -25, 10, -35)
			endShape();

			// anchor
			// fill("red"); ellipse(0, 0, 5, 5);
		pop();
	}
}



function drawTrees(){
    for(var i = 0; i < tree.length; i++){
		push();
			translate(tree[i].pos_x, floorPos_y);
            scale(tree[i].scale);

            fill(228,163,49);
            ellipse(10, -120, 80, 80)
			
            fill(204,128,20);
            ellipse(-10, -80, 100, 90)
            ellipse(30, -80, 100, 90)

            fill(105, 75, 55);
            triangle(0, 0, 20, 0, 10, -100)
            triangle(10, -40, 10, -50, -30, -85)
            triangle(10, -50, 10, -60, 40, -80)
            
            // anchor
			// fill("red"); ellipse(0, 0, 5, 5);
		pop();
	}
}



function drawMountains(){
    for(var i = 0; i < mountain.length; i++){
    	push();
    	    translate(mountain[i].pos_x, floorPos_y)
    	    scale(mountain[i].scale)

			fill(142, 146, 148);
    	    triangle(-50, 0, -150, -132, -250, 0);
			fill(142, 146, 148);
    	    triangle(280, 0, 130, -182, -20, 0);
			fill(157, 161, 163);
    	    triangle(175, 0, 0, -284, -175, 0);

			//tip of mountain
			let gradient = drawingContext.createLinearGradient(
				0, -250, 0, -200
			);
			gradient.addColorStop(0, color(251,247,245));
			gradient.addColorStop(0.8, color(222, 226, 230));
			gradient.addColorStop(1, color(206, 212, 218));
			drawingContext.fillStyle = gradient;
			beginShape();
				vertex(0,	-284);
				vertex(-60,	-187);
				vertex(-40,	-200);
				vertex(-20,	-187);
				vertex(0,	-200);
				vertex(20,	-187);
				vertex(40,	-200);
				vertex(60,	-187);
			endShape();
			
			// anchor
			// fill("red"); ellipse(0, 0, 5, 5);
    	pop();
	}
}



function renderSky(){
    let gradient = drawingContext.createLinearGradient(
		0, 100, 0, floorPos_y+100
	);
	gradient.addColorStop(0, color(255, 236, 236));
	gradient.addColorStop(0.3, color(255, 186, 186));
	gradient.addColorStop(1, color(255, 152, 152));
	drawingContext.fillStyle = gradient;
	rect(0, 0, width, floorPos_y);
}



function renderGround(){
    fill(166, 106, 28);
	rect(0, floorPos_y, width, height - floorPos_y);
}



function renderBlockade(){
	push();
		translate(-150, floorPos_y);
		fill(125, 126, 145);
		rect(20, 0, 7, -50);
		rect(80, 0, 7, -50);
		fill(255);
		rect(18, 0, 11, -5);
		rect(78, 0, 11, -5);
		//yellow board
		fill(255, 253, 110);
		rect(10, -20, 87, -26);
		fill(204, 57, 41);
		textSize(12);
		textFont('Verdana');
		textStyle(BOLD);
		text("NO ENTRY", 19, -29)

		//cliff
		fill(140, 87, 18);
		rect(-10, 0, -width/2, floorPos_y)
	pop();
}



function drawSun(){
	push();
    	fill(246, 241, 213, 20);
    	ellipse(sun.pos_x, sun.pos_y, 290, 290);
    	fill(246, 241, 213, 50);
    	ellipse(sun.pos_x, sun.pos_y, 230, 230);
    	fill(246, 241, 213);
    	ellipse(sun.pos_x, sun.pos_y, 200, 200);

		// sun lighting
    	fill(246, 241, 213, 20);
    	beginShape();
    	    vertex(sun.pos_x-65, sun.pos_y-30);
    	    vertex(sun.pos_x-500, floorPos_y);
    	    vertex(sun.pos_x+20, floorPos_y);
    	    vertex(sun.pos_x+100, sun.pos_y+10);
    	endShape();
	pop();
}



function renderCanyons(){
    for(var i = 0; i < canyon.length; i++){
		drawCanyons(canyon[i]);
		checkOverCanyon(canyon[i]);
	}
}

function checkOnCanyon(){
	for(var i = 0; i < canyon.length; i++){
		checkOverCanyon(canyon[i]);
	}
}

function checkOverCanyon(t_canyon){
	// check if character is on the floor
	var onFloor = gameChar_y == floorPos_y
	// check if character is left of canyon
	var canyonLeft = gameChar_x - 40/2 > t_canyon.pos_x - 10
	// check if character is right of canyon
	var canyonRight = gameChar_x + 40/2 < (t_canyon.pos_x + 60 + t_canyon.width)
	
	if(onFloor && canyonLeft && canyonRight){
		isPlummeting = true;
		sound_fall.play();
	}
}

function drawCanyons(){
	for(var i = 0; i < canyon.length; i++){
		push();
			translate(canyon[i].pos_x, floorPos_y)

			// canyon
			fill(140, 87, 18);
			quad(0, 0,
				20, 140,
				20 + canyon[i].width, 140,
				40 + canyon[i].width, 0);

			// river
			fill(118, 192, 207);
			quad(20, 140,
				30, 150,
				10 + canyon[i].width, 150,
				20 + canyon[i].width, 140);

			// anchor
			// fill("red"); ellipse(0, 0, 5, 5);
		pop();
	}
}