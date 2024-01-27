const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const container = document.querySelector(".container")

container.append(div)
container.append(div1)
container.append(div2)

/*const name = "dahyun"
const type = typeof div;
console.log(type)
if(type === "something") console.log(type)*/

function bmi(obj) {
  const bmiValue =(obj.weights / obj.height **2).toFixed(2);
  obj.bmi = bmiValue;
  return bmiValue;
}
function compareBmi(a, b) {
  if(a.bmi > b.bmi)
    return `${a.name}'s BMI(${a.bmi}) is higher than ${b.name}'s (${b.bmi})`
  else if(b.bmi > a.bmi)
    return `${b.name}'s BMI(${b.bmi}) is higher than ${a.name}'s (${a.bmi})`
  else
    return "the same"
}

const marks = {name:"marks", weights: 78, height: 1.69}
const john = {name:"john", weights: 92, height: 1.95}

const marksBmi = bmi(marks)
const johnBmi = bmi(john)

const compare= compareBmi(marks, john);

const dolphins = {name: "dolphins", speed: [96, 108, 89] }
const koalas = {name: "koalas", speed: [88, 91, 110] }


function averageSpeed(obj) {
  const avgValue = obj.speed.reduce((acc, curr, i, arr) =>
    acc + curr / arr.length, 0);
  obj.avg = Math.round(avgValue)
  return avgValue.toFixed(2);
}
const dolphinsAvg = averageSpeed(dolphins)
const koalasAvg = averageSpeed(koalas);

const compareSpeed = (a, b) => {
  if(a.avg > b.avg) return `${a.name} win the trophy 🏆`
  else return `${b.name} win the trophy 🏆`
}

div.innerText = `${compare}`;
div.classList = "content";

div1.innerText = `marks bmi : ${marks.bmi}`;
div1.classList = 'content';

div2.innerText = `${compareSpeed(dolphins, koalas)} 
            dolphin speed: ${dolphinsAvg}
            koalas speed: ${koalasAvg}`;
div2.classList = 'content';



