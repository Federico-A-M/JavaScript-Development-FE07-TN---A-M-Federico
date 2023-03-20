let new_array_name = [];
let new_array_category = [];
let new_array_place = [];

let arrayContentChecks = [];




  
  
  /** 
   Recibe un array y str proveniente de la barra de busqueda
   realiza foreach del array y genera 3 nuevos arreglos dependiedo la tematica
   si el parametro str pertenece a alguno de los 3 arreglos imprime la informacion correspondiente
   sino da una alerta al usuario de que no se encuentra match disponible.
   */ 
async function searchingBar($str_key){


     
        try {
          
            const response = await fetch(urlApi);
            console.log(response);
            const data = await response.json();

            data.events.forEach(element => { new_array_name.push(element.name.toLowerCase()); });
            data.events.forEach(element => { new_array_category.push(element.category.toLowerCase()); });
            data.events.forEach(element => { new_array_place.push(element.place.toLowerCase()); });
        
        
            if (new_array_name.some( (element) => element === $str_key ) ) {
                
                let array_filter_name = data.events.filter( values => values.name.toLowerCase() === $str_key);
        
                removeContentMain();
                cardDivision(array_filter_name);
                
            } else if (new_array_category.some( (element) => element === $str_key ) ) {
                
                let array_filter_category = data.events.filter( values => values.category.toLowerCase() === $str_key);
                
                removeContentMain();
                cardDivision(array_filter_category);
                
        
            } else if (new_array_place.some( (element) => element === $str_key ) ) {
        
                let array_filter_place = data.events.filter( values => values.place.toLowerCase() === $str_key);
        
                removeContentMain();
                cardDivision(array_filter_place);
                
            } else {
                alert("No match, please try again");
            };
        
           
        } catch (error) {
            console.log(error);
        } 



};








/**
Recibe un booleano, el array de la logica de pagina, y la categoria que esta iterando en ese momento
a analizar si es mostrable o no y compatible con otras categorias desde: --> selectors.js

 ---> deberia poder llegar el objeto a analizar

 */
function checkboxShow($booleano, $arrayOriginal, $str_input_checkbox)
{
/** 
    LA QUEDE ACA, PENSANDO COMO PASAR EL OBJETO CHECKBOX PARA VALIDAR SI ESTA ACTIVADO O NO, PARA SABER COMO HAGO
    PARA AGREGAR O BORRAR CONTENIDOS... UN QUILOMBITO POR ACA
*/ 
    if($booleano) {

        let $array_filter_category = $arrayOriginal.filter( $arrayOriginal => $arrayOriginal.category.toLowerCase() === $str_input_checkbox);
        agregarCheckBtn($array_filter_category, $arrayOriginal);

    } else {

        //si boolean = 0 envia a desactivar las cartas que posean esta propiedad.
        let $array_filter_category = $arrayOriginal.filter( $arrayOriginal => $arrayOriginal.category.toLowerCase() === $str_input_checkbox);
        quitarCheckBtn($array_filter_category, $arrayOriginal);
    }
};



/** 
    Recibe el filtrado y el original
    agrega al array dedicado los elementos recien peticionados
    y manda a verificar el estado actual de los inputs 
*/ 
function agregarCheckBtn($array_filtrado, $arrayOriginal){

    $array_filtrado.forEach(element => {
        arrayContentChecks.push(element)
    });

    verifyCheck(arrayContentChecks, $arrayOriginal);
}


/** 
    Recibe el filtrado y el original
    borra del array dedicado los elementos peticionados
    y manda a verificar el estado actual de los inputs 
*/ 
function quitarCheckBtn($array_filtrado, $arrayOriginal){
    
    $array_filtrado.forEach((item) => {
        for (let index in arrayContentChecks) {
          // Si el índice de ambos array coinciden se procederá
          // a eliminar el elemento de «arrayContentChecks»:
          if (arrayContentChecks[index].category == item.category) {
            arrayContentChecks.splice(index, 1);
          }
        }
      });

    verifyCheck(arrayContentChecks, $arrayOriginal);
}





/** 
    veerifica si otras casillas estan activadas, de ser asi imprime el array en el estado actual
    sino verifica el estado del array dedicado
    si no contiene elementos retorna al estado original de contenido
    sino sino imprime el contenido recien introducido
      
*/ 

function verifyCheck($this, $arrayOriginal)
{

        
    let $check0 = document.getElementById('Category0').checked;
    let $check1 = document.getElementById('Category1').checked;
    let $check2 = document.getElementById('Category2').checked;
    let $check3 = document.getElementById('Category3').checked;
    let $check4 = document.getElementById('Category4').checked;
    let $check5 = document.getElementById('Category5').checked;
    let $check6 = document.getElementById('Category6').checked;
    
    
    
    if ($check0 || $check1 || $check2 || $check3 || $check4 || $check5 || $check6) {
        removeContentMain();
        cardDivision($this);
        
    } else {

        if ($this.length == 0) {
            removeContentMain();
            cardDivision($arrayOriginal);
        } else {
            removeContentMain()
            cardDivision($this);
        }
        
    };
};