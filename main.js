"use strict";

const title = document.getElementsByTagName("h1")[0];
const btn = document.getElementsByClassName("handler_btn")[0];
const buttonPlus = document.querySelector(".screen-btn");
const percent = document.querySelectorAll(".other-items.percent");
const number = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input");
const totalInput = document.querySelector(".rollback .range-value");
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
let screens = document.querySelectorAll(".screen");

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

const checkbox = document.querySelectorAll(".custom-checkbox");
let selectCheck = document.querySelector(".main-controls__select select");
let inputCheck = document.querySelectorAll(".screen input[type=text]");
const newArr = [...checkbox, selectCheck, inputCheck];


const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  inputRange: "",
  checkbox: false,
  totalInput: "",
  init: function () {
    appData.addTitle();

    startBtn.addEventListener("click", appData.checkValue);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    inputRange.addEventListener("input", appData.rollBackMediator);
    inputRange.addEventListener("change", appData.rollBackMediator);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  rollBackMediator: function () {
    totalInput.textContent = inputRange.value + "%";
    // rollback.textContent = inputRange.value;
    // console.log(rollback.textContent);
  },
  isError: false,
  checkValue: function () {
    appData.isError = false;
    newArr.forEach(function (input) {
      if (input.value === "") {
        appData.isError = true;
        alert("Введите данные");
      }
    });

    if (!appData.isError) {
      appData.start();
    }
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.count();

    appData.addPrices();

    // appData.logger();
    console.log(appData);
    appData.showResult();
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.count;
  },

  addScreens: function () {
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },

  count: function () { 
  let inputCheck = document.querySelectorAll(".screen input[type=text]");
  let sum = 0;
    inputCheck.forEach(function (item) { 
      sum += +item.value;

    });
    console.log(sum);
  },

  addServices: function () {
    percent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    number.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100); 

  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.init();
