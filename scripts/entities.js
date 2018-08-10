console.log("entites.js intact")

let entites = {
    spawn: () => {

    },
    move: {
        player: (event) => {
                if (event.code === "KeyA") {
                    data.game.entites.player.x -= data.game.entites.player.velocityX;
                } else if (event.code === "KeyD") {
                    data.game.entites.player.x += data.game.entites.player.velocityX;
                } else if (event.code === "KeyW") {
                    data.game.entites.player.y -= data.game.entites.player.velocityY;
                } else if (event.code === "KeyS") {
                    data.game.entites.player.y += data.game.entites.player.velocityY;
                } else {
                    data.game.entites.player.x += 0;
                    data.game.entites.player.y += 0;
                }
                
            $player.style.left = data.game.entites.player.x + "px";
            $player.style.top = data.game.entites.player.y + "px";
        },
        enemies: () => {

        }
    },
    render: () => {

    }
}