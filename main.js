"use strict";

const appData = {
  title: '',
  screens: '', 
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Например Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?", "Например: 12000");
    } while (!appData.isNumber(appData.screenPrice));

    appData.screenPrice = +appData.screenPrice;

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let priceService = 0;
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      do {
        priceService = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(priceService));
        sum += +priceService;
      }
    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    return appData.title.trim().slice(0, 1).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  getRollbackMassege: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price <= 29999 && price >= 15000) {
      return "Даем скидку в 5%";
    } else if (price <= 14999 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так!";
    }
  },
  logger: function () {
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
    },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
  
};

appData.start();

for (let key in appData){
  console.log(key + appData[key]);
}
