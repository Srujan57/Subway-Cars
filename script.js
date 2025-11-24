
var road = new Image()
road.src = "resource/road.jpg"

var car = new Image()
car.src = "resource/car.png"

var coin = new Image()
coin.src = "resource/coin.png"

var person = new Image()
person.src = "resource/person.png"

var trafficLight = new Image()
trafficLight.src = "resource/trafficLight.png"

var overScreen = new Image()
overScreen.src = "resource/gameOver.jpg"

var storeScreen = new Image()
storeScreen.src = "resource/shelf.avif"

var magnet = new Image()
magnet.src = "resource/magnet.png"

var magnet2 = new Image()
magnet2.src = "resource/magnet.png"

var shield = new Image()
shield.src = "resource/shield.png"

var boost = new Image()
boost.src = "resource/boost.png"

var boost2 = new Image()
boost2.src = "resource/boost.png"

var shield2 = new Image()
shield2.src = "resource/shield.png"

var shield3 = new Image()
shield3.src = "resource/shield.png"

var multiply = new Image()
multiply.src = "resource/5x pic.png"

var multiply2 = new Image()
multiply2.src = "resource/5x pic.png"



var play = true
var appearStore = false
var score = 0
var highArray = [0]



var place = 0
var pickLocation = Math.floor(Math.random()*2)+1

var numCoins = 0
var max = 0

var magnetPower = false
var boostPower = false
var shieldPower = false
var multiplyPower = false




var createImage = function(src,xco,yco,w,h) {
    var img= new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis = true;
    return img;
};

function drawBackground() {
    var ctx = document.getElementById("canvas").getContext("2d");
    if (play == true){
        road = createImage(road.src,0,0,1000,600)
        ctx.drawImage(road,road.left,road.top,road.width,road.height)
    }else if (play == false){
        overScreen = createImage(overScreen.src,0,0,1000,600)
        ctx.drawImage(overScreen,overScreen.left,overScreen.top,overScreen.width,overScreen.height)
    }
}

function makeStore(){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (appearStore == true){
        storeScreen = createImage(storeScreen.src,0,0,1000,600)
        ctx.drawImage(storeScreen,storeScreen.left,storeScreen.top,storeScreen.width,storeScreen.height)
    }
}

function drawCar(){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (play == true){
        ctx.drawImage(car,car.left,car.top,car.width,car.height)
    }

}

function makeTraffic(){
    if (pickLocation == 1){
        place = 415
    }else if (pickLocation == 2){
        place = 485
    }
    trafficLight = createImage(trafficLight.src,-(Math.floor(Math.random()*475) + 150) ,place,50,45)
}

function makeCoins(){
    if (pickLocation == 1){
        place = 415
    }else if (pickLocation == 2){
        place = 485
    }
    coin = createImage(coin.src,-1500 ,place,30,45)
}

function makePerson(){
    if (pickLocation == 1){
        place = 415
    }else if (pickLocation == 2){
        place = 485
    }
    person = createImage(person.src,-1000 ,place,30,45)
}

function makeMagnet(){
    magnet = createImage(magnet.src,160,125,125,100)
    magnet.vis = false

    magnet2 = createImage(magnet2.src, 825,85,35,25)
    magnet2.vis = false

}

function makeMultiply(){
    multiply = createImage(multiply.src,405,300,200,200)
    multiply.vis = false

    multiply2 = createImage(multiply.src, 940,79,45,40)
    multiply2.vis = false

}

function appearOnScreen(){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (magnet2.vis == true){
        ctx.drawImage(magnet2, magnet2.left, magnet2.top, magnet2.width, magnet2.height)
    }

    if (boost2.vis == true){
        ctx.drawImage(boost2, boost2.left, boost2.top, boost2.width, boost2.height)
    }

    if (shield2.vis == true){
        ctx.drawImage(shield2, shield2.left, shield2.top, shield2.width, shield2.height)
    }

    if (shield3.vis == true){
        ctx.drawImage(shield3,shield3.left,shield3.top,shield3.width,shield3.height)
    }

    if (multiply2.vis == true){
        ctx.drawImage(multiply2,multiply2.left,multiply2.top,multiply2.width,multiply2.height)
    }
}


