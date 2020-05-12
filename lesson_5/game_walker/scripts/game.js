//Show the game's field
renderer.renderBoard();

let moving = function (event) {
    mover.makeStep(event);
};

//Listening the keyboard
window.addEventListener('keydown', moving);