"use strict";
const title = document.getElementsByTagName("h1");
const btn = document.getElementsByClassName("handler_btn");
const add = document.querySelector(".screen-btn");
const percent = document.querySelectorAll(".percent");
const number = document.querySelectorAll(".number");
const inputRange = document.querySelector(".rollback");
const totalInput = document.getElementsByClassName("total-input");
let screenDiv = document.querySelectorAll(".screen");

console.log(title[0]);
console.log(btn[0]);
console.log(btn[1]);
console.log(add);
percent.forEach(function (item) {
  console.log(item);
});
number.forEach(function (item) {
  console.log(item);
});
console.log(inputRange.childNodes[1].childNodes[1]);
console.log(inputRange.childNodes[1].childNodes[3]);

//получаем input справа 
while (totalInput.length) {
  let event = totalInput[0];
  event.classList.remove("total-input");
  console.log(event);
}
//получаем блоки screen
screenDiv.forEach(function (item) {
  console.log(item);
})



const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    do  {
      appData.title = prompt("Как называется ваш проект?", "Калькулятор");
    } while (appData.isNumber(appData.title));

    appData.screenPrice = +appData.screenPrice;

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isNumber(name));

      let price = 0;
      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));


      appData.screens.push({id: i, name: name, price: price});
    }

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isNumber(name));
      
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function() {
    let result = appData.screens.reduce(function(sum, item){
      return sum += +item.price; 
    }, 0);
    console.log(result);

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title = appData.title.trim().slice(0, 1).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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
    console.log(appData.screens);
  },
};

// appData.start();


