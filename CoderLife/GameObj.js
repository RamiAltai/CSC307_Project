class GameObject{
    constructor(x,y,height, width, imgName,xDir,yDir,speed,alive,max) {
        this.x = x; 
        this.y = y;
        this.height = height;
        this.width = width;
        this.image = new Image();
        this.image.src = imgName;
        this.xDir = xDir;
        this.yDir = yDir;
        this.speed = 10;
        this.alive = alive;
        this.max = max;
        this.C = 0;
	}
  	draw(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }   
    move(e){
        if (e.keyCode == 37){
          	 // move left 
            this.x = this.x - this.speed;
        }
        if (e.keyCode == 39){
         		 // move right  
         		 this.x = this.x + this.speed;
  		}

	    if (this.x < 0){
        	   this.x = canvas.width + 8; 
        }else if (this.x >= canvas.width){
                  this.x = - 8;
        }
    } 
    checkCollision(obj){
       if(this.x + this.width  > obj.x  &&
          this.x < (obj.x + obj.width)  &&
          this.y + this.height > obj.y  && 
          this.y < (obj.y + obj.height) &&
          this.alive == true) 
       {
        audio.play();
        score++;
        obj.C++;
        obj.x = -200;
        obj.y = -200;

       }
    }
    checkCollisionBomb(obj){
       if(this.x + this.width  > obj.x  &&
          this.x < (obj.x + obj.width)  &&
          this.y + this.height > obj.y  && 
          this.y < (obj.y + obj.height) &&
          this.alive == true) 
       {
        score = score - 2;
        lives--;
        obj.x = -200;
        obj.y = -200;

       }
    }
    moveRight(){
	       this.x = this.x + this.speed;      
        if (this.x >= canvas.width){
            this.x = - this.width;
        }
    }
    moveLeft(){
        this.x = this.x - this.speed;
        if (this.x <= 0){
            this.x = canvas.width + this.width;
        }
    }
}

