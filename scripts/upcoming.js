let values = Object.values(data.events);
let dateCopy = Object.values(data.currentDate);
let new_values_split = [];

let copyDate = "";
dateCopy.forEach((element) => {
  copyDate += element;
});

values.forEach((element) => {
  if (element.date >= data.currentDate) {
    new_values_split.push(element)
  }
});

cardDivision(new_values_split,4);