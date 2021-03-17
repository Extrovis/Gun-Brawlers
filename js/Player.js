class Player{

    constructor(){

        this.name = null;       

        // this.rank = null;

        this.index = null;

        this.x = 0;
        this.y = 0;

    }

    getCount(){

        var countRef = database.ref('playerCount');
        countRef.on("value", function(data){

            playerCount = data.val();

        })
    }

    updateCount(parameter){

        database.ref('/').update({

            playerCount:parameter

        })
        
    }

    update(){
                      
        database.ref('Players/player' + this.index ).update({

            name : this.name,

        })

    }

    

    

    getPosition(){

        var str="Players/player"+this.index+"/Position";
        database.ref(str).on("value", function(data){

            var playerPosition = data.val();

            this.x = playerPosition.x;
            this.y = playerPosition.y;

        })
    }

    updatePosition(x,y){

        var str="Players/player"+this.index+"/Position";
        database.ref(str).update({

            x:this.x,
            y:this.y 

        })
        
    }

     getPlayerInfo(){
        var playerInfoRef = database.ref('Players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }

}