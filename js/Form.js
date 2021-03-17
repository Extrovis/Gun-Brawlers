class Form{

    constructor(){

        this.title = createElement('h1');
        this.name = createInput('name');
        this.acceptName = createButton('Enter');
        this.wait = createElement('h1');

        //Guns
        this.ar = createButton('BUY');
        this.shotgun = createButton('BUY');
        this.sniper = createButton('BUY');

    }
    hideDetails(){
        this.wait.hide();
        backgroundColor = "#4A6367";
        
    }

    display(){

        this.title.html("Gun Brawlers");
        this.title.position(newDisplayWidth - 50, newDisplayHeight  - 700);

        this.name.position(newDisplayWidth - 50, newDisplayHeight / 2);

        this.acceptName.position(newDisplayWidth + 150, newDisplayHeight / 2);

        //Guns
        this.ar.position(newDisplayWidth - 50, newDisplayHeight / 2 + 100);
        this.shotgun.position(newDisplayWidth, newDisplayHeight / 2 + 100);
        this.sniper.position(newDisplayWidth + 85, newDisplayHeight / 2 + 100);
        
        this.acceptName.mousePressed(()=>{
            this.acceptName.hide();
            this.name.hide();     

            this.ar.hide();
            this.shotgun.hide();  
            this.sniper.hide(); 

            this.wait.position(newDisplayWidth - 150, newDisplayHeight / 2 - 50)
            this.wait.html("Please wait for game to begin . . .")

            player.name = this.name.value();
            playerCount++;
            player.index = playerCount;
            player.updateCount(player.index);
            player.update();

        })

    }

}