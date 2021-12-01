"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор");
  screens = prompt("Какие типы экранов нужно разработать?", "Например Простые, Сложные, Интерактивные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?", "Например: 12000");
  } while (!isNumber(screenPrice));

  screenPrice = +screenPrice;

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
    
    do {
      sum += +prompt("Сколько это будет стоить?");
    } while (!isNumber(sum));
    
  }
  return sum;
  
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function (item) {
  return item.trim().slice(0, 1).toUpperCase() + item.trim().slice(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return fullPrice - (fullPrice * (rollback / 100));
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
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getTitle(title));
console.log(getRollbackMassege(fullPrice));
console.log(screens.split(","));
console.log(servicePercentPrice);
