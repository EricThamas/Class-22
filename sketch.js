var fixedrect,gameObject1;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup(){
  createCanvas(500,500);
  fixedrect = createSprite(200,200,50,80);
  movingrect= createSprite(300,200,80,50);
  fixedrect.shapeColor="green";
   movingrect.shapeColor="red";
  fixedrect.debug=true;
  movingrect.debug=true;

  gameObject1 = createSprite(30,50,50,80);
  gameObject1.shapeColor="white";
  gameObject2 = createSprite(150,50,50,80);
  gameObject2.shapeColor="cyan";
  gameObject3= createSprite(250,50,50,80);
  gameObject3.shapeColor="pink";
 gameObject4 = createSprite(320,50,50,80);
 gameObject4.shapeColor="purple";


}
function draw(){
    background(0,0,0);
    drawSprites();


    movingrect.x=World.mouseX;
    movingrect.y=World.mouseY;
  // we want to calculte the horizontal distnace // we are using distnce formula 
  //distance = x2-x1;)
  // width of fixedRext= 50 = 50/2= 25;
   // width of gameObject1= 80 =80/2 = 40; 
   // 25+40 = 65; 
   // fixedRect.x- gameObject1.x < fixedRect.width/2 + gameObject1.width/2
//console.log(gameObject1.x- fixedRect.x); 
//console.log(fixedrect.x- gameObject1.x);


if(isTouching(gameObject1,movingrect)){
  movingrect.shapeColor="blue";
  gameObject1.shapeColor="yellow";

}
else{
 movingrect.shapeColor="green";
  gameObject1.shapeColor="white";
   

}

}

function isTouching( Object1, Object2 ){

  if(Object1.x-Object2.x<Object2.width/2+Object1.width/2
    && Object2.x-Object1.x<Object2.width/2+Object1.width/2 
     &&Object1.y-Object2.y<Object2.height/2+Object1.height/2
       && Object2.y-Object1.y<Object2.height/2+Object1.height/2 ){
    return true;
   
   }
   else{
      return false;
   }

  }    