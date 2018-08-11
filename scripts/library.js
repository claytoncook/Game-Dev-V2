console.log("library.js intact");

let library = {
    resize: () => {
        //scale game to fit tileset
        $tileset.style.height, $game.style.height = scale * amountOfTiles + "px";
        $tileset.style.width, $game.style.width = scale * amountOfTiles + "px";

        $player.style.height = scale + "px";
        $player.style.width = scale + "px";
    },
    position: () => {
        //center game and tileset
        $game.style.top = ((height / 2) - (scale * amountOfTiles / 2)) + "px";
        $game.style.left = ((width / 2) - (scale * amountOfTiles / 2)) + "px";

        $player.style.top = data.game.entites.player.y + "px";
        $player.style.left = data.game.entites.player.y + "px";
    }
}