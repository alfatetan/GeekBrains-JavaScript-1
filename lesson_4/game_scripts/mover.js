let mover = {
    /**
     * Получает и отдаёт направление от пользователя
     * @returns {int} Возвращаем направление, введёное пользователем
     */
    getDirection() {
        const availableDirections = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt(`Введите число (2, 4, 6 или 8), куда вы хотите переместиться. "Отмена", чтобы завершить.`));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert(`Чтобы переместиться по игровому полю необходимо ввести 2, 4, 6 или 8.`);
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдаёт следующую точку в которой будет находиться пользователь после движения
     * @param {int} direction Направление движения игрока
     * @returns {{x: int, y: int}} Следующая точка
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        }

        // Версия, созданного при стандартном перемещении (я убрал case)
        // nextPosition.x += Number(direction === 6) - Number(direction === 4);
        // nextPosition.y += Number(direction === 2) - Number(direction === 8);

        //Для выполнения задания из ДХ для удобства разбил это выражение.
        //Логика работы проста. false = 0, true = 1, соответственно мы либо уменьшаем
        //координаты на единицу, либо увеличиваем. Если значение отсутствует, то всё 
        //равно будет ноль. Это старая хитрость, которая работает раза в 3 быстрее чем if
        nextPosition.x += Number(direction === 6 || direction === 3 || direction === 8); 
        nextPosition.x -= Number(direction === 4 || direction === 1 || direction === 7);
        nextPosition.y += Number(direction === 2 || direction === 1 || direction === 3); 
        nextPosition.y -= Number(direction === 8 || direction === 7 || direction === 9);

        return nextPosition;
    },
}