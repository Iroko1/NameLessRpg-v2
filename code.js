var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2455e487-bb94-472e-94ad-f48fb5e89846","49d04f9a-2fa3-40b4-afca-c2d7e431e7f1","63df60d7-3e83-4f03-bde9-f4f18a5d391c","ecb7d002-89aa-40f2-8aa9-53a63c66582b","cb3764f6-c7c9-49ee-9b91-b70cc40256ee","5807f35b-b71a-4754-a577-1164d0b73d24","e385f979-9f2e-49f1-b735-83216f659b5e","b9dd14b8-b9cc-4998-911b-5bde7d4f3f78","b993db40-a33b-49fa-9793-57c0ead82c47","dd790d55-f534-4acf-b3ec-544a05adb1d9","c193a35b-739c-4d2a-b880-3bd7d4cee179","c074525e-30a8-436d-8591-b29ead5ac98b","abf62aee-5f58-463f-8bb9-c21f111550b8","806acc01-60e7-43f4-b9c8-2646faf8fe11","cb21e46d-931f-40f3-be26-2e5940c28c78","ec435114-36d7-45a0-a3c1-de63f44e36ba","a40540ce-0cab-401b-bcfd-58678abf2dca","fe4818f8-5ca7-48e3-92b9-ea13328e4b3f","3b7f7b22-c3f6-4e84-9539-f41f03ec2f49","e643284c-2d36-48be-8550-95da93bda7eb"],"propsByKey":{"2455e487-bb94-472e-94ad-f48fb5e89846":{"name":"desert_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Y5bHlbzNzWJrwyznXBnHJZttfThNmval/category_backgrounds/background_desert.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y5bHlbzNzWJrwyznXBnHJZttfThNmval","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y5bHlbzNzWJrwyznXBnHJZttfThNmval/category_backgrounds/background_desert.png"},"49d04f9a-2fa3-40b4-afca-c2d7e431e7f1":{"name":"path","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"IjHragig.Ou1SEjSH9jPnrYF86XorPht","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/49d04f9a-2fa3-40b4-afca-c2d7e431e7f1.png"},"63df60d7-3e83-4f03-bde9-f4f18a5d391c":{"name":"wall","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"1zzZ0ob_JVwW6F4u4St0eQep4gD76I3v","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/63df60d7-3e83-4f03-bde9-f4f18a5d391c.png"},"ecb7d002-89aa-40f2-8aa9-53a63c66582b":{"name":"selector","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"dc0YX.yBJocXuGc8IsN5tB_QlfY0iV70","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/ecb7d002-89aa-40f2-8aa9-53a63c66582b.png"},"cb3764f6-c7c9-49ee-9b91-b70cc40256ee":{"name":"start booten","sourceUrl":null,"frameSize":{"x":58,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"AYCmJFgObJd0LndokdNZaPNRk9rIdWX2","categories":["environment"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":58},"rootRelativePath":"assets/cb3764f6-c7c9-49ee-9b91-b70cc40256ee.png"},"5807f35b-b71a-4754-a577-1164d0b73d24":{"name":"settings","sourceUrl":null,"frameSize":{"x":60,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"FBH0d4xImuX6l26I5XuHlGk8XO61EB7P","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":75},"rootRelativePath":"assets/5807f35b-b71a-4754-a577-1164d0b73d24.png"},"e385f979-9f2e-49f1-b735-83216f659b5e":{"name":"settingsMenu","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"q59unjXxcvHj3HBCiztHkebejSsp4QTq","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e385f979-9f2e-49f1-b735-83216f659b5e.png"},"b9dd14b8-b9cc-4998-911b-5bde7d4f3f78":{"name":"playerSpriteAnim","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"seG.aHPCP07sR9a5ROX7rscnl1wmZSHW","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/b9dd14b8-b9cc-4998-911b-5bde7d4f3f78.png"},"b993db40-a33b-49fa-9793-57c0ead82c47":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":176,"y":176},"frameCount":1,"looping":true,"frameDelay":12,"version":"kCSaca40vXH5zpgrcDQ7aHesRhtARD8H","loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":176},"rootRelativePath":"assets/b993db40-a33b-49fa-9793-57c0ead82c47.png"},"dd790d55-f534-4acf-b3ec-544a05adb1d9":{"name":"stone_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"B2.9G926xz_gjPZXBd3s8S0eVr2jScGh","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/dd790d55-f534-4acf-b3ec-544a05adb1d9.png"},"c193a35b-739c-4d2a-b880-3bd7d4cee179":{"name":"retroaliens_13_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"kul7p_d3v2RG_.XR_MUgU9pmEAZb_PYd","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/c193a35b-739c-4d2a-b880-3bd7d4cee179.png"},"c074525e-30a8-436d-8591-b29ead5ac98b":{"name":"retro_purple_burst_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"anLDTOgvkHio0jX7TvJPvlfYooYLAk7Y","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/c074525e-30a8-436d-8591-b29ead5ac98b.png"},"abf62aee-5f58-463f-8bb9-c21f111550b8":{"name":"retro_powerup_heart_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"3VuR0KdWt0SwiRDzSkdOXKWswdHt3p_N","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/abf62aee-5f58-463f-8bb9-c21f111550b8.png"},"806acc01-60e7-43f4-b9c8-2646faf8fe11":{"name":"retrocreature_02_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"vkb267eK7n40dxkD41BJ0pCOB2YGApSb","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/806acc01-60e7-43f4-b9c8-2646faf8fe11.png"},"cb21e46d-931f-40f3-be26-2e5940c28c78":{"name":"retroship_21_1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"yeiC8CySWfc2xedV5mG4c0WeSHnc0Xrs","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/cb21e46d-931f-40f3-be26-2e5940c28c78.png"},"ec435114-36d7-45a0-a3c1-de63f44e36ba":{"name":"retro_empty_heart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4YycY0FtYiajXj6AxYeMTjLwIWnsZJec/category_retro/retro_empty_heart.png","frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":2,"version":"4YycY0FtYiajXj6AxYeMTjLwIWnsZJec","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4YycY0FtYiajXj6AxYeMTjLwIWnsZJec/category_retro/retro_empty_heart.png"},"a40540ce-0cab-401b-bcfd-58678abf2dca":{"name":"retro_red_heart_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png","frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":2,"version":"NolfDXD9f49COunFY6Ops3IuWeUdWXbo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png"},"fe4818f8-5ca7-48e3-92b9-ea13328e4b3f":{"name":"retro_coin_1","sourceUrl":null,"frameSize":{"x":95,"y":113},"frameCount":1,"looping":true,"frameDelay":12,"version":"UuWaGiynPMRQTi5327d1EaojZUegn2OE","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":113},"rootRelativePath":"assets/fe4818f8-5ca7-48e3-92b9-ea13328e4b3f.png"},"3b7f7b22-c3f6-4e84-9539-f41f03ec2f49":{"name":"door","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"LgD7SA1Y2E6FW3KNyILBMVAW.pFZK4j4","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/3b7f7b22-c3f6-4e84-9539-f41f03ec2f49.png"},"e643284c-2d36-48be-8550-95da93bda7eb":{"name":"play","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"xSdKFOULKEfRyDzu9YF96.yksF8a7W4c","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/e643284c-2d36-48be-8550-95da93bda7eb.png"}}};
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

