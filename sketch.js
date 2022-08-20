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
function setup() {
  canvas=createCanvas(width,height);
  canvas.id("cnv");
  /// create targets//
  for(let i=0;i<5;i++){
   ;
    targets.push(new Target(random(2*PI),px,py,r));
  }
}

function draw() {
background(0);
  stroke("grey");
  strokeWeight(pointSize);
  point(px,py);

  //// parcour targets //////
  for(let i=0;i<targets.length;i++){
    targets[i].show();
  targets[i].update(0.1);

  }
  if(frameCount%300==0){
  random(targets).direction*=-1;
  }

  
}