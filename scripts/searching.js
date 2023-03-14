let new_array_name = [];
let new_array_category = [];
let new_array_place = [];

/** 
    Recibe un array y str proveniente de la barra de busqueda
    realiza foreach del array y genera 3 nuevos arreglos dependiedo la tematica
    si el parametro str pertenece a alguno de los 3 arreglos imprime la informacion correspondiente
    sino da una alerta al usuario de que no se encuentra match disponible.
*/ 
function searchingBar(values, $str_key)
{
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








/**
Recibe un booleano, el array de la logica de pagina, y la categoria que esta iterando en ese momento
a analizar si es mostrable o no y compatible con otras categorias desde: --> selectors.js

 ---> deberia poder llegar el objeto a analizar

 */
function checkboxShow($booleano, $array, $str_input_checkbox)
{
/** 
    LA QUEDE ACA, PENSANDO COMO PASAR EL OBJETO CHECKBOX PARA VALIDAR SI ESTA ACTIVADO O NO, PARA SABER COMO HAGO
    PARA AGREGAR O BORRAR CONTENIDOS... UN QUILOMBITO POR ACA
*/ 
    if($booleano) {
        //si boolean = 1 manda a revisar si otras categorias estan activadas.

        let $array_filter_category = $array.filter( $array => $array.category.toLowerCase() === $str_input_checkbox);
        //removeContentMain();
        verifyCheck($array_filter_category);
        //falta hacer un return a un lado donde guardo este array y voy borrando y agregando desde el array
        //si el array esta vacio returna al origen  


    } else {
        //si boolean = 0 envia a desactivar las cartas que posean esta propiedad.
        
        let $array_filter_category = $array.filter( $array => $array.category.toLowerCase() === $str_input_checkbox);
        $array_filter_category.forEach(element => { removeCards(element.name) });
    }
};



/** 
    veerifica si otras casillas estan disponibles   
*/ 
function verifyCheck($this)
{


    let $check0 = document.getElementById('Category0').checked;
    let $check1 = document.getElementById('Category1').checked;
    let $check2 = document.getElementById('Category2').checked;
    let $check3 = document.getElementById('Category3').checked;
    let $check4 = document.getElementById('Category4').checked;
    let $check5 = document.getElementById('Category5').checked;
    let $check6 = document.getElementById('Category6').checked;



    if ($check0 || $check1 || $check2 || $check3 || $check4 || $check5 || $check6) {
        cardDivision($this);
        
    } else {
        removeContentMain()
        cardDivision($array_filter_place);
    };
};



/** 
    veerifica si otras casillas estan disponibles
*/ 
function enableCheckbox()
{

};



/** 
    veerifica si otras casillas estan disponibles
*/ 
function disableCheckbox()
{

};