function makeBoost(){
    boost = createImage(boost.src,450,100,100,150)
    boost.vis = false

    boost2 = createImage(boost2.src, 865,82,35,35)
    boost2.vis = false


}

function makeShield(){
    shield = createImage(shield.src,700,100,125,125)
    shield.vis = false

    shield2 = createImage(shield2.src, 905,82,35,35)
    shield2.vis = false


    shield3 = createImage(shield2.src, 690,410,125,125)
    shield3.vis = false

}

function magPower(){
    if (numCoins >= 25){
        numCoins -= 25
        alert("Click M to activate magnet for 15 seconds")
        magnet2.vis = true
    }else {
        alert("Not enough coins")
    }
}

function magnetUse(){
    if (play == true){
        if (magnetPower == true){
            if (coin.left > 100 && coin.left < 500){
                numCoins += 1
                coin.left = -500
            }
            setTimeout(magnetOff,15000)

        }else if (magnetPower == false){
            magnet2.vis = false
        }
    }

}

function magnetOff(){
    magnetPower = false
    magnet2.vis = false
}

function booster(){
    if (numCoins >= 30){
        numCoins -= 30
        alert("Click B to get a score boost of 15")
        boost2.vis = true
    }else {
        alert("Not enough coins")
    }
}

function boosterUse(){
    if (play == true){
        if (boostPower == true){
            score = (score + 15)
            boostPower = false
            boost2.vis = false
        }
    }

}


function shielder(){
    if (numCoins >= 20){
        numCoins -= 20
        alert("Click S to get a shield for 15 seconds")
        shield2.vis = true
    }else {
        alert("Not enough coins")
    }

    if (shieldPower == false){
        shield3.vis = false
    }
}

function shieldUse(){
    shieldPower = false
    shield2.vis = false
    shield3.vis = false
}

function multiplier(){
    if (numCoins >= 30){
        numCoins -= 30
        alert("Click C to get a 5X multiplier for each coin for 15 seconds")
        multiply2.vis = true
    }else {
        alert("Not enough coins")
    }
}

function multiplierUse(){
    if (multiplyPower == true){
        if (coin.left + coin.width > car.left && coin.left < car.left + car.width &&
            coin.top + coin.height > car.top && coin.top < car.top + car.height){
            coin.top = -500
            numCoins += 5
        }
        setTimeout(multiplierOff,15000)
    }else if (multiplyPower == false){
        multiplierOff()
    }
}

function multiplierOff(){
    multiplyPower = false
    multiply2.vis = false
}

function scores(){
    if (play == true){
        score +=1
    }
    if (play == false){
        highArray.push(score)
    }
}

function highScore(){
    highArray.sort(function(a, b){return b - a});
    max = highArray[0]

}


function scoreText(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.font = "24px Arial"
    ctx.fillText("Score: " + score, 875, 25);
    ctx.fillStyle = "#115cff"

}

function highText(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.font = "24px Arial"
    ctx.fillText("High Score: " + max, 818, 75);
    ctx.fillStyle = "#115cff"

}

function displayCoins(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.font = "24px Arial"
    ctx.fillText("Coins: " + numCoins, 875, 50);
    ctx.fillStyle = "#115cff"


}


$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == 13)
    {
        alert("you pressed the return key");
    }
    if(keycode == 27)
    {
        alert("escape key1")
    }

    if (keycode == 38 && car.top >400 || keycode == 87 && car.top >400){
        car.top -=70
    }
    if (keycode == 40  && car.top < 470 || keycode == 83 && car.top < 470){
        car.top +=70
    }

    if (keycode == 77 && magnet2.vis == true && play == true){
        magnetPower = true
    }

    if (keycode == 66 && boost2.vis == true && play == true){
        boostPower = true
    }

    if (keycode == 83 && shield2.vis == true && play == true){
        shieldPower = true
        shield3.vis = true
    }

    if (keycode == 67 && multiply2.vis == true && play == true){
        multiplyPower = true
    }
});

