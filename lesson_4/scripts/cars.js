"use strict";

/* Данный скрипт предназначен для тренировки в работе с объкетами
на стандарте ES5. А именно создание не только объекта, но и 
наследовании и полиморфизм.
С этой целью мы создаём объект Car и наделяем его определёнными
методами и свойствами. Потом создаём на базе этой модели ещё две:
грузовой автомобиль, а также электрический.
*/


function Car(name='') {
    this.carName = name;
    this.odometer = 0;
}

Car.prototype.go = function(value=0) {
    this.odometer = (value > 0) ? (this.odometer + value) : (this.odometer - value);
    console.log(`Машина проехала ${value} км. Всего машина проехала ${this.odometer}`)
}

Car.prototype.beep = function(value=1) {
    console.log(`Машина просигналила ${value} раз!!!`);
}

function CarWithFlashLight (name) {
    Car.call(this, name);
    this.flashLight = false;
}

CarWithFlashLight.prototype = Object.create(Car.prototype);
CarWithFlashLight.prototype.constructor = CarWithFlashLight;


CarWithFlashLight.prototype.flash = function() {
    if (this.flashLight) {
        this.flashLight = false;
        console.log(`Проблесковый маячок выключен`);
    } else {
        this.flashLight = true;
        console.log(`Проблесковый маячок включен`);
    }
}

function FireCar (name) {
    CarWithFlashLight.call(this, name);
    this.tank = 0;
}

FireCar.prototype = Object.create(CarWithFlashLight.prototype);
FireCar.prototype.constructor = FireCar;

FireCar.prototype.stew = function (value) {
    this.tank -= value;
    console.log(`Тушили пожар... Было израсходовано ${value} литров воды. Всего осталось ${this.tank}`);
}

FireCar.prototype.reloadWater = function (value) {
    this.tank += value;
    console.log(`В танк было залито ${value} литров воды. Всего в танке ${this.tank} литров.`);
}

function startCarsScript() {
    const skoda = new Car('Skoda');
    const audi = new CarWithFlashLight('Audi');
    const dodge = new FireCar('Dodge firecar')
    debugger;
}