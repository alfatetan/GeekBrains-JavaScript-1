let game = {
    /**
     * Запуск игры
     */
    run() {
        while (true) {
            //получаем направление игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log(`Игра закончилась! Всего доброго!`);
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },
    /**
     * Метод подготовки и первоначальной настройки игры
     */
    init() {
        console.log(`Ваше положение на поле в виде "о".`)
        renderer.render();
        console.log(`Для запуска игры наберите game.run() и нажмите Enter.`)
    }
}

//при открытии страницы у нас будет выполняться метод init()
game.init();
