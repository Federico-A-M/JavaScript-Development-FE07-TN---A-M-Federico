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




//----------------------------------------------------------------------------------------------------------------------->


let new_array_name = [];
let new_array_category = [];
let new_array_place = [];

new_values_split.forEach(element => { new_array_name.push(element.name.toLowerCase()); });
new_values_split.forEach(element => { new_array_category.push(element.category.toLowerCase()); });
new_values_split.forEach(element => { new_array_place.push(element.place.toLowerCase()); });


document.getElementById("btn_searching").addEventListener("click", () => { 
    const $str_key = document.getElementById("past_name").new_values_split.toLowerCase();

    
    if (new_array_name.some( (element) => element === $str_key ) ) {
        
        let array_filter_name = values.filter( new_values_split => new_values_split.name.toLowerCase() === $str_key);

        removeContentMain();
        cardDivision(array_filter_name);




    } else if (new_array_category.some( (element) => element === $str_key ) ) {
        
        let array_filter_category = values.filter( new_values_split => new_values_split.category.toLowerCase() === $str_key);
        
        removeContentMain();
        cardDivision(array_filter_category);
        



    } else if (new_array_place.some( (element) => element === $str_key ) ) {

        let array_filter_place = values.filter( new_values_split => new_values_split.place.toLowerCase() === $str_key);

        removeContentMain();
        cardDivision(array_filter_place);
        
    } else {
        alert("No match, please try again")        
    };

});