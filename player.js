function Player(x,y){
    this.y=y;
    this.x=x;
    this.tr=8;
    this.w=10;
    this.h=40;
    this.go=false;
    this.vilocity=0;
    this.speed=10; 
    this.direction=1;
    this.show=()=>{
        fill ("gray");
        noStroke();
        rect (this.x,this.y,this.w,this.h);
        triangle(this.x+this.tr+this.w,this.y,this.x-this.tr,this.y,this.x+this.w/2,this.y-this.tr);
          if(this.go){
             this.vilocity+=this.speed;
             this.y-=this.vilocity*this.direction;
          }
    }
 

}