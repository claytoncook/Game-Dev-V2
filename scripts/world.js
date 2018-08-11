console.log("world.js intact")

let world = {
    generate: () => {
        for (let y = 0; y < amountOfTiles; y++) {
            let domArray = [];
            for (let x = 0; x < amountOfTiles; x++) {
                domArray.push(0);
            }
            data.game.world.tileset.push(domArray);
        }
    },
    render: () => {
        world.generate();
        for (let y = 0; y < data.game.world.tileset[0].length; y++) {
            for (let x = 0; x < data.game.world.tileset[y].length; x++) {
                let tile = function () {
                    let t = document.createElement("div");
                    t.classList = "" + y + "-" + x + " tile";
                    t.style.position = "absolute";
                    t.style.top = y * scale + "px";
                    t.style.left = x * scale + "px";
                    t.style.height = scale + "px";
                    t.style.width = scale + "px";
                    t.style.backgroundColor = "green";
                    $tileset.appendChild(t);
                }
                tile();
            }
        }
    }
}