"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollBack = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num); 
};

const asking = function () {
  title = prompt("Как называется ваш проект?");
  screens = prompt("Какие типы экранов нужно разработать?", 'пример:"Простые, Сложные, Интерактивные"');

  screenPrice = prompt("Сколько будет стоить данная работа?", "пример: 12000");
  
  while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?", "пример: 12000");
  }

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    sum += +prompt("Сколько это будет стоить?");
  }
  return sum;
};

function getFullPrice(a, b) {
  return a + b;
}

const getTitle = function (item) {
  return item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase();
};

const getServicePercentPrices = function (a, b) {
  return a - b;
};

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, fullPrice * (rollBack / 100));

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getTitle(title));
console.log(getRollbackMassege(fullPrice));
console.log(screens.split(" "));
console.log(servicePercentPrice);

