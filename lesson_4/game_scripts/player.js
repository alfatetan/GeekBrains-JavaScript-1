/**
 * Объект игрока, здесь находятся координаты игрока и все методы связанные с ним
 * @property {int} x Позиция по X-координате
 * @property {int} y Позиция по Y-координатеn
 */
const player = {
    x: 0,
    y: 0,
    
    /**
     * Перемещает игрока по переданному направлению
     * @param {{x: int, y: int}} nextPoint Следующая точка игрока
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
}