// ------ Matrix values set up ------- //
var _cell = 2;
var _room = 1;
var _door = 8;
var _not = [_cell,_room];
// -------- world/camera setup ------- //
camera.on();
camera.frameCount = 60;
//camera.x += -200;
//camera.y += -200;
//camera.zoom = 25/11;
// setup
drawSprites();
drawSprites();
var mapArray = [];
var worldSize = 50;
var roomSize;
var roomSizeMax = 7;
var randPos;
var roomCount = 100;
var rooms = [];
var createRoom = false;
var cp;
var playerSprite;
var difficulty = "easy";
var gameClass = "rouge";
var hearts = createGroup();






//Main Menu
var Main = createSprite(200,200,400,400);
var play = createSprite(200,150);
var settings = createSprite(200, 300);
var drawSpr = false;
var randNum;
var mos1;
var mosList = [];
settings.setAnimation("settings");
play.setAnimation("play");
Main.setAnimation("desert_1");
drawSprites();
textSize(20);
textAlign(CENTER,CENTER);
text("alpha 0.4.5",340,380);
stroke("red");
fill("red");
//textFont("Brush Script MT");
textSize(50);
textAlign(CENTER,CENTER);
text("NameLess Rpg",200,60);
var easyMode;
var hardMode;
var rougeMode;
var warriorMode;
var mageMode;
var backButton;
var start = true;
var menuTrue = false;
var render;
var spawnRoom;
var spawnx;
var spawny;
var exitx;
var exity;
var exit;
var player;
var control;
var breakOut = false;
var selector;
var selectorFrame;
var t;
var limit;
var walls = createGroup();
var count;
var wall,path,room,door;
var health = 20;
var blockList = createGroup();




function simplify(num,num2) { 
  var numOne = num,  
      numTwo = num2; 
  for (var i = Math.max(numOne, numTwo); i > 1; i--) { 
    if ((numOne % i == 0) && (numTwo % i == 0)) { 
      numOne /= i; 
      numTwo /= i; 
      count += 1;
    }
  }
  return [numOne,numTwo];
} 

