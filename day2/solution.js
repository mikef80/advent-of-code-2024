const fs = require("fs");
const path = require("path");

const reports = fs.readFileSync(path.join(__dirname, "./reports.txt"), "utf-8").split("\n");

// PART 1

/* const safetyArray = [];

reports.forEach((report) => {
  const reportArray = report.split(" ").map((number) => Number(number));

  const allIncreasing = reportArray.reduce((isValid, currentValue, index, array) => {
    if (!isValid) return false;
    if (index === array.length - 1) return true;

    return currentValue < array[index + 1];
  }, true);

  const allDecreasing = reportArray.reduce((isValid, currentValue, index, array) => {
    if (!isValid) return false;
    if (index === array.length - 1) return true;

    return currentValue > array[index + 1];
  }, true);

  let gapThreeOrLess = true;

  for (let i = 0; i < reportArray.length - 1; i++) {
    if (
      reportArray[i] - reportArray[i + 1] <= 3 &&
      reportArray[i] - reportArray[i + 1] >= -3
    ) {
      gapThreeOrLess = true;
    } else {
      gapThreeOrLess = false;
      break;
    }
  }

  if (gapThreeOrLess && (allIncreasing || allDecreasing)) {
    safetyArray.push(reportArray);
  }

});

console.log(safetyArray.length); */

// PART 2

const allIncreasing = (array) => {
  if (!array) return null;
  if (Array.isArray(array) === false) return false;
  
};


const allDecreasing = () => {};
const gapLessThanThree = () => {};
const removeNumber = () => {};

module.exports = { allIncreasing };
