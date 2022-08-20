function Target(t,cx,cy,r){
this.centerx=cx;
this.centery=cy;
this.angle=t;
this.raduis=r;
this.direction=1;
this.show=()=>{
    stroke("tomato");
    strokeWeight(20);
let a=this.raduis*cos(this.angle)+this.centerx;
let b=this.raduis*sin(this.angle)+this.centery;
    point(a,b);
   

}
this.update=(speed)=>{
    this.angle+=speed*this.direction;
    
}
}