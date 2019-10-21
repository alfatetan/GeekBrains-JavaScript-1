let renderer = {
    map: "",
    /**
     * Отображает игру в консоли
     * т.е. игровое поле и положение игрока
     */
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if (player.x === col && player.y === row) {
                    this.map += 'o '
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },
    /**
     * Ощичаем экран
     */
    clear() {
        console.clear();
        this.map = "";
    }
}