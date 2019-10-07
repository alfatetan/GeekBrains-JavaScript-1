"use strict";

//Создаём корзину продуктов
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
]

/**
 * Функция, выполняющая задание №4
 * Так как я скидок давать не люблю, я увеличу цены на 15% ;)
 */
function startTask4() {
    //Сначала копируем константу, так как иначе мы не сможем увеличить цену из-за неизменяемости содержимого
    let products_new = [];

    for (let el of products) {
        //Использовал метод клонирования объекта. Надеюсь я правильно это сделал.
        let new_el = {};
        Object.assign(new_el, el);
        new_el.price += new_el.price * .15;
        products_new.push(new_el);
    };
    console.log(products_new);

    //применяем для каждого элемента массива, увеличивая его стоимость
    console.log('Было:');
    showResult(products);

    //Выводим содержимое массива на экран. Сначала то что было, а потом что стало:
    console.log('\nПодняли цены на 15% и стало:');
    showResult(products_new);

    
};

function showResult(arr) {
    //Выводим содержимое массива
    for (let el of arr) {
        console.log(`id товара el: ${el.id}`);
        console.log(`Цена товара: ${el.price}`);
    };
};
