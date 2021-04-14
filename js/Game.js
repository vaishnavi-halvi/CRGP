class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state,
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = new Car(175,200,car1_img);
    car2 = new Car(350,200,car2_img);
    car3 = new Car(525,200,car3_img);
    car4 = new Car(700,200,car4_img);
    cars = [car1, car2, car3, car4];
  }

  play(){
    
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;
      
     

      //x and y position of the cars
      var x ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       x = allPlayers[plr].x + 200*index;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        
        cars[index-1].body.position.x = x;
        cars[index-1].body.position.y = y;
        cars[index-1].display();
       

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipseMode(CENTER)
          ellipse(x,y,60,60);
       
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].body.position.y;
        }
       
      
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.x +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.x-=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
