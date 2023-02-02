var canvas;
var sprite, spritesGroup;
var tower, ground;
var colorlist = ['aqua', 'red', 'blue', 'yellow', 'green', 'pink', 'skyblue', 'maroon', 'white'];
var bgimg;
var score;

function preload() {
    bg = loadImage("assets/bgimg.jpg");
}

function setup() {
    createCanvas(1200, 600);

    bgr = createSprite(750, 340);
    bgr.addImage("bg", bg);
    bgr.scale = 4

    // CREATED OBJECT
    sp = createSprite(750, 150, 30, 30);

    // CREATED GROUP AND SOME P5.JS DOM CODE
    spritesGroup = new Group();
    heading = createElement("h1");
    score = createElement("h2");

    score = 0;
}

function draw() {
    background("aqua");

    //INFINTELY BG
    if (bgr.x < 0) {
        bgr.x = bgr.width / 2;
    }

    //CONDTION FOR CONTROL BG SPEED
    if (keyDown("1")) {
        bgr.velocityX = -10;
    } else if (keyDown("2")) {
        bgr.velocityX = -15;
    } else if (keyDown("3")) {
        bgr.velocityX = -25;
    } else if (keyDown("4")) {
        bgr.velocityX = -60;
    } else if (keyDown("0")) {
        bgr.velocityX = 0;
    }

    //CONDITION FOR SP 
    if (sp.x >= 1190) {
        console.log("GAMEOVER")
    }


    //jump when the space key is pressed
    if (keyDown("space") && sp.y >= 300) {
        sp.velocityY = -12;
    }

    //GRAVITY FOR OBJECT 
    sp.velocityY = sp.velocityY + 0.8
    sp.collide(spritesGroup);

    //CREATED HEADING FOR MOTIVATION
    heading.class("heading")
    heading.html("HI THIS GAME MADE BY KULDEEP TIGER")
    heading.style('color:red');
    heading.style('fontSize:30px')
    heading.position(150, 20)

    // //SCORING
    // score.class("score");
    // score.html("Score:" + score);
    // score.position(170, 30);

    //scoring
    score = score + Math.round(getFrameRate() / 60);

    spawnGround();
    drawSprites();
    textSize(50);
    fill("aqua");
    text("Score: " + score, 140, 100);
}
function spawnGround() {
    if (frameCount % 35 === 0) {
        sprite = createSprite(width / 2, height / 2 + 220, 300, 150);
        sprite.x = Math.round(random(-10, 10))
        sprite.shapeColor = random(colorlist);
        sprite.velocityX = 15;
        sprite.lifetime = 600;
        spritesGroup.add(sprite);
    }
}
