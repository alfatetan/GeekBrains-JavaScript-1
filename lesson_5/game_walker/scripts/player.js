let player = {
    x: 0,
    y: 0,

    /**
     * Setting new player's position
     * @param {{x: int, y: int}} nextPosition the location where the player being
     */
    changePosition (nextPosition) {
        this.x = nextPosition.x;
        this.y = nextPosition.y;
    },
};