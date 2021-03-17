class Game{
    constructor(){

    }

    getState() {
        
        var stateRef = database.ref('gameState');

        stateRef.on("value",function(data){
            
            gameState = data.val();

        })

    }

    updateState(count) {
        
        database.ref('/').update({

            gameState : count

        });

    }

    start() {

        if(gameState == 0){
            
            console.log("Start");

            player = new Player();

            gamePlayer1 = createSprite(displayWidth / 2 - 650, displayHeight / 2 - 200, 40, 40)

            gamePlayer2 = createSprite(displayWidth / 2 - 250, displayHeight / 2 - 200, 40, 40)

            gamePlayer1.shapeColor = "blue";

            gamePlayer2.shapeColor = "red";

            gamePlayer1.velocityY = 0;

            gamePlayer2.velocityY = 0;

            playerArray = [gamePlayer1, gamePlayer2];

            player.getCount();

            menu = new Form();

            menu.display();

        }
        
    }

    play() {

        player.getPlayerInfo();

        if(allPlayers!=undefined)

        {ground = createSprite(displayWidth / 2 - 450, displayHeight / 2, displayWidth / 2 - 200, 20);
        
        ground.shapeColor = "White";

        gamePlayer1.velocityY = gamePlayer1.velocityY + 1;

        gamePlayer2.velocityY = gamePlayer2.velocityY + 1;

        gamePlayer1.collide(ground);

        gamePlayer2.collide(ground);

        var index = 0;
        
        for(var plr in allPlayers){
            
            
            playerArray[index].x = allPlayers[plr].Position.x;

            playerArray[index].x = allPlayers[plr].Position.y;            
             
            if(index+1 == player.index){
                
                if (keyDown("space")){
            
                    playerArray[index].velocityY = -5;
                    
                    player.updatePosition(playerArray[index].x, playerArray[index].y);

                }
                
            }

            index++;
           
        }}

        drawSprites();

    }

}