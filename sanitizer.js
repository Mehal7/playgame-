class sanitizer extends BaseClass{
    constructor(x,y){
        super(x,y,100,20);
        this.image = loadImage("sprites/sanitizer.png");
        this.smokeImage = loadImage("sprites/this.smoke.png");
        this.trajectory=[];

    }
    display(){
        //this.body.positon.x=mouseX;
        //this.body.positon.y= mouseY;
       super.display();
       
       if(this.body.velcoity.x > 10&& this.body.position.x>200){
         var positon = [this.body.position.x, this.body.position.y];
         this.trajectory.push(position);  
       }
       for(var i=0;i,this.trajectory.length; i++){
           this.image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1]);

       }
    }

}