function appearPower(){
    var ctx = document.getElementById("canvas").getContext("2d");

    if (shield.vis == true){
        ctx.drawImage(shield,shield.left,shield.top,shield.width,shield.height)
    }

    if (boost.vis == true){
        ctx.drawImage(boost,boost.left,boost.top,boost.width,boost.height)
    }

    if (magnet.vis == true){
        ctx.drawImage(magnet,magnet.left,magnet.top,magnet.width,magnet.height)
    }

    if (multiply.vis == true){
        ctx.drawImage(multiply,multiply.left,multiply.top,multiply.width,multiply.height)
    }


}

function moveCoins(){
    var ctx = document.getElementById("canvas").getContext("2d")
    displayCoins()

    if(play == true){
        coin.left += 3
        if (score >= 10 && score < 20){
            coin.left += 5
        }else if (score >= 20 && score < 30){
            coin.left += 9
        }else if (score >= 30 && score < 45){
            coin.left += 11
        }else if (score >= 45){
            coin.left += 13
        }

        if (coin.left > 1100){
            coin.left = -(Math.floor(Math.random()*500))
            pickLocation = Math.floor(Math.random()*2)+1
            if (pickLocation == 1){
                coin.top = 415
            }else if (pickLocation == 2){
                coin.top = 485
            }
        }

        if (coin.left + coin.width > car.left && coin.left < car.left + car.width &&
            coin.top + coin.height > car.top && coin.top < car.top + car.height && multiplyPower == false){
            coin.top = -500
            numCoins += 1

        }

        ctx.drawImage(coin, coin.left, coin.top, coin.width, coin.height)
    }else {
        coin.left = -(Math.floor(Math.random()*750))
        pickLocation = Math.floor(Math.random()*2)+1
        if (pickLocation == 1){
            coin.top = 415
        }else if (pickLocation == 2){
            coin.top = 485
        }
    }
}

function moveTraffic(){
    var ctx = document.getElementById("canvas").getContext("2d");
    scoreText()
    highScore()
    highText()

    if(play == true){
        trafficLight.left += 3
        if (score >= 10 && score < 20){
            trafficLight.left += 5
        }else if (score >= 20 && score < 30){
            trafficLight.left += 9
        }else if (score >= 30 && score < 45){
            trafficLight.left += 11
        }else if (score >= 45){
            trafficLight.left += 13
        }

        if (trafficLight.left > 1100 || trafficLight.left == person.left || trafficLight.left == coin.left){
            trafficLight.left = -(Math.floor(Math.random()*500) + 150)
            pickLocation = Math.floor(Math.random()*2)+1
            if (pickLocation == 1){
                trafficLight.top = 415
            }else if (pickLocation == 2){
                trafficLight.top = 485
            }
        }

        if (shieldPower == true){
            setTimeout(shieldUse,15000)
        }

        if (trafficLight.left + trafficLight.width > car.left && trafficLight.left < car.left + car.width &&
            trafficLight.top + trafficLight.height > car.top && trafficLight.top < car.top + car.height && shieldPower == false){
            trafficLight.top = -500
            play = false
            document.getElementById("reset").disabled = false
            document.getElementById("store").disabled = false

        } else if (trafficLight.left + trafficLight.width > person.left && trafficLight.left < person.left + person.width &&
            trafficLight.top + trafficLight.height > person.top && trafficLight.top < person.top + person.height){
            trafficLight.left = -(Math.floor(Math.random()*450) + 150)
            pickLocation = Math.floor(Math.random()*2)+1
            if (pickLocation == 1){
                trafficLight.top = 415
            }else if (pickLocation == 2){
                trafficLight.top = 485
            }
        } else if (trafficLight.left + trafficLight.width > coin.left && trafficLight.left < coin.left + coin.width &&
            trafficLight.top + trafficLight.height > coin.top && trafficLight.top < coin.top + coin.height){
            trafficLight.left = -(Math.floor(Math.random()*400) + 150)
            pickLocation = Math.floor(Math.random()*2)+1
            if (pickLocation == 1){
                trafficLight.top = 415
            }else if (pickLocation == 2){
                trafficLight.top = 485
            }
        }

        ctx.drawImage(trafficLight, trafficLight.left, trafficLight.top, trafficLight.width, trafficLight.height)
    }else {
        trafficLight.left = -(Math.floor(Math.random()*330) + 150)
        pickLocation = Math.floor(Math.random()*2)+1
        if (pickLocation == 1){
            trafficLight.top = 415
        }else if (pickLocation == 2){
            trafficLight.top = 485
        }
    }
    space()
}

