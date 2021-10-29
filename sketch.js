var canvas;
var backgroundImage;
var knightImgL, knightImgR, towerImg
var knight, tower
var platform1, platform2, platform3

function preload() {
knightImgL = loadImage("knight.png");
knightImgR = loadImage("knight2.png")
towerImg = loadImage("tower.jpg");
} 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
tower = createSprite(windowWidth/2,windowHeight/2,50,50)
tower.addImage(towerImg);
tower.velocityY=1;
knight = createSprite(windowWidth - 350,windowHeight - 110,50,50)
knight.addImage(knightImgR)
knight.addImage(knightImgL)
knight.scale = 0.5
platform1 = createSprite(windowWidth - 400,windowHeight - 20,250,20)
//platform1.debug=true;
knight.debug=false;
knight.setCollider("rectangle",0,0,200,350)
platform2 = createSprite(windowWidth/2,windowHeight/2 + 150,200,20)
platform3 = createSprite(windowWidth/2 - 370,windowHeight/2,250,20)

}

function draw() {
 background("black");
//console.log(mouseX,mouseY)

if(keyIsDown(LEFT_ARROW)){
knight.position.x -=5
//console.log("hello")
knight.addImage(knightImgL)
}
//reset the tower
if(tower.y>windowHeight/1.5){
  tower.y=windowHeight/2
}
if(keyIsDown(RIGHT_ARROW)){
  knight.position.x+=5
  knight.addImage(knightImgR)
}
knight.velocityY+=0.4

if(keyDown("space"))
{
  console.log("space")
  knight.velocityY=-7
}

knight.collide(platform1)
knight.collide(platform2)
knight.collide(platform3)
//gravity
  drawSprites()
}

