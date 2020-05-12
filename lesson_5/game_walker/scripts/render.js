// Make the game pictoure. Build a game's field and show a player
let renderer = {
    /**
     * Render the game's field and player on the board
     */
    renderBoard() {
        let result = this.generateBoard();
        document.getElementById('mySign').insertAdjacentHTML('beforebegin', result);
        // document.getElementById('sign').insertAdjacentHTML('beforebegin', result);
        // document.body.insertAdjacentHTML('afterbegin', result);
        
        this.renderUserPosition(player);
    },

    /**
     * The method generate a game's field with use configuration file (config.js)
     * @returns {string} generated HTML-code of table game field
     */
    generateBoard() {
        let board = ""; // Here we will uppend our HTML
        for (let y = 0; y < config.rowsCount; y++) {
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                board += `<td data-x="${x}" data-y="${y}"</td>`;
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    /**
     * If we have the cell with being location then returning it's object
     * Else null
     * @param {{x: number, y: number}} position - the object with coordinates
     * @returns {HTMLTableCellElement|null} object of cell if being else null 
     */
    getSquare(position) {
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    /**
     * This method show a player
     * We will add for <td> tag ".usepr" class
     * @param {object} position 
     */
    renderUserPosition(position) {
        let square = this.getSquare(position);
        square.classList.add('user');
    },

    /**
     * This method remove the player with use removing of class ".user" in tag <td>
     */
    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    },

}