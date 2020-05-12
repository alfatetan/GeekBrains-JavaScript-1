let mover = {

    /**
     * This method moves the player on the game's field
     * @param {KeyboardEvent} event - the object of keyboard event
     */
    makeStep (event) {
        let newPosition = this.getNewPosition(event);
        if (this.arePositionsEqual(player, newPosition)) {
            return;
        }
        if (!this.canPlayerMakeStep(newPosition)) {
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },

    /**
     * Chsnging player's location depending on which key was pressing
     * @param {KeyboardEvent} event - the object of keyboard event
     * @returns {{x: number, y{number}}}
     */
    getNewPosition(event) {
        switch (event.key) {
            case "ArrowUp":
                return {
                    x: player.x,
                    y: player.y - 1,
                };
            case "ArrowDown":
                return {
                    x: player.x,
                    y: player.y + 1,
                };
            case "ArrowLeft":
                return {
                    x: player.x - 1,
                    y: player.y,
                };
            case "ArrowRight":
                return {
                    x: player.x + 1,
                    y: player.y,
                };
            default:
                return {
                    x: player.x,
                    y: player.y,
                };
        }
    },

    /**
     * This method checks the equal of location both positions
     * @param {{x: number, y: number}} curPos - the current positon
     * @param {*} newPos - the new position
     */
    arePositionsEqual(curPos, newPos) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    },

    /**
     * This method check the opportunity change player's disposition 
     * @param {{x: nunber, y: number}} nextPoint 
     * @returns {boolean} if cell is being then true else false
     */
    canPlayerMakeStep(nextPoint) {
        return renderer.getSquare(nextPoint) !== null;
    },
}