function Target(t,cx,cy,r){
this.centerx=cx;
this.centery=cy;
this.angle=t;
this.raduis=r;
this.direction=1;
this.speed=10;
this.vilocity=0;
this.a;
this.pr=20;
this.b;
this.show=()=>{
    stroke("tomato");
    strokeWeight(this.pr);
this.a=this.raduis*cos(this.angle)+this.centerx;
this.b=this.raduis*sin(this.angle)+this.centery;
    point(this.a,this.b); 
   

}
this.update=(speed)=>{
    this.angle+=speed*this.direction;
    
}
this.down=()=>{
    this.vilocity+=this.speed;
    this.b+=20;
}
this.hit=(player)=>{
    strokeWeight(1); 
  line(this.a,this.b,player.x+player.w/2,player.y-player.tr);
    let d=dist(this.a,this.b,player.x+player.w/2,player.y-player.tr);
  return d<=this.pr;




}
}