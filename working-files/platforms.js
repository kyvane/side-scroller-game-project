function setupPlatforms(){
	platforms = [];
	platforms.push(createPlatform(700, floorPos_y-80, 100));
	platforms.push(createPlatform(1200, floorPos_y-110, 150));
	platforms.push(createPlatform(1400, floorPos_y-200, 300))
	platforms.push(createPlatform(2700, floorPos_y-80, 160));
}

function Platform(x, y, length){
	this.x = x;
	this.y = y-1;
	this.length = length;
	this.draw = function(){
		fill(105, 75, 5);
		rect(this.x + 2, this.y + 3, this.length - 4, 13, 4);
		fill(166, 106, 28);
		rect(this.x, this.y, this.length, 8, 2);
	}

	this.checkContact = function(gc_x, gc_y){
		if(gc_x + 20 > this.x &&
			gc_x < this.x + 20 + this.length){
				var d = this.y - gc_y;
				if(d >= 0 && d < 1){
					console.log("on platform");
					return true
				}
			}
			return false;
	}
}

function createPlatform(x, y, length, width){
	return new Platform(x, y, length, width);
}

function drawPlatforms(){
	for(var i=0; i<platforms.length; i++){
		platforms[i].draw();
	}
}

function checkIf_CharIsOnAnyPlatforms(){
	if(isFalling){
		var isContact = false;
		onPlatform = false;
		for(var i=0; i<platforms.length; i++){
			isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
			if(isContact){
				onPlatform = true;
				break;
			}
		}
		if(!isContact){
			gameChar_y += 3;
		}
	}
}