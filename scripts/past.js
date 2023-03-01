let values = Object.values(data.events);
let dateCopy = Object.values(data.currentDate);
let new_values_split = [];

let copyDate = "";
dateCopy.forEach((element) => {
  copyDate += element;
});

values.forEach((element) => {
  if (element.date < data.currentDate) {
    new_values_split.push(element)
  }
});

cardDivision(new_values_split);




// -------------------------------------------searching----------------------------------------------------->
document.getElementById("btn_searching_past").addEventListener("click", () => { 
    const $str_key = document.getElementById("past_name").value.toLowerCase();
    searchingBar( new_values_split, $str_key);
});




// -------------------------------------------checkbox----------------------------------------------------->
document.getElementById("Category1").addEventListener("click", () => { 
  const $cat1 = document.getElementById("Category1");
  const $str_input_checkbox = document.getElementById("Category1").value.toLowerCase();
  checkboxShow($cat1, new_values_split, $str_input_checkbox);
});

document.getElementById("Category2").addEventListener("click", () => {
  const $cat2 = document.getElementById("Category2"); 
  const $str_input_checkbox = document.getElementById("Category2").value.toLowerCase();
  checkboxShow($cat2, new_values_split, $str_input_checkbox);
});

document.getElementById("Category3").addEventListener("click", () => {
  const $cat3 = document.getElementById("Category3"); 
  const $str_input_checkbox = document.getElementById("Category3").value.toLowerCase();
  checkboxShow($cat3, new_values_split, $str_input_checkbox);
});

document.getElementById("Category4").addEventListener("click", () => {
  const $cat4 = document.getElementById("Category4"); 
  const $str_input_checkbox = document.getElementById("Category4").value.toLowerCase();
  checkboxShow($cat4, new_values_split, $str_input_checkbox);
});

document.getElementById("Category5").addEventListener("click", () => {
  const $cat5 = document.getElementById("Category5"); 
  const $str_input_checkbox = document.getElementById("Category5").value.toLowerCase();
  checkboxShow($cat5, new_values_split, $str_input_checkbox);
});

