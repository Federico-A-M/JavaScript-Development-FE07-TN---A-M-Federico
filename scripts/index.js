let values = Object.values(data.events);
//console.log(values)

cardDivision(values,4);



let new_array_name = [];
let new_array_category = [];
let new_array_place = [];


values.forEach(element => { new_array_name.push(element.name.toLowerCase()); });
values.forEach(element => { new_array_category.push(element.category.toLowerCase()); });
values.forEach(element => { new_array_place.push(element.place.toLowerCase()); });
//console.log(new_array_name);
//console.log(new_array_category);
//console.log(new_array_place);


document.getElementById("btn_searching").addEventListener("click", () => { 
    const $str_key = document.getElementById("name").value.toLowerCase();

    
    if (new_array_name.some( (element) => element === $str_key ) ) {
        
        let array_filter_name = values.filter( values => values.name.toLowerCase() === $str_key);

        console.log(array_filter_name.length)
        removeContentMain();
        cardDivision(array_filter_name, array_filter_name.length);




    } else if (new_array_category.some( (element) => element === $str_key ) ) {
        
        let array_filter_category = values.filter( values => values.category.toLowerCase() === $str_key);
        
        console.log(array_filter_category.length)
        removeContentMain();
        cardDivision(array_filter_category, array_filter_category.length);
        



    } else if (new_array_place.some( (element) => element === $str_key ) ) {

        let array_filter_place = values.filter( values => values.place.toLowerCase() === $str_key);

        console.log(array_filter_place.length)
        removeContentMain();
        cardDivision(array_filter_place, array_filter_place.length);
        
    } else {
        alert("No match, please try again")        
    };

});



/*
.map() --> retorna un nuevo array con misma cantidad de elementos

let nuevoarray = primerarray.map( primerarray , indice , array => operacion_a_realizar);

.filter() --> retorna un nuevo array con los elementos que cumplan la condicion
let nuevoarray = primerarray.filter( primerarray => condicion);


.find() --> retorna el objeto que cumple con la condicion // si no lo encuentra retorna undefined
array.find( element => element.value y condicion)

.findIndex() --> retorna el indice de la condicion que le estamos pasando // sino retorna -1
array.findIndex( element => element.value y condicion)

.reduce() --> recorre un array segun y permite una operacion mediante un acumulador



.some() --> comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. retorna true o false





.sort() 
.forEach()
*/