function movePerson(){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (play == true){
        person.left += 3
        if (score >= 10 && score < 20){
            person.left += 5
        }else if (score >= 20 && score < 30){
            person.left += 9
        }else if (score >= 30 && score < 45){
            person.left += 11
        }else if (score >= 45){
            person.left += 13
        }

        if (person.left > 1100 || person.left == trafficLight.left || person.left == coin.left ){
            person.left = -(Math.floor(Math.random()*1050) + 700)
            pickLocation = Math.floor(Math.random()*2)+1
            if (pickLocation == 1){
                person.top = 415
            }else if (pickLocation == 2){
                person.top = 485
            }
        }




        if (person.left + person.width > car.left && person.left < car.left + car.width &&
            person.top + person.height > car.top && person.top < car.top + car.height && shieldPower == false){
            play = false
            document.getElementById("reset").disabled = false
            document.getElementById("store").disabled = false

        }else if (person.left + person.width > coin.left && person.left < coin.left + coin.width &&
            person.top + person.height > coin.top && person.top < coin.top + coin.height){
            person.left = -(Math.floor(Math.random()*1150)+ 700)
            pickLocation = Math.floor(Math.random()*2)+1
            if (pickLocation == 1){
                person.top = 415
            }else if (pickLocation == 2){
                person.top = 485
            }
        }

        ctx.drawImage(person, person.left, person.top, person.width, person.height)
    }else {
        person.left = -(Math.floor(Math.random()*1200) + 700)
        pickLocation = Math.floor(Math.random()*2)+1
        if (pickLocation == 1){
            person.top = 415
        }else if (pickLocation == 2){
            person.top = 485
        }
    }
    space()

}


function space() {
    if (person.left < -100 && trafficLight.left < 300) {
        if (trafficLight.left - person.left > 0) {
            person.left = trafficLight.left - 400

        }
    }
    if (trafficLight.left < -100 && person.left < 300){
        if (person.left - trafficLight.left > 0) {
            trafficLight.left = person.left - 400

        }
    }

}



function store(){
    appearStore = true
    magnet.vis = true
    shield.vis = true
    boost.vis = true
    multiply.vis = true
    document.getElementById("magPower").hidden = false
    document.getElementById("boost").hidden = false
    document.getElementById("shield").hidden = false
    document.getElementById("multiply").hidden = false

}








function initialize(){
    drawBackground()
    makeStore()
    var ctx = document.getElementById("canvas").getContext("2d");
    car = createImage(car.src,790,470,125,75)
    ctx.drawImage(car,car.left,car.top,car.width,car.height)
    makeTraffic()
    makePerson()
    makeCoins()
    makeMagnet()
    makeShield()
    makeBoost()
    makeMultiply()

    setInterval(scores, 1000)






    animate()
}

function animate(){
    a=requestAnimationFrame(animate);
    drawBackground()
    makeStore()
    appearPower()
    drawCar()
    moveTraffic()
    movePerson()
    moveCoins()
    appearOnScreen()
    space()


    if (magnetPower == true && play == true){
        magnetUse()
    }

    if (boostPower == true && play == true){
        boosterUse()
    }

    if (multiplyPower == true && play == true){
        multiplierUse()
    }

}


function reset(){
    play = true
    appearStore = false
    document.getElementById("reset").disabled = true
    document.getElementById("store").disabled = true
    score = 0
    magnet.vis = false
    shield.vis = false
    boost.vis = false
    multiply.vis = false
    document.getElementById("magPower").hidden = true
    document.getElementById("boost").hidden = true
    document.getElementById("shield").hidden = true
    document.getElementById("multiply").hidden = true
    magnetPower = false
    boostPower = false
    shieldPower = false
    multiplyPower = false
}

