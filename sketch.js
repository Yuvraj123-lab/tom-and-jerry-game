var tom,tomImg,tomImg2,jerry,jerryImg,jerryImg2,back_ground,bgImg;

function preload() 
{
    //load the images here
    bgImg=loadImage("images/garden.png");
    tomImg=loadImage("images/cat5.png");
    jerryImg=loadImage("images/mouse1.png");

    //load animation here
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup()
{
    createCanvas(600,600);
    //create tom and jerry sprites here
    tom=createSprite(550,550,10,10);
    tom.addImage(tomImg);
    tom.scale=0.6;

    jerry=createSprite(100,500);
    jerry.addImage(jerryImg);
    jerry.scale=0.1;

    //creating background sprite here
    back_ground=createSprite(300,300);
    back_ground.addImage(bgImg);
    back_ground.scale=background.scale+0.9;

    
}

function draw()
{
    keyPressed();
    console.log(tom.width,tom.height)
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <= tom.width/2+jerry.width/2)
      {
           tom.velocityX=0;
           if(keyDown("space"))
  {
      tom.velocityX=-3;
      tom.addAnimation("running",tomImg2);
  }
      }
    // if(tom.isTouching(jerry)){
        //tom.velocityX=2;
       // console.log(tom.width,tom.height)
   //  }

    
    back_ground.depth=tom.depth;
    tom.depth=tom.depth+3;

    back_ground.depth=jerry.depth;
    jerry.depth=jerry.depth+1
    drawSprites();
}
//d

 


function keyPressed()
{

  //For moving and changing animation write code here
  //if(keyDown("space"))
 // {
   //   tom.velocityX=-3;
    //  tom.addAnimation("running",tomImg2);
 // }

}