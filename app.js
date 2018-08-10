console.log("app.js intact");

function positionAndSize() {
    //scale game to fit tileset
    $tileset.style.height, $game.style.height = scale*amountOfTiles + "px";
    $tileset.style.width, $game.style.width = scale*amountOfTiles + "px";

    //center game and tileset
    $game.style.top = ((height / 2) - (scale*amountOfTiles / 2)) + "px";
    $game.style.left = ((width / 2) - (scale*amountOfTiles / 2)) + "px";

    $player.style.height = scale + "px";
    $player.style.width = scale + "px";
    $player.style.top = data.game.entites.player.y + "px";
    $player.style.left = data.game.entites.player.y + "px";
}

function run() {
    world.generate();
    positionAndSize();
    world.render();
    console.log(data.game.world.tileset);
}

run();

//event listeners

document.addEventListener("keydown", entites.move.player);