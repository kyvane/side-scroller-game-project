/*
audio sourced from freesound.org
*/

var gameChar_x;
var gameChar_world_x;
var gameChar_y;
var floorPos_y;
var gameOver;

function setup(){
	pixelDensity(2);
	createCanvas(1200, 600);
	noStroke();
	lives = 3;
	gameOver = false;
	sound_bgm.loop();
	init();
}

function init(){
	floorPos_y = height * 3/4;
	gameChar_x = 400
	gameChar_y = floorPos_y;

	setupScene();
	setupPlatforms();
	setupCollectables();
	setupEnemies();

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	onPlatform = false;

	gameScore = 0
	campfire = {isReached: false, x_pos: 3800}

	angleMode(DEGREES);
	cameraPosX = 0;
}

function preload(){
	soundFormats("mp3", "wav");
	sound_bgm = loadSound("audio assets/bgm.mp3")
	sound_bgm.setVolume(0.03);
	sound_walk = loadSound("audio assets/walk.wav")
	sound_walk.setVolume(0.4);
	sound_collect = loadSound("audio assets/collect.wav")
	sound_collect.setVolume(0.2);
	sound_jump = loadSound("audio assets/jump.wav")
	sound_jump.setVolume(0.2);
	sound_fall = loadSound("audio assets/fall.wav")
	sound_fall.setVolume(0.2);
}

function draw()
{
	renderSky();
	renderGround();

	//background scroll
	cameraPosX = gameChar_x - width/2;
	push();
	translate(-cameraPosX, 0);

	drawBGclouds();
	drawMountains();
	drawTrees();
	renderCanyons();
	drawPlatforms();
	renderCampfire();
	renderCollectables();

	// prevent from going leftmost
	renderBlockade();

	if(isLeft && onPlatform){
		movingLeft();
	}else if(isRight && onPlatform){
		movingRight();
	}else if(isLeft && isFalling){
		fallingLeft();
	}else if(isRight && isFalling){
		fallingRight();
	}else if(isLeft){
		movingLeft();
	}else if(isRight){
		movingRight();
	}else if(onPlatform){
		notMoving()
	}else if(isFalling || isPlummeting){
		isFallingDown();
	}else{
		notMoving();
	}

	// render enemy, check for contact
	for(var i=0; i<enemies.length; i++){
		enemies[i].draw();
		var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);
		if(isContact == true){
			if(lives > 0){
				lives -= 1;
				init();
				break;
			}
		}
	}
	
	pop();

	drawSun();

	push();
	translate(-cameraPosX, 0);
	drawFGclouds();
	pop();
	
	// game over -- lose
	if(lives < 1){
		gameLose();
        return;
    }

	// game over -- win
    if(campfire.isReached == true){
		gameWin();
		return;
    }

	renderScoreboard();
	renderLifeTokens();



	/*			interaction code			*/

	// moves character left and right
	if(isLeft == true && gameChar_x > 0){
		gameChar_x -= 6;
	} else if(isRight == true){
		gameChar_x += 6;
	}

	// make character fall
	if(gameChar_y < floorPos_y){
		var isContact = false;
		for(var i=0; i<platforms.length; i++){
			if(platforms[i].checkContact(gameChar_x,gameChar_y) == true){
				isContact = true;
				isFalling = false;
				break;
			}
		}
		if(isContact == false){
			gameChar_y += 3;
			isFalling = true;
		}
	} else{
		isFalling = false;
	}

	// makes character fall down canyon
	if(isPlummeting == true){
		isFalling = true;
		gameChar_y += 10;
		checkIsPlayerDead();
		return;
	}

	checkOnCanyon();

	// check if character reaches campfire
	if(campfire.isReached == false){
		checkCampfire();
	}
}

function keyPressed(){
	if(gameOver){
		return;
	}

	if(keyCode == 65 || keyCode == 37){
		console.log("move left")
		isLeft = true;
		sound_walk.loop();
	} else if(keyCode == 68 || keyCode == 39){
		console.log("move right")
		isRight = true;
		sound_walk.loop();
	} else if((keyCode == 87 || keyCode == 32 || keyCode == 38) && isFalling == false){
		console.log("jump")
		gameChar_y -= 150;
		sound_jump.play();
	}
}

function keyReleased(){
	if(gameOver){
		return;
	}

	if(keyCode == 65 || keyCode == 37){
		console.log("move left release")
		isLeft = false;
		sound_walk.stop();
	}

	if(keyCode == 68 || keyCode == 39){
		console.log("move right release")
		isRight = false;
		sound_walk.stop();
	}
}