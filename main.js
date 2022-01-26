"use strict";

const title = document.getElementsByTagName("h1")[0];
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
let selectCheck = document.querySelectorAll(".main-controls__select select");
let inputCheck = document.querySelectorAll(".screen input[type=text]");
let allCeckbox = document.querySelectorAll("input[type=checkbox]");
let cms = document.getElementById("cms-open");
let cmsHidden = document.querySelector(".hidden-cms-variants");
let cmsValue = cmsHidden.querySelector("select");
let cmsPercent = cmsHidden.querySelector(".main-controls__input");
let cmsOption = cmsHidden.querySelectorAll("option");
let inputPercent = cmsHidden.querySelector("input[type=text]");
console.log(cmsHidden);
console.log(cmsValue);
console.log(cmsPercent);
console.log(cmsOption);
console.log(inputPercent.value);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  inputPercent: 0,
  cmsOption: 50,
  cmsPercent: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  inputRange: "",
  checkbox: false,
  totalInput: "",
  count: 0,
  init: function () {
    this.addTitle();

    cms.addEventListener("click", this.cms);
    this.cmsPrice();

    startBtn.addEventListener("click", this.checkValue.bind(this));
    buttonPlus.addEventListener("click", this.addScreenBlock);
    inputRange.addEventListener("input", this.rollBackMediator.bind(this));
    inputRange.addEventListener("change", this.rollBackMediator.bind(this));
    resetBtn.addEventListener("click", this.reset.bind(this));
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  rollBackMediator: function () {
    totalInput.textContent = inputRange.value + "%";
    this.rollback = +inputRange.value;
  },

  isError: false,
  checkValue: function () {
    this.isError = false;

    screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
      let selectCheck = screen.querySelector("select");
      let inputCheck = screen.querySelector("input[type=text]");

      if (selectCheck.value === "" || inputCheck.value === "") {
        this.isError = true;
      }
    });

    if (!this.isError) {
      this.start();
    } else {
      alert("Введите данные");
    }
  },

  start: function () {
    this.addScreens();
    this.addServices();

    this.addPrices();

    console.log(this);
    this.showResult();

    this.disabledFunc();
    // this.logger();
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = Math.round(this.servicePercentPrice);
    totalCount.value = this.count;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },

  disabledFunc: function () {
    startBtn.style.display = "none";
    resetBtn.style.display = "block";
    buttonPlus.setAttribute("disabled", "true");

    screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      select.setAttribute("disabled", "true");
      input.setAttribute("disabled", "true");
    });
  },

  cms: function () {
    if (cms.checked === true) {
      cmsHidden.style.display = "flex";
    } else {
      cmsHidden.style.display = "none";
    }
  },

  cmsPrice: function () {
    cmsValue.addEventListener("change", function (item) {
      if (item.target.value === "other") {
        cmsPercent.style.display = "flex";
      } else {
        cmsPercent.style.display = "none";
      }
    });
  },

  reset: function () {
    this.changeBtn();
    this.deletScreens();
    this.resultReset();
    this.addScreens();
  },

  changeBtn: function () {
    startBtn.style.display = "block";
    resetBtn.style.display = "none";
  },

  deletScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.value = "";
      input.value = "";

      if (index !== 0) {
        screen.remove();
      }

      select.disabled = false;
      input.disabled = false;
      buttonPlus.disabled = false;
    });

    allCeckbox.forEach(function (i) {
      i.checked = false;
    });

    cmsHidden.style.display = "none";
  },

  resultReset: function () {
    total.value = "0";
    totalCountOther.value = "0";
    fullTotalCount.value = "0";
    totalCountRollback.value = "0";
    totalCount.value = "0";
    inputRange.value = "0";
    totalInput.textContent = "0%";
    cmsValue.value = "";
  },

  addServices: function () {
    percent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    number.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;


    this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);

    inputCheck = document.querySelectorAll(".screen input[type=text]");

    inputCheck.forEach((item) => {
      this.count += +item.value;
    });
  },

  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
};

appData.init();
