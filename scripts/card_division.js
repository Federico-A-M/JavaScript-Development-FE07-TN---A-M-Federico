const $main = document.getElementById("main_index")

var cont = 0;

var $div_cards_home = document.createElement("div");
$div_cards_home.classList.add("div_cards_home");
$div_cards_home.classList.add("row");

function cardDivision(values,cont_limit){

    values.forEach((element) => {
        //  console.log(element);
      
        if (cont==cont_limit) {
          $div_cards_home = document.createElement("div");
          $div_cards_home.classList.add("div_cards_home");
          $div_cards_home.classList.add("row");
      
          cont = 0;
        }
      
        const $div_card_col = document.createElement("div"),
              $div_card = document.createElement("div"),
              $img = document.createElement("img"),
              $div_card_body = document.createElement("div"),
              $h5_card_title = document.createElement("h5"),
              $p_card_text = document.createElement("p"),
              $div_row = document.createElement("div"),
              $div_col_price = document.createElement("div"),
              $span_price = document.createElement("span"),
              $div_col_link = document.createElement("div"),
              $anchor_btn = document.createElement("a");
        
              //$ = document.createTextNode("..."), para asignar alguna variable de tipo texto a un atributo
              //$ = document.querySelector(".cards"),
              //$.classList.add(""); dar clase de css a un objeto del dom
        
        $div_card_col.classList.add("card_col");
        $div_card_col.classList.add("col");
        $div_card.classList.add("card");
        $img.classList.add("card-img-top");
      
        
        let sources = element.image;
        let category = element.category;
        $img.setAttribute("src", sources);
        $img.setAttribute("alt", category);
        // $img.setAttribute("widht","300");
        // $img.setAttribute("height","200");
        
        $div_card_body.classList.add("card-body");
        
        $h5_card_title.classList.add("card-title");
        let title = element.name;
        $h5_card_title.innerHTML = title;
        
        $p_card_text.classList.add("card-text");
        let description = element.description;
        $p_card_text.innerHTML = description;
        
        $div_row.classList.add("row");
        $div_row.classList.add("pri_btn");
        $div_col_price.classList.add("col");
        $div_col_link.classList.add("col");

        $anchor_btn.classList.add("btn");
        $anchor_btn.classList.add("btn-primary");
        $anchor_btn.classList.add("data-open")
        $anchor_btn.innerHTML = "See more";


        let price = `\$ ${element.price}`;
        $span_price.innerHTML = price;
        
        $div_card_col.appendChild($div_card);
        $div_card.appendChild($img);
        $div_card.appendChild($div_card_body);
        $div_card_body.appendChild($h5_card_title);
        $div_card_body.appendChild($p_card_text);
        $div_card_body.appendChild($div_row);
        $div_row.appendChild($div_col_price);
        $div_row.appendChild($div_col_link);
        
        $div_col_price.appendChild($span_price);
        $div_col_link.appendChild($anchor_btn);
        
        $div_cards_home.appendChild($div_card_col)
        $main.appendChild($div_cards_home);
      
        cont ++;
        console.log(cont)
       });


}