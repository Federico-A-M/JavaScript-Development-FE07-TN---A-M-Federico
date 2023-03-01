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
    Recibe un array y str proveniente del valor del checkbox
    realiza la operacion de generar el filtrado de las cards que coincidan con el valor str
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
        //removeContentMain()
        cardDivision($array_filter_category);

    } else {
        //si boolean = 0 envia a desactivar las cartas que posean esta propiedad.
        let $array_filter_category = $array.filter( $array => $array.category.toLowerCase() === $str_input_checkbox);
        $array_filter_category.forEach(element => { removeCards(element.name) });
    }
};



/** 
    veerifica si otras casillas estan disponibles
*/ 
function verifyCheck()
{


    let $check0 = document.getElementById('Category0').checked;
    let $check1 = document.getElementById('Category1').checked;
    let $check2 = document.getElementById('Category2').checked;
    let $check3 = document.getElementById('Category3').checked;
    let $check4 = document.getElementById('Category4').checked;
    let $check5 = document.getElementById('Category5').checked;
    let $check6 = document.getElementById('Category6').checked;



    if ($check0 || $check1 || $check2 || $check3 || $check4 || $check5 || $check6) {
        alert('checkboxssss estan seleccionado');
    }
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