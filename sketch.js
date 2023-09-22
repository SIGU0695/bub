let mængdebubbles = 15;

let bubble = [];

function setup() {
  createCanvas(400, 400); 
    
for (let i = 0; i < mængdebubbles; i++) {
  
   bubble.push(new Bubble());
  }
  //
}

function draw() {
  background(220);
  
  for (let i = 0; i < mængdebubbles; i++){
    
bubble[i].bubbles();
   //hej
  }
  
}