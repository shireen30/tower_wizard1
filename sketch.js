

var canvas;
var backgroundImage;
var knightImgL, knightImgR, towerImg, platformImg, fireballImg
var knight, tower
var platform1
var platformGroup
var magicdoorImg;
var magicdoor;
var magicdoorGroup;
function preload() {
knightImgL = loadImage("knight.png");
knightImgR = loadImage("knight2.png")
towerImg = loadImage("tower.jpg");
platformImg = loadImage("platform.png")
fireballImg = loadImage("fireball.png")
magicdoorImg=loadImage('magicdoor.png');
} 



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
tower = createSprite(windowWidth/2,windowHeight/2,50,50)
tower.addImage(towerImg);
tower.scale = 1.4
tower.velocityY=1;
knight = createSprite(windowWidth/2,windowHeight/2 ,50,50)
knight.addImage(knightImgR)
knight.addImage(knightImgL)
knight.scale = 0.5
platform1 = createSprite(windowWidth/2,windowHeight/2 + 50,250,20)
platform1.addImage(platformImg)
platform1.setCollider("rectangle",0,0,300,50)
platform1.lifetime = 600
platform1.debug=false;
knight.debug=false;
knight.setCollider("rectangle",0,0,200,350)
platformGroup = new Group()
magicdoorGroup=new Group();
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
//gravity
knight.velocityY+=0.4

if(keyDown("space"))
{
  console.log("space")
  knight.velocityY=-14
}

if(keyWentDown(UP_ARROW)){
  knight.velocityY=-5
}

knight.collide(platform1)
knight.collide(platformGroup)
spawnPlatforms();
spawnFireballs();

spawnDoors();

  drawSprites()
}

function spawnPlatforms(){
  var platform
  
  if(frameCount%240 == 0){
    var rand = Math.round(random(1,3))
    console.log(rand)
    if(rand == 1){
      platform = createSprite(200,windowHeight-windowHeight+10,200,20)
    }
    else if(rand == 2){
      platform = createSprite(windowWidth/2,windowHeight-windowHeight+10,200,20)
    }
    else{
      platform = createSprite(windowWidth-200,windowHeight-windowHeight+10,200,20)

    }
    
    platform.velocityY = 1
    platform.addImage(platformImg);
    platform.debug = false;
    platform.scale = 0.9
    platform.setCollider("rectangle",0,0,300,50)
    platform.lifetime = 750
    platformGroup.add(platform);

  }
}

function spawnDoors(){
  if(frameCount%300==0){
    magicdoor=createSprite(Math.round(random(200,windowWidth-250)),100);
    magicdoor.addImage(magicdoorImg);
    magicdoor.velocityY=1;
    magicdoor.scale=0.7;
    magicdoor.lifetime=300;
    magicdoorGroup.add(magicdoor)
    knight.depth=magicdoor.depth+1;

  }

}
function spawnFireballs(){
  var fireball

  if(frameCount%400 == 0){
    fireball = createSprite(Math.round(random(200,windowWidth-250)),windowHeight-windowHeight+10);
    fireball.addImage(fireballImg);
    fireball.scale = 0.5
    fireball.velocityY = 15
  }
}
