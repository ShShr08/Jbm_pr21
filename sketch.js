var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var random_movement

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,190,30);
    block1.shapeColor = rgb(0,0,255);
    block2 = createSprite(300,580,190,30);
    block2.shapeColor= "red";
    block3 = createSprite(500,580,190,30);
    block3.shapeColor = "yellow";
    block4 = createSprite(700,580,190,30);
    block4.shapeColor = "green";
     
    ball = createSprite(random(20,750),random(0,400),40,40);
    ball.shapeColor = rgb(255,255,255);

    random_movement = Math.round(random(1,2));

    if(random_movement = 1){
        ball.velocityX = 4;
        ball.velocityY = 9;
    }
    if(random_movement = 2){
        ball.velocityX = -4;
        ball.velocityX = -9;
    }
    
    fill("black");
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor ="red";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor ="yellow";
        music.play();
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    drawSprites();

}
