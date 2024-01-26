'use strict';

const div01 = document.createElement("div");
const div02 = document.createElement("div");
const div03 = document.createElement("div");
const div04 = document.createElement("div");
const newContainer = document.querySelector("#newContainer")

newContainer.append(div01);
newContainer.append(div02);
newContainer.append(div03);
newContainer.append(div04);

const nowYear = new Date().getFullYear();
const birthday = 1967;

const myAge = (birthday) => nowYear - birthday;
const firstname = "lc of call"

const yearsUntilRetirement = (birthday, firstname) => {
  const age = myAge(birthday)
  const remainYears = 62 - age;
  return `${firstname} remains ${remainYears} years`
}

const arr1 = ['michael', 'Steven', "peter"];
const popArr = arr1.slice().pop();
const pushArr = arr1.slice();
pushArr.push("us")
const shiftArr = arr1.slice().shift();
const unshiftArr = arr1.slice()
unshiftArr.unshift("first")

const amount = [44, 24, 56, 7]
const calcTipArr = (amount, percentage) => {
  return amount.map(bill => Number((bill * percentage / 100)
      .toFixed(2)));
}
const calcTotalArr = (amount, percentage) => {
  const tipArr = calcTipArr(amount, percentage)

  let total = [];
  for (let i = 0; i < amount.length; i++) {
    total.push(amount.at(i) + tipArr.at(i))
  }
  return total;
}
const young = {
  name: "kim", birthday: 1967, thisYear: new Date().getFullYear(), hasDriversLicense: false,
  calcAge: function () {
    this.age = this.thisYear - birthday;
    return this.age;
  },
  getSummary: function () {
    return `${this.name}은 나이가 ${this.calcAge()} 이고 
    ${this.hasDriversLicense ? "면허가 있습니다.": "무면허 입니다."}`
  }
}

div01.innerText = `age : ${young.getSummary()}`;
div01.classList = "content";

div02.innerText = `${yearsUntilRetirement(birthday, firstname)}`
div02.classList = 'content';

div03.innerText = `original : ${arr1} , 
                slice push:  ${pushArr} , 
                slice pop :  ${popArr} ,
                slice shift : ${shiftArr},
                slice unshift : ${unshiftArr},
                includes : ${pushArr.includes("us")}`
div03.classList = 'content';

div04.innerText = `total : ${calcTotalArr(amount, 15)}`
div04.classList = 'content';

