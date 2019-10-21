"use strict";

const Bottle = {
    volume: 10,
}

function ColorBottle() {
    this.color = 'blue';
}

ColorBottle.prototype = Bottle;

ColorBottle.prototype.drink = function(n=0) {
    this.volume -= n;
    console.log(`Выпили из бутылки ${n} литров, осталось ${this.volume}`);
}

const prColorBottle = new ColorBottle();

function Banka() {
    this.kriska = true;
}

Banka.prototype = prColorBottle;

Banka.prototype.open = function() {
    this.kriska = false;
    console.log('Крышка открыта');
}

Banka.prototype.close = function() {
    this.kriska = true;
    console.log('Крышка закрыта');
}

function startBottleScript() {
    const myBottle = new ColorBottle();
    myBottle.drink(3);
    const myBanka = new Banka();
    const myBanka2 = Object.create(prColorBottle);
    debugger;
}