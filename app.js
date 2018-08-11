console.log("app.js intact");

//run
library.resize();
library.position();
world.generate();
world.render();

//event listeners

document.addEventListener("keydown", entites.move.player);