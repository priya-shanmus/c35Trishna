var ball;
var database
var locOfBall
var position
function setup(){
    createCanvas(500,500);

database = firebase.database()


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


locOfBall = database.ref('ball/posiiton')
locOfBall.on('value',readPosition)


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}



function readPosition(info){
position = info.val()
ball.x = position.x
ball.y = position.y




}