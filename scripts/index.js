let values = Object.values(data.events);
cardDivision(values,4);


//_-------------------------------------------searching----------------------------------------------------->
document.getElementById("btn_searching").addEventListener("click", () => {   
    const $str_key = document.getElementById("name").value.toLowerCase();
    searchingBar( values, $str_key);
});



//_-------------------------------------------checkbox----------------------------------------------------->


document.getElementById("Category1").addEventListener("click", () => { 
    const $cat1 = document.getElementById("Category1");
    const $str_input_checkbox = document.getElementById("Category1").value.toLowerCase();
    checkboxShow($cat1, values, $str_input_checkbox);
  });
  
  document.getElementById("Category2").addEventListener("click", () => {
    const $cat2 = document.getElementById("Category2"); 
    const $str_input_checkbox = document.getElementById("Category2").value.toLowerCase();
    checkboxShow($cat2, values, $str_input_checkbox);
  });
  
  document.getElementById("Category3").addEventListener("click", () => {
    const $cat3 = document.getElementById("Category3"); 
    const $str_input_checkbox = document.getElementById("Category3").value.toLowerCase();
    checkboxShow($cat3, values, $str_input_checkbox);
  });
  
  document.getElementById("Category4").addEventListener("click", () => {
    const $cat4 = document.getElementById("Category4"); 
    const $str_input_checkbox = document.getElementById("Category4").value.toLowerCase();
    checkboxShow($cat4, values, $str_input_checkbox);
  });
  
  document.getElementById("Category5").addEventListener("click", () => {
    const $cat5 = document.getElementById("Category5"); 
    const $str_input_checkbox = document.getElementById("Category5").value.toLowerCase();
    checkboxShow($cat5, values, $str_input_checkbox);
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