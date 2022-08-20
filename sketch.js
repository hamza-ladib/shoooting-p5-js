let x=200;
let y=10;
let r=100;
let t=0;
let canvas;
let width=500;
let height=500;
let pointSize=20;
let px=width/2;
let py=120;
let targets=[];
let player;
function setup() {
  canvas=createCanvas(width,height);
  canvas.id("cnv");
  /// create targets//
  for(let i=0;i<5 ;i++){
   ;
    targets.push(new Target(random(2*PI),px,py,r));
  }
  //// create player //////
  player=new Player(width/2,height-60);

}

function draw() {
background(0);
  stroke("grey");
  strokeWeight(pointSize);
  point(px,py);

  //// parcour targets //////
  for(let i=0;i<targets.length;i++){
    
    targets[i].show();
    if(!targets[i].hit(player)){
        
     
     targets[i].update(0.1);
    }
    else  {
        //player.go=false;
        
    player.direction=-1;
    //targets[i].angle=0;
    //targets[i].down();
    }; 


  }
  player.show();
  if(frameCount%300==0){
  random(targets).direction*=-1;
  }

  
}
function keyPressed(){
   if(keyCode==32){
    player.go=true;
   }
}