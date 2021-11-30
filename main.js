"use strict";

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", 'пример:"Простые, Сложные, Интерактивные"');
const screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollBack = 10;
let allServicePrices;

const getAllServicePrices = function (a, b) {
  return a + b;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(a, b) {
  return a + b;
};
const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function (item) {
  return item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase();
};


const getServicePercentPrices = function (a, b) {
  return a - b;
};
const servicePercentPrice = getServicePercentPrices(fullPrice, (fullPrice * (rollBack / 100)));

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMassege = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price <= 29999 && price >= 15000) {
    return "Даем скидку в 5%";
  } else if (price <= 14999 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так!";
  }
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getTitle(title));
console.log(getRollbackMassege(fullPrice));
console.log(screens.split(' '));
console.log(servicePercentPrice);

