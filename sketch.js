var gameState = 0;

var player;

var allPlayers;

var playerArray = [];

var gamePlayer1;
var gamePlayer2;

var menu;

var playerCount = 0;

var playerPosition = 0;

var gameState = 0;

var newDisplayWidth=1000;
var newDisplayHeight=700;

var backgroundColor = "lightblue";

var ground;

function preload(){



}

function setup(){

    createCanvas(newDisplayWidth, newDisplayHeight);

    database = firebase.database();

    game = new Game();

    game.getState();

    game.start();

}

function draw(){

    background(backgroundColor);

    if(playerCount == 2){

        game.updateState(1)
        menu.hideDetails();
        game.play();

    }


}

