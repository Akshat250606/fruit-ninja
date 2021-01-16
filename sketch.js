var sword,swordImage;

function setup(){
   createCanvas(400,400);
   
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage)
  sword.scale = 0.5
  
  fruitGroup = new Group()
  
  

  
}

function preload(){
  
  swordImage = loadImage("sword.png")
  
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  
  
  
}

function draw(){
  background("white")
  
  sword.x = World.mouseX
  sword.y = World.mouseY
  
  fruits()
drawSprites();
}
function fruits(){
  if(World.frameCount%80 === 0){
  fruit = createSprite(400,200,20,20);
  fruit.scale = 0.2
  //fruit.debug = true;
  
    r = Math.round(random(1,4));
  if(r == 1) {
    fruit.addImage(fruit1);
  } else if(r == 2) {
    fruit.addImage(fruit2);
  } else if(r == 3) {
    fruit.addImage(fruit3);
  } else  {
    fruit.addImage(fruit4);
  }
  
  fruit.y = Math.round(random(50,340));
  
  fruit.velocityX = -7;
  fruit.setLifetime = 100;
  
  fruitGroup.add(fruit);
  }
}
    
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