function sleep(milliseconds) {
  var date = Date.now();
  var currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



function draw() {
  
  if (drawSpr) {
    background("black");
    drawSprites();
    fill("white");
    text("Health: "+ health ,camera.x+32,camera.y+80);
  }
  if (mouseIsOver(play) && mouseWentUp() && start) {
    background("black");
    menuTrue = false;
    textSize(75);
    textAlign(CENTER,CENTER);
    play.destroy();
    settings.destroy();
    Main.destroy();
    
    text("Loading...",200, 200);
    textSize(30);
    text("(hard may load slower)",200, 240);
    setTimeout(function() {createDungeon();
      if (breakOut) {
        background("white");
        Main.visible = true;
        play.visible = true;
        Main.setAnimation("desert_1");
        drawSprites();
        fill("red");
        textSize(50);
        textAlign(CENTER,CENTER);
        text("NameLess Rpg",200,60);
        menuTrue = false;
      }
      breakOut = false;
      spawnRoom = rooms.shift();
      for (var i = 0; i < mapArray.length;i++) {
        for (var i2 = 0; i2 <mapArray[i].length;i2++) {
          if (mapArray[i][i2] === 0) {
            wall = createSprite(i2*16+8,i*16+8,16,16);
            wall.setAnimation("wall");
            walls.add(wall);
            drawSprites();
          }
          if (mapArray[i][i2] === 1) {
            room = createSprite(i2*16+8,i*16+8,16,16);
            room.setAnimation("stone_1");
            drawSprites();
          }
          if (mapArray[i][i2] === 2) {
            path = createSprite(i2*16+8,i*16+8,16,16);
            path.setAnimation("path");
            drawSprites();
          }
          if (mapArray[i][i2] === 8) {
            path = createSprite(i2*16+8,i*16+8,16,16);
            door = createSprite(i2*16+8,i*16+8,16,16);
            path.setAnimation("path");
            door.setAnimation("door");
            walls.add(door);
            drawSprites();
          }
        }
      }
      
      if (difficulty === "easy") {
        for (i = 0;i<rooms.length;i++) {
          var roomPop = randomNumber(0,2);
          for ( var i2 = 0; i2 < roomPop;i2++) {
            var tempx = randomNumber(rooms[i].x,rooms[i].x+(rooms[i].xx-1));
            var tempy = randomNumber(rooms[i].y,rooms[i].y+(rooms[i].yy-1));
            mos1 = createSprite((tempx*16)+8,(tempy*16)+8,16,16);
            var randNumb = randomNumber(1,3);
            var type;
            var health;
            if (randNumb ==1) {
              mos1.setAnimation("retroaliens_13_1");
              type = 1;
              health = 3;
            } else if (randNumb == 2) {
              mos1.setAnimation("retrocreature_02_1");
              type = 2;
              health = 1;
            } else {
              mos1.setAnimation("retroship_21_1");
              type = 3;
              health = 2;
            }
            mosList.push({type:type,health:health,mos:mos1,pos:{x:Math.round((mos1.x-8)/16),y:Math.round((mos1.y-8)/16)}});
            
          }
          drawSprites(); 
        }
      }
      if (difficulty === "hard") {
        for (i = 0; i < rooms.length; i++) {
          var roomPop = randomNumber(1,3);
          for (var i2 = 0; i2 < roomPop; i2++) {
            var tempx = randomNumber(rooms[i].x, rooms[i].x+(rooms[i].xx-1));
            var tempy = randomNumber(rooms[i].y, rooms[i].y+(rooms[i].yy-1));
            mos1 = createSprite((tempx*16)+8,(tempy*16)+8,16,16);
            mosList.push({mos:mos1,pos:{x:Math.round((mos1.x-8)/16),y:Math.round((mos1.y-8)/16)}});
          }
        }
      }
      
      
      playerSprite = createSprite(spawnx+8,spawny+8);
      playerSprite.setAnimation("playerSpriteAnim");
      player = {pos:{x:spawnx+8,y:spawny+8},room: 0, health: 20};
      selectorFrame = createSprite(spawnx+8, spawny+8);
      selectorFrame.setAnimation("selector");
      selector = {pos:{x:(((player.pos.x-8)/16)-0.5),y:(((player.pos.y-8)/16)-0.5)},dir:"on"};
      camera.zoom = 25/11;
      camera.x = playerSprite.x;
      camera.y = playerSprite.y;
      limit = createSprite(playerSprite.x,playerSprite.y);
      limit.setAnimation("animation_1");
      drawSpr = true;
      control = true;
      sightCheck();
    }, 100);
    start = false;
  }


  if (control) {
    showMobileControls(true, true, true);
    if (keyWentUp("right")) {
      if (mapArray[Math.round(((player.pos.y-8)/16))][Math.round((((player.pos.x-8)/16)))+1] !== 0) {
        selectorFrame.x = player.pos.x+16;
        selectorFrame.y = player.pos.y;
        selector.dir = "right";
        drawSprites();
      }
    }
    if (keyWentUp("left")) {
      if (mapArray[Math.round(((player.pos.y-8)/16))][Math.round((((player.pos.x-8)/16)))-1] !== 0) {
        selectorFrame.x = player.pos.x-16;
        selectorFrame.y = player.pos.y;
        selector.dir = "left";
        drawSprites();
      }
    }
    if (keyWentUp("up")) {
      if (mapArray[Math.round(((player.pos.y-8)/16)-1)][Math.round((((player.pos.x-8)/16)))] !== 0) {
        selectorFrame.y = player.pos.y-16;
        selectorFrame.x = player.pos.x;
        selector.dir = "up";
        drawSprites();
      }
    }
    if (keyWentUp("down")) {
      if (mapArray[Math.round(((player.pos.y-8)/16)+1)][Math.round((((player.pos.x-8)/16)))] !== 0) {
        selectorFrame.y = player.pos.y+16;
        selectorFrame.x = player.pos.x;
        selector.dir = "down";
        drawSprites();
      }
    }
    if (keyWentUp("space")) {
      if (mosList.length == 0) {
        background("white");
        fill("black");
        text("YOU \nWIN", camera.x,camera.y);
        drawSpr = false;
      }
      if (mapArray[Math.round((selectorFrame.y-8)/16)][Math.round((selectorFrame.x-8)/16)] === 8) {
        mapArray[Math.round((selectorFrame.y-8)/16)][Math.round((selectorFrame.x-8)/16)] = 2;
        var pathChange = createSprite(selectorFrame.x,selectorFrame.y,16,16);
        pathChange.shapeColor = "white";
        pathChange.setAnimation("path");
        pathChange.depth = playerSprite.depth-1;
        for (var i = 0;i < walls.length;i++) {
          if(walls[i].isTouching(selectorFrame)) {
            walls[i].destroy();
          }
        }

        //selectorFrame.depth  = 0;
        pathChange.depth = playerSprite.depth-1;
        background("black");
        drawSprites();
      } else {
        for (var i = 0;i<mosList.length;i++) {
          if (selectorFrame.isTouching(mosList[i].mos)) {
            hearts.destroyEach();
            if (mosList[i].health == 1) {
              mosList[i].mos.destroy();
              mosList.splice(i,1);
              return 0;
            }
            if (mosList[i].health == 2) {
              var haelt = createSprite(mosList[i].mos.x - 5, mosList[i].mos.y + 6);
              haelt.setAnimation("retro_red_heart_1");
              haelt.scale = 0.05;
              hearts.add(haelt);
              haelt = createSprite(mosList[i].mos.x + 5, mosList[i].mos.y + 6);
              haelt.setAnimation("retro_empty_heart_1");
              haelt.scale = 0.05;
              hearts.add(haelt);
              mosList[i].health = 1;
              attack();
            }
            if (mosList[i].health == 3) {
              var haelt = createSprite(mosList[i].mos.x - 6, mosList[i].mos.y + 6);
              haelt.setAnimation("retro_red_heart_1");
              haelt.scale = 0.05;
              hearts.add(haelt);
              haelt = createSprite(mosList[i].mos.x, mosList[i].mos.y + 6);
              haelt.setAnimation("retro_red_heart_1");
              haelt.scale = 0.05;
              hearts.add(haelt);
              haelt = createSprite(mosList[i].mos.x + 6, mosList[i].mos.y + 6);
              haelt.setAnimation("retro_empty_heart_1");
              haelt.scale = 0.05;
              hearts.add(haelt);
              mosList[i].health = 2;
              attack();
            }
            
            return 0;
          }
        }
        playerSprite.x = selectorFrame.x;
        playerSprite.y = selectorFrame.y;
        player.pos = {x:selectorFrame.x,y:selectorFrame.y};
        limit.x = playerSprite.x;
        limit.y = playerSprite.y;
        camera.x = playerSprite.x; camera.y = playerSprite.y;
        sleep(100);
        //drawSprites();
        //background("black");
        //drawSprites();
        setTimeout(function() {Ai();},10);
        blockList.destroyEach();
        sightCheck();
      }
    }
  }

  
  
  function sightCheck() {
    blockList = createGroup();
    var px = playerSprite.x;
    var py = playerSprite.y;
    var mpx = (px-8)/16;
    var mpy = (py-8)/16;
    var sc = {x: mpx,y: mpy};
    var say = [];
    var sax = [];
    for (var i2 = 0;i2 < 9; i2++) {
      sax.push(0);
    }
    for (var i = 0; i < 9;i++) {
      say.push(sax);
    }
    
    say[4][4] = [0,{x: mpx, y: mpy}];
    // make for loop for 4 sides of diamond
    // get slope for line to check
    //5 units to get there(divide slope by 5)
    // round poses(get rid of any multiples)
    // check each block 
    // if obstacle then block remainder of poses
    // do to all blocks on perimiter (0,4)(1,3)(2,2)(3,1) Main set of blocks, put negs where needed
    
    
    // vars needed - slope, pos of divisions, rotation of cords, 
    
    
    // 0 Deg   (x,y) 
    // 90 Deg  (y,-x)
    // 180 Deg (-x,-y)
    // -90 Deg (-y,x)
    
    var block = false;
    var blocker;
    var check = [];
    for (i = 0; i < 4; i++) {
      for (i2 = 0; i2 < 4; i2++) {
        var ax = mpx; var ay = mpy;
        for (var i3 = 0; i3 <= 5; i3++) {
          var pos = [(mpx + i2) - (mpx), (mpy + 4-i2) - mpy];
          if (i == 1) {
            pos.reverse();
            mpos.reverse();
            pos[1] *= -1;
            mpos[1] *= -1;
          }
          if (i == 2) {
            pos[0] *= -1;
            pos[1] *= -1;
            mpos[0] *= -1;
            mpos[1] *= -1;
          }
          if (i == 3) {
            pos.reverse();
            mpos.reverse();
            pos[0] *= -1;
            mpos[0] *= -1;
          }
          var mpos = [pos[0]/5,pos[1]/5];
          ax += mpos[0]; ay += mpos[1];
          sc.x = Math.round(ax); sc.y = Math.round(ay);
          if (sc.y > 24){
            sc.y = 24;
          }
          if (sc.y < 0) {
            sc.y = 0;
          }
          if (sc.x > 24) {
            sc.x = 24;
          }
          if (sc.x < 0) {
            sc.x = 0;
          }
          if ((mapArray[sc.y][sc.x] == 0 || mapArray[sc.y][sc.x] == 8) && block == false) {
            block = true;
            check = [sc.x,sc.y];
            continue;
          }
          if (check[0] == sc.x && check[1] == sc.y) {
            continue;
          }
          if (block == true) {
            blocker = createSprite((sc.x*16)+8,(sc.y*16)+8,16,16);
            blocker.shapeColor = "black";
            blockList.add(blocker);
            drawSprites();
            
          }
        } 
        block = false;
        sc = {x: mpx,y: mpy};
      }
    }
  }

  function Ai() {
    //camera.zoom = 25/11;
    breakOut = false;
    var move = false;
    for (var i = 0; i<mosList.length;i++) {
      var sc = {x:(mosList[i].mos.x-8)/16,y:(mosList[i].mos.y-8)/16} ;
      var pPos = {x:((player.pos.x-8)/16),y:((player.pos.y-8)/16)};
      var slope = {rise:(pPos.y-sc.y),run:(pPos.x-sc.x)};
      if (Math.abs(slope.rise) + Math.abs(slope.run) < 5) {
      for (var i2 = 0; i2 < slope.rise;i2++) { // upwards check
        if (mapArray[sc.y+1][sc.x] === 1 || mapArray[sc.y+1][sc.x] === 2) {
          sc.y += 1;
          move = true;
          continue;
        } else {
          breakOut = true;
          break;
        }
      }
      for (i2 = 0; i2 > slope.rise; i2--) {// downwards check
        if (mapArray[sc.y-1][sc.x] === 1 || mapArray[sc.y-1][sc.x] === 2) {
          sc.y -= 1;
          move = true;
          continue;
        } else {
          breakOut = true;
          break;
        }
      }
      for (i2 = 0; i2 < slope.run; i2++) {// right check
        if (mapArray[sc.y][sc.x+1] === 1 || mapArray[sc.y][sc.x+1] === 2) {
          sc.x += 1;
          move = true;
          continue;
        } else {
          breakOut = true;
          break;
        }
      }
      for (i2 = 0; i2 > slope.run; i2--) {// left check
        if (mapArray[sc.y][sc.x-1] === 1 || mapArray[sc.y][sc.x-1] === 2) {
          sc.x -= 1;
          move = true;
          continue;
        } else {
          breakOut = true;
          break;
        }
      }
      if (breakOut) {
        breakOut = false;
        continue;
      }
      
      mosList[i].mos.depth = playerSprite.depth-1;
      if (slope.rise > 0 && move === true) {
        if (Math.abs(slope.rise) + Math.abs(slope.run) === 1) {
          attack();
          continue;
        }
        mosList[i].mos.y += 16;
        pPos = {x:((player.pos.x-8)/16),y:((player.pos.y-8)/16)};
        slope = {rise:(pPos.y-sc.y),run:(pPos.x-sc.x)};
      } else if (slope.rise < 0) {
        if (Math.abs(slope.rise) + Math.abs(slope.run) === 1) {
          attack();
          continue;
        }
        mosList[i].mos.y -= 16;
        pPos = {x:((player.pos.x-8)/16),y:((player.pos.y-8)/16)};
        slope = {rise:(pPos.y-sc.y),run:(pPos.x-sc.x)};
      } else if (slope.run > 0) {
        if (Math.abs(slope.rise) + Math.abs(slope.run) === 1) {
          attack();
          continue;
        }
        mosList[i].mos.x += 16;
        pPos = {x:((player.pos.x-8)/16),y:((player.pos.y-8)/16)};
        slope = {rise:(pPos.y-sc.y),run:(pPos.x-sc.x)};
      } else if (slope.run < 0) {
        if (Math.abs(slope.rise) + Math.abs(slope.run) === 1) {
          attack();
          continue;
        }
        mosList[i].mos.x -= 16;
        pPos = {x:((player.pos.x-8)/16),y:((player.pos.y-8)/16)};
        slope = {rise:(pPos.y-sc.y),run:(pPos.x-sc.x)};
      }
      move = false;
    }
    }
  }


  if (mouseIsOver(settings) && mouseWentUp()) {
    background("white");
    Main.setAnimation("settingsMenu");
    easyMode = createSprite(220,175,50,20);
    hardMode = createSprite(290,175, 50,20);
    rougeMode = createSprite(190,300,60,20);
    warriorMode = createSprite(260,300,60,20);
    mageMode = createSprite(330,300,50,20);
    backButton = createSprite(350,350,50,20);
    backButton;
    rougeMode.visible = false;
    warriorMode.visible = false;
    mageMode.visible = false;
    hardMode.visible = false;
    easyMode.visible = false;
    backButton.visible = false;
    settings.visible = false;
    play.visible = false;
    start = false;
    drawSprites();
    fill("white");
    textSize(60);
    textAlign(CENTER,CENTER);
    text("Settings", 200, 60);
    drawSpr = false;
    textSize(25);
    text("Difficulty:", 100, 175);
    text("Class:",100,300);
    textSize(20);
    text("Easy",220, 175);
    text("Hard",290, 175);
    text("Rouge",190,300);
    text("Warrior",260,300);
    text("Mage",330,300);
    text("Back",350,350);
    setTimeout(function() {menuTrue = true},10);
    drawMenuText();
  }
  
  if (mouseIsOver(backButton) && mouseWentUp()) {
    background("white");
    start = true;
    play.visible = true;
    settings.visible = true;
    Main.setAnimation("desert_1");
    drawSprites();
    fill("red");
    textSize(50);
    textAlign(CENTER,CENTER);
    text("NameLess Rpg",200,60);
    menuTrue = false;
  }
  
  if (mouseIsOver(easyMode) && mouseWentUp() && menuTrue === true) {
    difficulty = "easy";
    drawMenuText();
  }
  if (mouseIsOver(hardMode) && mouseWentUp() && menuTrue === true) {
    difficulty = "hard";
    drawMenuText();
  }
  if (mouseIsOver(rougeMode) && mouseWentUp() && menuTrue === true) {
    gameClass = "rouge";
    health = 20;
    drawMenuText();
  }
  if (mouseIsOver(warriorMode) && mouseWentUp() && menuTrue === true) {
    gameClass = "warrior";
    health = 40;
    drawMenuText();
  }
  if (mouseIsOver(mageMode) && mouseWentUp() && menuTrue === true) {
    gameClass = "mage";
    health = 10;
    drawMenuText();
  }
  
  
  
  function attack() {
    randNum = randomNumber(1,3);
    if (randNum === 1) {
      health -= 4;
    }
    if (health <= 0) {
      World.allSprites.destroyEach();
      control = false;
      drawSpr = false;
      camera.zoom = 1;
      camera.x = 200;
      camera.y = 200;
      background("red");
      textAlign(CENTER,CENTER);
      textSize(30);
      text("Game Over",200,200);
    }
  }
  
  
  
  
  function drawMenuText() {
    textSize(60);
    textAlign(CENTER,CENTER);
    fill("white");
    text("Settings", 200, 60);
    drawSpr = false;
    textSize(25);
    text("Difficulty:", 100, 175);
    text("Class:",100,300);
    textSize(20);
    if (difficulty === "easy") {
      fill(rgb(125, 207, 255));
      text("Easy",220, 175);
      fill("white");
    } else{
      text("Easy",220, 175);
    }
    if (difficulty === "hard") {
      fill(rgb(125, 207, 255));
      text("Hard",290, 175);
      fill("white");
    } else {
      text("Hard",290, 175);
    }
    if (gameClass === "rouge") {
      fill(rgb(125, 207, 255));
      text("Rouge",190, 300);
      fill("white");
    } else {
      text("Rouge",190, 300);
    }
    if (gameClass === "warrior") {
      fill(rgb(125, 207, 255));
      text("Warrior",260, 300);
      fill("white");
    } else {
      text("Warrior",260, 300);
    }
    if (gameClass === "mage") {
      fill(rgb(125, 207, 255));
      text("Mage",330, 300);
      fill("white");
    } else {
      text("Mage",330, 300);
    }
  }
  
  function updateLoad(amount) {
    if (amount === 10) {
        fill("white");
        text("REEEE",200,250);
        sleep(1000);
        drawSprites();
    }
  }
  
  
  


  function createDungeon() {
      // create the dungeon
      
      // some var setup
      if (difficulty === "easy") {
        worldSize = 25;
      } else {
        worldSize = 51;
        camera.zoom = 25/11;
      }
      //makes Matrix
      for (var i = 0; i < worldSize;i++) {
        mapArray.push([0]);
      }
      for (i = 0; i<worldSize;i++) {
        for (var i2 = 0;i2<worldSize-1;i2++) {
          mapArray[i].push(0);
        }
      }
      updateLoad(10);
      
      t = setTimeout(function() {
        breakOut = true;
        return 0;
      },30000);
      //makes random rooms
      for (var z =0; z < roomCount;z++) {
        do{
          createRoom = false;
          //makes the setup
          roomSize = {width:randomNumber(3,roomSizeMax),height:randomNumber(3,roomSizeMax)};
          randPos = {x:randomNumber(0, worldSize-1),y:randomNumber(0, worldSize-1)};
          while (roomSize.width%2 === 0) {
            roomSize.width = randomNumber(3,roomSizeMax);
          }
          while (roomSize.height%2 === 0) {
            roomSize.height = randomNumber(3,roomSizeMax);
          }
          while (randPos.x%2 === 0) {
            randPos.x = randomNumber(0,worldSize-1);
          }
          while (randPos.y%2 === 0) {
            randPos.y = randomNumber(0,worldSize-1);
          }
          //checks if within the bounderies
          if (randPos.x + roomSize.width-1 > worldSize-1 || randPos.y + roomSize.height > worldSize-1) {
            z += 1;
            continue;
          } 
          
          // checks perimiter for any other rooms
          for (i = 0; i <= roomSize.width;i++) {
            if (mapArray[randPos.y][randPos.x+i] === _room || mapArray[randPos.y+roomSize.height][randPos.x+i] === _room) {
              createRoom = true;
            }
          }
          for (i = 0; i<=roomSize.height;i++) {
            if (mapArray[randPos.y+i][randPos.x] === _room || mapArray[randPos.y+i][randPos.x+roomSize.width] === _room) {
              createRoom = true;
            }
          }
          //checks for room trys
          if (createRoom === true) {
            z += 1;
            continue;
          }
          if (z > roomCount) {
            break;
          }
          break;
        } while (true);
        if (z > roomCount) {
            break;
          }
        rooms.push({xx:roomSize.width,yy:roomSize.height,x:randPos.x,y:randPos.y});
        //maps the room to the matrix
        for (var a = 0; a < roomSize.height; a++) {
          for (i = 0; i < roomSize.width;i++) {
            mapArray[randPos.y+a][randPos.x + i] = _room;
          }
        }
      }
      
      
      // room populate
      
      randNum = randomNumber(0,rooms.length-1);
      spawnx = (rooms[0].x+rooms[0].xx/2+0.5)*16;
      spawny = (rooms[0].y+rooms[0].yy/2+0.5)*16;
      camera.x = spawnx;
      camera.y = spawny;
      exitx = (rooms[1].x+rooms[1].xx/2+0.5)*16;
      exity = (rooms[1].y+rooms[1].yy/2+0.5)*16;
      exit = createSprite(exitx,exity,16,16);
      exit.shapeColor = rgb(89, 89, 89);
      
      
      
      
      
      // Maze Algorithim
      // varible setup
      randPos.x = randomNumber(0,worldSize-1);  // random pos
      randPos.y = randomNumber(0,worldSize-1);  // ----------
      var dirArray = [];  // recursive back tracker
      var randDir = randomNumber(0,3);   //rand direction
      var randLength = randomNumber(1,5);   // random length
      
      
      // Random Position on The map
      while ( randPos.x%2 === 0 || randPos.y%2 === 0 || mapArray[randPos.y][randPos.x] === _room) {
        if ( randPos.x%2 === 0) {
          randPos.x = randomNumber(0,worldSize-1);
        }
        if (randPos.y%2 === 0) {
          randPos.y = randomNumber(0,worldSize-1);
        }
        if (mapArray[randPos.y][randPos.x] === _room) {
          randPos.x = randomNumber(0,worldSize-1);
          randPos.y = randomNumber(0,worldSize-1);
        }
      } 
      
      cp = {x:randPos.x,y:randPos.y};
      mapArray[cp.y][cp.x] = _cell;
      
      
      do {
        // get the direction it will move randomly
        while (true) {
          randDir = randomNumber(0,3);
          randDir = randomNumber(0,3);
          if (pathCheck() === false) {
            continue;
          } else if (pathCheck() === 0) { // checks if it can go in any direction
            // start recursive here   *check for directions is complete
            break;
          }
          if (randDir === 0 && mapArray[cp.y+2][cp.x] !== _room) {
            break;
          }
          if (randDir === 1 && mapArray[cp.y][cp.x+2] !== _room) {
            break;
          }
          if (randDir === 2 && mapArray[cp.y-2][cp.x] !== _room) {
            break;
          }
          if (randDir === 3 && mapArray[cp.y][cp.x-2] !== _room) {
            break;
          }
        }
        
        
        
        
        
        // restart start
        if (dirArray.length === 0 && recurse) {
          var stop;
          for (i = 1; i <= mapArray.length-2; i+=2) {
            for (var i2 = 1; i2 <= mapArray[i].length-2; i2+=2) {
              if (mapArray[i][i2] === 0) {
                cp.x = i2;
                cp.y = i;
                stop = false;
                recurse = false;
                break;
              } else {
                stop = true;
              }
            }
            if (mapArray[i][i2] === 0) {
              break;
            }
          }
          if (stop) {
            break;
          }
        }
        
        // recursive start
        if (pathCheck() === 0) {
          
          director(dirArray[dirArray.length-1]);
          dirArray.pop();
          continue;
        }
        
        
        
        
        
        
        //sets the length of the path
        randLength = randomNumber(1,2);
        randLength = randomNumber(1,2);
        randLength = randomNumber(1,2);
        // creates path and checks if there is nothing
        for (i = 0; i < randLength; i++) {
          if (randDir === 0 && pathCheck()) {
            cp.y += 1;
            mapArray[cp.y][cp.x] = _cell;
            cp.y += 1;
            mapArray[cp.y][cp.x] = _cell;
            dirArray.push(randDir);
            continue;
          }
          if (randDir === 1 && pathCheck()) {
            cp.x += 1;
            mapArray[cp.y][cp.x] = _cell;
            cp.x += 1;
            mapArray[cp.y][cp.x] = _cell;
            dirArray.push(randDir);
            continue;
          }
          if (randDir === 2 && pathCheck()) {
            cp.y -= 1;
            mapArray[cp.y][cp.x] = _cell;
            cp.y -= 1;
            mapArray[cp.y][cp.x] = _cell;
            dirArray.push(randDir);
            continue;
          }
          if (randDir === 3 && pathCheck()) {
            cp.x -= 1;
            mapArray[cp.y][cp.x] = _cell;
            cp.x -= 1;
            mapArray[cp.y][cp.x] = _cell;
            dirArray.push(randDir);
            continue;
          }
          break;
        }
        
        var recurse = true;
        
        
        
      } while (true);
      
      
      //door algorithim
      
      for (i = 0; i < rooms.length; i++) {
        if (rooms.length === i) {
          break;
        }
        // conditional for 2 doors
        if ((rooms[i].xx * rooms[i].yy) <= 27) {
          var tempArray = [];
          for (var i2 = 0; i2 < ((((rooms[i].xx/2)+0.5) * 2) + (((rooms[i].yy/2)+0.5) * 2))-4; i2++ ) {
            tempArray.push(0);
          }
          
          tempArray[randomNumber(0,tempArray.length-1)] = _door;
          tempArray[randomNumber(0,tempArray.length-1)] = _door;
          
          cp.x = rooms[i].x;
          cp.y = rooms[i].y;
          cp.xx = (rooms[i].xx/2)+0.5;
          cp.yy = (rooms[i].yy/2)+0.5;
          
          
          for (var i3 = 0; i3 < tempArray.length; i3++) {
            for (var i4 = 0; i4 < cp.xx-1;i4++) {
              if (tempArray[0] === 8 && cp.y-1 !== 0) {
                mapArray[cp.y-1][cp.x] = 8;
                cp.x += 2;
              } else {
                cp.x += 2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }

              tempArray.shift();
            }
            for (var i4 = 0; i4 < cp.yy-1;i4++) {
              if(tempArray[0] === 8 && cp.x+1 !== worldSize-1) {
                mapArray[cp.y][cp.x+1] = 8;
                cp.y += 2;
              } else {
                cp.y +=2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
            for (var i4 = 0; i4 < cp.xx-1;i4++) {
              if(tempArray[0] === 8 && cp.y+1 !== worldSize-1) {
                mapArray[cp.y+1][cp.x] = 8;
                cp.x -= 2;
              } else {
                cp.x -= 2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
            for (var i4 = 0; i4 < cp.yy-1;i4++) {
              if (tempArray[0] === 8 && cp.x-1 !== 0) {
                mapArray[cp.y][cp.x-1] = 8;
                cp.y -= 2;
              } else {
                cp.y -= 2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
          }
        }
        if ((rooms[i].xx * rooms[i].yy) >= 28) {
          var tempArray = [];
          for (var i2 = 0; i2 < ((((rooms[i].xx/2)+0.5) * 2) + (((rooms[i].yy/2)+0.5) * 2))-4; i2++ ) {
            tempArray.push(0);
          }
          
          tempArray[randomNumber(0,tempArray.length-1)] = _door;
          tempArray[randomNumber(0,tempArray.length-1)] = _door;
          tempArray[randomNumber(0,tempArray.length-1)] = _door;
          
          cp.x = rooms[i].x;
          cp.y = rooms[i].y;
          cp.xx = (rooms[i].xx/2)+0.5;
          cp.yy = (rooms[i].yy/2)+0.5;
          // condition for 3 doors
          for (var i3 = 0; i3 < tempArray.length; i3++) {
            for (var i4 = 0; i4 < cp.xx-1;i4++) {
              if (tempArray[0] === 8 && cp.y-1 !== 0) {
                mapArray[cp.y-1][cp.x] = 8;
                cp.x += 2;
              } else {
                cp.x += 2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
            for (var i4 = 0; i4 < cp.yy-1;i4++) {
              if(tempArray[0] === 8 && cp.x+1 !== worldSize-1) {
                mapArray[cp.y][cp.x+1] = 8;
                cp.y += 2;
              } else {
                cp.y +=2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
            for (var i4 = 0; i4 < cp.xx-1;i4++) {
              if(tempArray[0] === 8 && cp.y+1 !== worldSize-1) {
                mapArray[cp.y+1][cp.x] = 8;
                cp.x -= 2;
              } else {
                cp.x -= 2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
            for (var i4 = 0; i4 < cp.yy-1;i4++) {
              if (tempArray[0] === 8 && cp.x-1 !== 0) {
                mapArray[cp.y][cp.x-1] = 8;
                cp.y -= 2;
              } else {
                cp.y -= 2;
                if (tempArray[0] === 8) {
                  tempArray[randomNumber(1,tempArray.length-1)] = _door;
                }
              }
              tempArray.shift();
            }
          }
        }
      }
      //prints the matrix
      clearTimeout(t);
      breakOut = false;
      return 0;
  function pathCheck() {
    if (breakOut) {
      return 1;
    }
    if ((cp.y+2 > worldSize-1 || mapArray[cp.y+2][cp.x] === _room || mapArray[cp.y+2][cp.x] === _cell) && (cp.x+2 > worldSize-1 || mapArray[cp.y][cp.x+2] === _room || mapArray[cp.y][cp.x+2] === _cell) && (cp.y-2 < 0 || mapArray[cp.y-2][cp.x] === _room || mapArray[cp.y-2][cp.x] === _cell) && (cp.x-2 < 0 || mapArray[cp.y][cp.x-2] === _room || mapArray[cp.y][cp.x-2] === _cell)) {
      return 0;
    }
    if (randDir === 0 && (cp.y+2 > worldSize-1 || mapArray[cp.y+2][cp.x] === _room || mapArray[cp.y+2][cp.x] === _cell)) {
      return false;
    }
    if (randDir === 1 && (cp.x+2 > worldSize-1 || mapArray[cp.y][cp.x+2] === _room || mapArray[cp.y][cp.x+2] === _cell)) {
      return false;
    }
    if (randDir === 2 && (cp.y-2 < 0 || mapArray[cp.y-2][cp.x] === _room || mapArray[cp.y-2][cp.x] === _cell)) {
      return false;
    }
    if (randDir === 3 && (cp.x-2 < 0 || mapArray[cp.y][cp.x-2] === _room || mapArray[cp.y][cp.x-2] === _cell)) {
      return false;
    }
    return true;
  }
  
  
  function director(dir) {
    if (dir === 0) {
      cp.y -= 2;
    }
    if (dir === 1) {
      cp.x -= 2;
    }
    if (dir === 2) {
      cp.y += 2;
    }
    if (dir === 3) {
      cp.x += 2;
    }
  }
   
  function printOut() {
    for (var i = 0;i<worldSize;i++) {
        console.log(mapArray[i]);
      }
      console.log("------------------------------------------------------------------------\n\n");
    }
  }
}






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
