console.log("app.js intact");

function position() {
    //center and size game view
    (() => {
        let size;
        if (height < width) {
            size = height;
        } else if (height > width) {
            size = width;
        }

        game.style.width = size + "px";
        game.style.height = size + "px";

        game.style.top = ((height / 2) - (size / 2)) + "px";
        game.style.left = ((width / 2) - (size / 2)) + "px";
    })();

    (() => {
    })();
}

function run() {
    position();
}

run();