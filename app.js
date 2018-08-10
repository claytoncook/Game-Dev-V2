console.log("app.js intact");

function run() {
    generateTileSet();
    render();
    console.log(data.game.world.tileset);
}

run();