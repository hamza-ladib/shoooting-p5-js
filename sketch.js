let x=200;
let y=10;
let r=100;
let t=0;
let canvas;
let width=500;
let height=600;
let pointSize=20;
let px=width/2;
let py=220;
let targets=[];
let target;
let hittedTarget=[];
let hittedArrows=[];
let player;
let wall=20;
let ph=60;
let n=0;
let n1=0;
let n2=0;
let dir=1;
let score=0;
let  moves=20;
let maxscore=10;

function setup() {
  canvas=createCanvas(width,height);
  canvas.id("cnv");
  /// create targets//
  alert("try to hit all balls with arrows using space bar");
  ////////////////////
  for(let i=0;i<maxscore ;i++){
     target =new Target(random(2*PI),px,py,r);
    targets.push(target);
    
    
  }
  //// create player //////
 player=new Player(width/2,height-ph);

}
function draw() {
background(0);
/**** CREATE WALL***/
fill("#3E2723");
rect (0,0,width,wall);
/////////////////////////
textSize(35);
fill(0, 102, 153);
text ("score : "+score,10,height-10);
text ("moves : "+moves,1.9*width/3,height-10);
/////////////////////
  stroke("grey");
  strokeWeight(pointSize);
  point(px,py);

  //// parcour targets //////
  for(let i=targets.length-1;i>=0;i--){ 
     targets[i].show();  
    
   if(!targets[i].hit(player)) targets[i].update(0.1);
    else {
      targets[i].isHit=true;
      hittedTarget.push(targets[i]);
       n=(dir==1)?n1:n2;
      player.x=player.x-n; 
      if(dir==1){
         n1+=40;
         dir=-1;}
      else{
        n2-=40;
         dir=1;
      }
    


     

      
      hittedArrows.push(player);
      targets.splice(i,1);
      player=new Player(width/2,height-ph);
      score++;
     
    }
    
  }  
 
  for(let i=0;i<hittedTarget.length;i++){
    hittedArrows[i].show();
    hittedTarget[i].show();
    hittedTarget[i].arrowy=hittedArrows[i].y-hittedArrows[i].tr;
    hittedTarget[i].arrowx=hittedArrows[i].x+hittedArrows[i].w/2;
    if(hittedTarget[i].arrowy<=hittedTarget[i].pr+wall){
      hittedArrows[i].y=hittedTarget[i].pr+wall;
      hittedArrows[i].vilocity=0;
    }
  }
  if(player.y<-player.h*2){
    player=new Player(width/2,height-ph);
  }
  

  player.show();
  if(moves<=0){
    alert("you lost");
    noLoop();
 }

  if(score>=maxscore-1){
     alert("you win");
     noLoop();
  }

 
  if(frameCount%300==0){
  random(targets).direction*=-1;
  }

}
function keyPressed(){
   if(keyCode==32){
    player.go=true;
    moves--;
   }
}
