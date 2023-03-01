const $header_section = document.getElementById("selectors");
let $data = Object.values(data.events);
let $array_of_categorys = [];

$data.forEach(element => { $array_of_categorys.push(element.category.toLowerCase()); });

const dataArr = new Set($array_of_categorys);
let $data_cat = [...dataArr].sort();

console.log($data_cat); 


function createSelectors($array)
{
    let fragment = document.createDocumentFragment();
    
    for (let i = 0; i < $data_cat.length; i++) {

        //console.log(i)
        
        const $div_text_switcher = document.createElement("div"),
        $div_form_check = document.createElement("div"),
        $checkbox_input = document.createElement("input"),
        $label_check = document.createElement("label");
        
        $div_text_switcher.classList.add("div_text_switcher");
        $div_text_switcher.classList.add("col");
        $div_text_switcher.classList.add("ps-5");
        
        $div_form_check.classList.add("form-check");
        $div_form_check.classList.add("form-switch");
        
        $checkbox_input.classList.add("form-check-input");
        $checkbox_input.setAttribute("type", "checkbox");
        $checkbox_input.setAttribute("role", "switch");
        $checkbox_input.setAttribute("id", `Category${i}`);
        $checkbox_input.setAttribute("name", `Category${i}`);
        $checkbox_input.setAttribute("value", $data_cat[i]);
        $checkbox_input.addEventListener("click", () => { 
            
            const $checked = $checkbox_input.checked;
            //console.log($checked)
            checkboxShow($checked, $array, $data_cat[i]);

          });

    
        $label_check.classList.add("form-check-label");
        $label_check.setAttribute("for",`Category${i}`);
        $label_check.innerText = $data_cat[i]

        $div_form_check.appendChild($checkbox_input);
        $div_form_check.appendChild($label_check);

        $div_text_switcher.appendChild($div_form_check)
        
        
        fragment.appendChild($div_text_switcher)
    };
    
    $header_section.appendChild(fragment);

    const $div_searching_resize = document.createElement("div"),
    $div_d_flex = document.createElement("div"),
    $bar_search_input = document.createElement("input"),
    $btn_searching = document.createElement("button");


    $div_searching_resize.classList.add("searching__resize");
    $div_searching_resize.classList.add("col-6");
    
    $div_d_flex.classList.add("d-flex");
    $div_d_flex.setAttribute("role", "search");

    $bar_search_input.classList.add("form-control");
    $bar_search_input.classList.add("me-2");
    $bar_search_input.setAttribute("type", "search");
    $bar_search_input.setAttribute("name", "name");
    $bar_search_input.setAttribute("id", "name");
    $bar_search_input.setAttribute("placeholder", "What event are you looking for?");

    $btn_searching.classList.add("btn");
    $btn_searching.classList.add("btn-outline-light");
    $btn_searching.setAttribute("id", "btn_searching");
    $btn_searching.setAttribute("type", "submit");
    $btn_searching.innerText = "Search";
    $btn_searching.addEventListener("click", () => {   

        const $str_key = document.getElementById("name").value.toLowerCase();
        searchingBar( values, $str_key);

    });


    $div_d_flex.appendChild($bar_search_input);
    $div_d_flex.appendChild($btn_searching);

    $div_searching_resize.appendChild($div_d_flex);

    $header_section.appendChild($div_searching_resize);
    
    
};

