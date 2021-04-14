const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  
  ground1=Bodies.rectangle(displayWidth/2,displayHeight-20,displayWidth,20,{isStatic:true})

  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  Engine.update(engine);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    fill("brown")
    rectMode(CENTER);
  rect(ground1.position.x,ground1.position.y,displayWidth,20);

  }
  if(gameState === 2){
    game.end();
  }
}
