var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var goldImg,silverImg,bronzeImg;
var allPlayers;
var finishedPlayers=0;
var passedFinish;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  goldImg=loadImage("../images/gold.png");
  silverImg=loadImage("../images/silver.png");
  bronzeImg=loadImage("../images/bronze.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
//please run refresh the browser hello teacher create new database and if the curriculum code is not working i will forward to cc team
//okay mam.....thq mam for all ur efforts


function draw(){
  if(playerCount === 4 && finishedPlayers==0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 && finishedPlayers==4){
  //  game.end();
  game.displayRanks();
  }
  if(finishedPlayers==4){
    game.update(2);
  }

}
