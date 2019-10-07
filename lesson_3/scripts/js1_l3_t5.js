"use strict";

const productsT5 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"]
  },
  {
    id: 8,
    price: 78
  }
];

/**
 * Основная функция работы 5 задания Урока 3 JS1
 * Мы должны выделить те позиции, в которых используется фотография
 * Также мы должны отсортировать товары по цене
 */
function startTask5() {
    console.log(`Дан массив: ${productsT5}`)

    //Отфильтруем данные для создания массива товаров, где есть картинка. Попробую сделать это красиво :)
    let productsWithImgs = productsT5.filter(el => el.photos > []);

    console.log(`Фотографии есть у товаров:`);
    console.log(productsWithImgs);

    //Сортируем товары по цене. Постараюсь тоже сделать это крайне изящно... Честно сказать очень необчыно
    //работать с этой структурой кода. Но, с другой стороны, логика тут прослеживается интересная.
    let productsPriceSort = productsT5.sort((el1, el2) => el1.price - el2.price);
    
    console.log(`\nСортируем массив по цене и поулчаем:`);
    console.log(productsPriceSort);
};