var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0e6d5280-1daf-41c7-8ef3-c1748d4c40a9"],"propsByKey":{"0e6d5280-1daf-41c7-8ef3-c1748d4c40a9":{"name":"retroship_14_1","sourceUrl":null,"frameSize":{"x":283,"y":334},"frameCount":1,"looping":true,"frameDelay":12,"version":"uuc8a2hbDk8HhiBzvjsyJPB4vTSc0kfM","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":334},"rootRelativePath":"assets/0e6d5280-1daf-41c7-8ef3-c1748d4c40a9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating computer paddle and player paddle
var playerspaddle = createSprite(350, 201, 20, 90);
var computerspaddle = createSprite(48, 204, 20, 90);
var ball = createSprite(200, 200, 20, 20);




function draw() {
  computerspaddle.y = ball.y;
  createEdgeSprites();
  background("yellow");
  drawSprites();
  ball.bounceOff(computerspaddle);
  ball.bounceOff(playerspaddle);
  
  //making player paddle controlable
  if (keyDown("up")) {
    playerspaddle.y = playerspaddle.y-15;
  }
  if (keyDown("down")) {
    playerspaddle.y = playerspaddle.y+15;
  }
  ball.bounceOff(bottomEdge);
  ball.bounceOff(topEdge);
  if (keyDown("space")) {
    ball.velocityX = -6;
    ball.velocityY = 13;
  }
 
  
  playerspaddle.collide(topEdge);
  playerspaddle.collide(bottomEdge);
  computerspaddle.collide(topEdge);
  computerspaddle.collide(bottomEdge);
  ball.bounceOff(topEdge);
 
  //setting text 
  if (ball.isTouching(rightEdge)) {
  ball.velocityX = 0;
  ball.velocityY = 0;
  textSize(46);
  text("YOU LOOSE", 66, 210);
  }
  
}
//setting playerpaddle colour green,computerpaddle to blue and ball to black
playerspaddle.shapeColor = "green";
computerspaddle.shapeColor = "blue";
ball.shapeColor = "black";

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
