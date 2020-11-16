var database;
var canvas;
var gameState;
var form, player, game;
var playerCount;
var allPlayers;

gameState = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start(); 
}

function draw(){
  background("white");
  if (playerCount===4) {
    game.updateState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
    
}
