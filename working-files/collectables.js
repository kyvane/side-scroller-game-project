function setupCollectables(){
    collectables = [
        {pos_x: 152, pos_y: floorPos_y},
		{pos_x: 750, pos_y: floorPos_y-85},
        {pos_x: 970, pos_y: floorPos_y},
        {pos_x: 1230, pos_y: floorPos_y},
		{pos_x: 1260, pos_y: floorPos_y-115},
		{pos_x: 1550, pos_y: floorPos_y-205},
        {pos_x: 1630, pos_y: floorPos_y},
		{pos_x: 1800, pos_y: floorPos_y-100},
		{pos_x: 2000, pos_y: floorPos_y},
        {pos_x: 2440, pos_y: floorPos_y},
        {pos_x: 2600, pos_y: floorPos_y},
		{pos_x: 3000, pos_y: floorPos_y-170},
        {pos_x: 3160, pos_y: floorPos_y}
    ]
}


function checkCollectable(n_collectable){
	if(dist(gameChar_x, gameChar_y, n_collectable.pos_x, n_collectable.pos_y) < 40){
		n_collectable.isFound = true;
		gameScore += 10;
		sound_collect.play();
	}
}


function drawCollectable(n_collectable){
	if(!collectables.isFound){
		noStroke();
		push();
			translate(n_collectable.pos_x, n_collectable.pos_y);
			scale(1.0);
			
			fill(210, 183, 229)
			triangle(-20, -3, 0, -43, 0, 0);
			fill(193, 158, 224)
			triangle(20, -3, 0, -43, 0, 0);
			fill(177, 133, 219)
			triangle(-20, -3, 0, 7, 0, 0);
			fill(160, 108, 213)
			triangle(20, -3, 0, 7, 0, 0);
			
			// anchor
			// fill("red"); ellipse(0, 0, 5, 5);
		pop();
	}
}


function renderCollectables(){
    for(var i = 0; i < collectables.length; i++){
		if(!collectables[i].isFound){
			drawCollectable(collectables[i]);
			checkCollectable(collectables[i]);
		}
	}
}