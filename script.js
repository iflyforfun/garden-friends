var gardenFriendCount = 0;
var butterflyFriendCount = 0;
var ladybugFriendCount = 0;
var bunnyHouseCount = 0;
var isButterflyFriendSpawned = false;
var isLadybugFriendSpawned = false;
var isBunnyHouseSpawned = false;
var squirrelFriendCount = 0;
var hedgehogFriendCount = 0;
var birdNestCount = 0;

var isSquirrelFriendSpawned = false;
var isHedgehogFriendSpawned = false;
var isBirdNestSpawned = false;

function gardenFriendClick() {
    gardenFriendCount += 100;
    UpdateUI();
    checkButterflyFriendSpawn();
}

function spawner(type, cost) {
    var anchor = document.getElementById("main");
    var newType = document.getElementById("type").cloneNode(true);
    newType.childNodes[1].id = type + "Count";
    newType.childNodes[3].id = "button" + type;
    newType.childNodes[1].innerHTML = type + "s: 0";
    newType.childNodes[3].innerHTML = "Buy " + type + " | Cost: " + cost + " Garden Friends";

    anchor.appendChild(newType);
}

function checkButterflyFriendSpawn() {
    if (gardenFriendCount >= 50 && !isButterflyFriendSpawned) {
        isButterflyFriendSpawned = true;
        spawner("ButterflyFriend", 50);
        document.getElementById("buttonButterflyFriend").onclick = butterflyFriendClick;
    }
}

function checkLadybugFriendSpawn() {
    if (butterflyFriendCount >= 50 && !isLadybugFriendSpawned) {
        isLadybugFriendSpawned = true;
        spawner("LadybugFriend", 1000);
        document.getElementById("buttonLadybugFriend").onclick = ladybugFriendClick;
    }
}

function checkBunnyHouseSpawn() {
    if (ladybugFriendCount >= 50 && !isBunnyHouseSpawned) {
        isBunnyHouseSpawned = true;
        spawner("BunnyHouse", 10000);
        document.getElementById("buttonBunnyHouse").onclick = bunnyHouseClick;
    }
}

function butterflyFriendClick() {
    if (gardenFriendCount >= 50) {
        gardenFriendCount -= 50;
        butterflyFriendCount += 1;
    }
    UpdateUI();
    checkLadybugFriendSpawn();
}

function ladybugFriendClick() {
    if (gardenFriendCount >= 1000) {
        gardenFriendCount -= 1000;
        ladybugFriendCount += 1;
    }
    UpdateUI();
    checkBunnyHouseSpawn();
}

function bunnyHouseClick() {
    if (gardenFriendCount >= 10000) {
        gardenFriendCount -= 10000;
        bunnyHouseCount += 1;
    }
    UpdateUI();
}
function butterflyFriendAuto() {
    gardenFriendCount += butterflyFriendCount;
    UpdateUI();
}

function ladybugFriendAuto() {
    butterflyFriendCount += ladybugFriendCount;
    UpdateUI();
}

function bunnyHouseAuto() {
    ladybugFriendCount += bunnyHouseCount;
    UpdateUI();
}

function cheat() {
    gardenFriendCount = Number(window.prompt("How many Garden Friends?"));
    
    if (isButterflyFriendSpawned) {
        butterflyFriendCount = Number(window.prompt("How many Butterfly Friends?"));
    }
    
    if (isLadybugFriendSpawned) {
        ladybugFriendCount = Number(window.prompt("How many Ladybug Friends?"));
    }
    
    if (isBunnyHouseSpawned) {
        bunnyHouseCount = Number(window.prompt("How many Bunny Houses?"));
    }

    // New upgrades
    if (isSquirrelFriendSpawned) {
        squirrelFriendCount = Number(window.prompt("How many Squirrel Friends?"));
    }
    
    if (isHedgehogFriendSpawned) {
        hedgehogFriendCount = Number(window.prompt("How many Hedgehog Friends?"));
    }
    
    if (isBirdNestSpawned) {
        birdNestCount = Number(window.prompt("How many Bird Nests?"));
    }

    UpdateUI();  // Update the UI after cheating
}


function formatCount(value) {
    return Number(value || 0).toLocaleString();
}

function UpdateUI() {
    document.getElementById("GardenFriendCount").textContent = formatCount(gardenFriendCount);
    document.getElementById("ButterflyFriendCount").textContent = formatCount(butterflyFriendCount);
    document.getElementById("LadybugFriendCount").textContent = formatCount(ladybugFriendCount);
    document.getElementById("BunnyHouseCount").textContent = formatCount(bunnyHouseCount);
    document.getElementById("SquirrelFriendCount").textContent = formatCount(squirrelFriendCount);
    document.getElementById("HedgehogFriendCount").textContent = formatCount(hedgehogFriendCount);
    document.getElementById("BirdNestCount").textContent = formatCount(birdNestCount);

    document.getElementById("buttonButterflyFriend").disabled = !(gardenFriendCount >= 50);
    document.getElementById("buttonLadybugFriend").disabled = !(butterflyFriendCount >= 50);
    document.getElementById("buttonBunnyHouse").disabled = !(ladybugFriendCount >= 50);
    document.getElementById("buttonSquirrelFriend").disabled = !(bunnyHouseCount >= 50);
    document.getElementById("buttonHedgehogFriend").disabled = !(squirrelFriendCount >= 50);
    document.getElementById("buttonBirdNest").disabled = !(hedgehogFriendCount >= 50);
}

function checkSquirrelFriendSpawn() {
    if (gardenFriendCount >= 50000 && !isSquirrelFriendSpawned) {
        isSquirrelFriendSpawned = true;
        spawner("SquirrelFriend", 50000);
        document.getElementById("buttonSquirrelFriend").onclick = squirrelFriendClick;
    }
}

function checkHedgehogFriendSpawn() {
    if (squirrelFriendCount >= 50 && !isHedgehogFriendSpawned) {
        isHedgehogFriendSpawned = true;
        spawner("HedgehogFriend", 250000);
        document.getElementById("buttonHedgehogFriend").onclick = hedgehogFriendClick;
    }
}

function checkBirdNestSpawn() {
    if (hedgehogFriendCount >= 50 && !isBirdNestSpawned) {
        isBirdNestSpawned = true;
        spawner("BirdNest", 1000000);
        document.getElementById("buttonBirdNest").onclick = birdNestClick;
    }
}

function squirrelFriendClick() {
    if (gardenFriendCount >= 50000) {
        gardenFriendCount -= 50000;
        squirrelFriendCount += 1;
    }
    UpdateUI();
    checkHedgehogFriendSpawn();
}

function hedgehogFriendClick() {
    if (gardenFriendCount >= 250000) {
        gardenFriendCount -= 250000;
        hedgehogFriendCount += 1;
    }
    UpdateUI();
    checkBirdNestSpawn();
}

function birdNestClick() {
    if (gardenFriendCount >= 1000000) {
        gardenFriendCount -= 1000000;
        birdNestCount += 1;
    }
    UpdateUI();
}

function squirrelFriendAuto() {
    bunnyHouseCount += squirrelFriendCount;
    UpdateUI();
}

function hedgehogFriendAuto() {
    squirrelFriendCount += hedgehogFriendCount;
    UpdateUI();
}

function birdNestAuto() {
    hedgehogFriendCount += birdNestCount;
    UpdateUI();
}

function start() {
    UpdateUI();
    butterflyFriendAuto();
    ladybugFriendAuto();
    bunnyHouseAuto();
    squirrelFriendAuto();
    hedgehogFriendAuto();
    birdNestAuto();
}
