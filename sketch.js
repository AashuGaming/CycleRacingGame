var canva;
var MyQuizGame;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
  drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  text("CycleRacingGame : 1"+ MyQuizGame, 270, 30);

  stroke("black");
  textSize(20);
  fill("black");
  text("1 : Enter Your Name Here...name-" + 1, 100, 100);

  stroke("black");
  textSize(20);
  fill("black");
  text("2 : Name" + 2, 100, 120);

  stroke("black");
  textSize(20);
  fill("black");
  text("3 : Name" + 3, 100, 140);

  stroke("black");
  textSize(20);
  fill("black");
  text("4 : Name" + 4, 100, 160);

  stroke("black");
  textSize(20);
  fill("black");
  text("Play " + 1, 100, 200);

  stroke("black");
  textSize(20);
  fill("black");
  text("All the best" + 1, 400, 200);

  stroke("black");
  textSize(20);
  fill("black");
  text("Please Register to CarRacingGame" + 1, 170, 60);

  
}
