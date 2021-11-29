'use strict';

let title = prompt("Как называется ваш проект?");
console.log(title);
let screens = prompt("Какие типы экранов нужно разработать?", 'пример:"Простые, Сложные, Интерактивные"');
console.log(screens);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
console.log(parseFloat(screenPrice));
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(!!adaptive);
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(parseFloat(servicePrice1));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(parseFloat(servicePrice2));


let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
let servicePercentPrice = fullPrice - (fullPrice * 0.15);
console.log(Math.ceil(servicePercentPrice));

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case (fullPrice <= 29999, fullPrice >= 15000):
    console.log("Даем скидку в 5%");
    break;
  case (fullPrice <= 14999, fullPrice >= 0):
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что-то пошло не так!");
}

