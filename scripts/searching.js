let new_array_name = [];
let new_array_category = [];
let new_array_place = [];

function searchingBar(values, $str_key){

    values.forEach(element => { new_array_name.push(element.name.toLowerCase()); });
    values.forEach(element => { new_array_category.push(element.category.toLowerCase()); });
    values.forEach(element => { new_array_place.push(element.place.toLowerCase()); });

    if (new_array_name.some( (element) => element === $str_key ) ) {
        
        let array_filter_name = values.filter( values => values.name.toLowerCase() === $str_key);

        removeContentMain();
        cardDivision(array_filter_name);




    } else if (new_array_category.some( (element) => element === $str_key ) ) {
        
        let array_filter_category = values.filter( values => values.category.toLowerCase() === $str_key);
        
        removeContentMain();
        cardDivision(array_filter_category);
        

    } else if (new_array_place.some( (element) => element === $str_key ) ) {

        let array_filter_place = values.filter( values => values.place.toLowerCase() === $str_key);

        removeContentMain();
        cardDivision(array_filter_place);
        
    } else {
        alert("No match, please try again");
    };
};








function checkboxShow(array, $str_input_checkbox){

    let array_filter_category = array.filter( array => array.category.toLowerCase() === $str_input_checkbox);
      
    removeContentMain();
    cardDivision(array_filter_category);



};