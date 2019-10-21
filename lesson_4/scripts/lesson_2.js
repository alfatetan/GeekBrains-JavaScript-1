/**
 * Разбиваем число на составляющие
 */
function startSplitDigital() {
    let splitDigit = {
        units: 0,
        tens: 0,
        hundreds: 0,
    }
    let digital = Number(prompt(`Введите целое число, которое необходимо разбить на составляющие`));
    if (digital > 999 || digital < 0 || isNaN(digital) || !Number.isInteger(digital)) {
        alert(`Введите положительное целое число в диапазоне от 0 до 999, чтобы увидеть результат работы программы.`);
        return;
    }
    splitDigit.hundreds = Math.trunc(digital/100);
    digital -= splitDigit.hundreds * 100;
    splitDigit.tens = Math.trunc(digital / 10);
    digital -= splitDigit.tens * 10;
    splitDigit.units = digital;
    console.log(`В вашем числе сотен:${splitDigit.hundreds}, десятков:${splitDigit.tens}, единиц:${splitDigit.units}`);
}