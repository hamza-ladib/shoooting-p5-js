function Target(t,cx,cy,r){
this.centerx=cx;
this.centery=cy;
this.angle=t;
this.raduis=r;
this.direction=1;
this.speed=10;
this.vilocity=0;
this.a=0;
this.pr=20;
this.arrowx=100;
this.arrowy=1000;
this.b=0;
this.isHit=false;
this.show=()=>{
    stroke("tomato");
    strokeWeight(this.pr);
this.a=(!this.isHit)?(this.raduis*cos(this.angle)+this.centerx):this.arrowx;
this.b=(!this.isHit)?(this.raduis*sin(this.angle)+this.centery):this.arrowy;
point(this.a,this.b);
}
this.update=(speed)=>{
    this.angle+=speed*this.direction;  
}
this.hit=(player)=>{
    strokeWeight(1); 
    let d=dist(this.a,this.b,player.x+player.w/2,player.y-player.tr);
  return d<=this.pr/1.3;




}
}