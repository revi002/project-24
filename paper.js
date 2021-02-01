class Paper
{
	constructor(x,y,r)
	{
		var options={
restitution:0.3,
friction:0.5,
density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x,this.y, this.r/2,  options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}