"use strict";

/* Данный скрипт предназначен для тренировки в работе с объкетами
на стандарте ES5. А именно создание не только объекта, но и 
наследовании и полиморфизм.
С этой целью мы создаём объект Car и наделяем его определёнными
методами и свойствами. Потом создаём на базе этой модели ещё две:
грузовой автомобиль, а также электрический.
*/


function Car(fuelVolume = 60, fuelConsumption = 10, fuel = 0) {
    this.fuelConsumption = Number(fuelConsumption); //средний расход топлива
    this.fuelVolume = Number(fuelVolume); //объём бака
    this.odometer = 0;
    this.fuel = Number(fuel);
}

Car.prototype.refuel = (volume) => {
    this.fuel += Number(volume);
    if (this.fuel > this.fuelVolume) {
        console.log(`Бак заполнен полностью и составляет ${this.fuelVolume}. Однако ${this.fuel - this.fuelVolume}`);
        this.fuel = this.fuelVolume;
    } else {
        console.log(`Бак заполнен, в баке ${this.fuel} литров бензина!`);
    }
}

Car.prototype.beep = (times = 1) => {
    console.log(`Машина посигналиа ${times} раз!!!`);
}

Car.prototype.go = (time = 0, speed = 0) => {
    let lenght = this.speed * this.time;
    let requiredFuel = lenght / this.fuelConsumption;
    if (requiredFuel > this.fuel) {
        console.log(`Бензина не хватит чтобы проехать расстояние в ${lenght} км.`);
        console.log(`В баке только на ${this.fuel / this.fuelConsumption * 100}`);
        return;
    } else {
        this.odometer += lenght;
        console.log(`Машина проехала ${lenght} км. Общий километраж ${this.odometer}`);
    }
}

function CarWithFlashingLight (fuelVolume = 60, fuelConsumption = 10, fuel = 0) {
    Car.call(fuelVolume, fuelConsumption, fuel);
    this.flash = false;
}

CarWithFlashingLight.prototype.flashLight = () => {
    if (this.flash) {
        this.flash = false;
        console.log(`Мигалка выключена`);
    } else {
        this.flash = true;
        console.log('Мигалка включена')
    }
}

function PoliceCar(fuelVolume = 60, fuelConsumption = 10, fuel = 0) {
    CarWithFlashingLight.call(this, fuelVolume, fuelConsumption, fuel);
    this.forsage = false;
}

//Вот тут и нажно посмотреть каким образом полиморфируется метод go
PoliceCar.prototype.go = (time = 0, speed = 0) => {
    degugger;
}


function startCarsScript() {
    const skoda = new Car();
    skoda.refuel(100);
    debugger;
}