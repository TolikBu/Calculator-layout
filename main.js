let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 165132;
let rollback = 15;
let fullPrice = 3158620;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимсоть верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимсоть разработки сайта" + " " + fullPrice + " " + "рублей");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100) + " " + "рублей");
