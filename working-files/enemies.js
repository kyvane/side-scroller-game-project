function setupEnemies(){
    enemies = []
    enemies.push(new Enemy(220, floorPos_y, 100));
    enemies.push(new Enemy(1050, floorPos_y, 100));
    enemies.push(new Enemy(2500, floorPos_y, 300));
    enemies.push(new Enemy(3450, floorPos_y, 240));
}

function Enemy(x, y, range){
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.inc = 1;

    this.update = function(){
        this.currentX += this.inc;
        if(this.currentX >= this.x + this.range){
            this.inc = -0.7;
        }else if(this.currentX < this.x){
            this.inc = 0.7;
        }
    }

    this.draw = function(){
        this.update()
        push()
            translate(this.currentX, this.y);
            fill(255);
            // body
            fill(136, 212, 74);
            rect(-25, 0, 50, -30, 5, 5, 20, 20);
            // eyes
            fill(255);
            ellipse(-10, -15, 15);
            ellipse(10,  -15, 15);
            fill(31, 61, 7);
            ellipse(-10, -15, 9);
            ellipse(10,  -15, 9);
             // eyebrows
            beginShape();  
                vertex(-25, -32);
                vertex(-2, -23);
                vertex(-2, -19);
                vertex(-25, -24)
            endShape();
            beginShape();
            vertex(2, -23);
                vertex(25, -32);
                vertex(25, -24);
                vertex(2, -19)
            endShape();
        pop();
    };

    this.checkContact = function(gc_x, gc_y){
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        if(d < 50){
            return true;
        }
        return false;
    }
}