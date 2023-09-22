class Bubble{
    constructor(x,y){
       
       this.pos = createVector(x,y);
       this.size = 20;
       this.pos.x = random(width);
       this.pos.y = random(height);
      this.pos.hast = -2
  
      }
      
      bubbles(){
      //  this.pos = random()
        
          this.pos.x = this.pos.x +=random(-2,2);
      this.pos.y = this.pos.y += this.pos.hast
        
      ellipse(this.pos.x,this.pos.y,this.size);    
      
        
        
        
         this.pos.add(this.vel);
       
       if (this.pos.x < -10){
  this.pos.x = width-10;       
  
       }
      
      if (this.pos.x > width+10){
  this.pos.x = 10;   
  
       }
       
      if (this.pos.y < -10){
  this.pos.y = height;       
  
       }
      if (this.pos.y > height+10){
  this.pos.y = 0;       
  
       }
      
      }
      
      
      
      }