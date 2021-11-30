"use strict";

const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  'пример:"Простые, Сложные, Интерактивные"'
);
const screenPrice = +prompt(
  "Сколько будет стоить данная работа?",
  "пример: 12000"
);
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - 2000;


console.log(title);
console.log(screens);
console.log(parseFloat(screenPrice));
console.log(!!adaptive);
console.log(service1);
console.log(parseFloat(servicePrice1));
console.log(service2);
console.log(parseFloat(servicePrice2));

console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice <= 29999 && fullPrice >= 15000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice <= 14999 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что-то пошло не так!");
};