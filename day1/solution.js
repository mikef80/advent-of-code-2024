const fs = require("fs");

const lists = fs.readFileSync("./lists.txt", "utf-8");

const extractedLists = [...lists.match(/\d{5}/g)];

const leftList = [];
const rightList = [];
let totalDistance = 0;

extractedLists.forEach((item, index) => {
  if (index % 2 === 0) {
    leftList.push(Number(item));
  } else {
    rightList.push(Number(item));
  }
});

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

for (let i = 0; i < leftList.length; i++) {
  const max = Math.max(leftList[i], rightList[i]);
  const min = Math.min(leftList[i], rightList[i]);

  totalDistance += max - min;
}

console.log("day 1: ", totalDistance);

// day 2

const occurencesArray = [];

leftList.forEach((leftNumber) => {
  let count = 0;
  rightList.forEach((rightNumber) => {
    if (leftNumber === rightNumber) {
      count++;
    }
  });
  occurencesArray.push(leftNumber * count);
});

console.log('day 2: ',occurencesArray.reduce((a, b) => a + b));