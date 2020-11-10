var dog,happyDog;
var database;
var foodS;
var foodStock;
var Dog;
var database;
 

function preload(){

 
  happyDog = loadImage("images/dogImg.png");
  dog = loadImage("images/dogImg1.png");

 
}

function setup() {
  database = firebase.database();

  

  createCanvas(500, 500);
  Dog = createSprite(250,250,10,10);

  Dog.addImage(dog)
  Dog.scale = 0.3

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87) 

if(keyWentDown(UP_ARROW)) {
 writeStock(foodS)
 Dog.addImage(happyDog)
}


  drawSprites();
  //add styles here

}


function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  if(x<=0) {
    x = 0;
  }
  else {
    x = x - 1;
  }
  database.ref('Food').update({
    Food : x
  })
}


 



