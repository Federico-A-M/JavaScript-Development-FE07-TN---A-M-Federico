const $main = document.getElementById("main_index")

var cont = 0;
var identificador = 1;

var $div_cards_home = document.createElement("div");
$div_cards_home.classList.add("div_cards_home");
$div_cards_home.classList.add("row");

function cardDivision(values,cont_limit){

  let fragment = document.createDocumentFragment();

    values.forEach((element) => {
        
      
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
              $btn = document.createElement("button");

        
        $div_card_col.classList.add("card_col");
        $div_card_col.classList.add("col");
        $div_card.classList.add("card");
        $img.classList.add("card-img-top");
      
        
        let sources = element.image;
        let category = element.category;
        $img.setAttribute("src", sources);
        $img.setAttribute("alt", category);
        
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

        $btn.classList.add("open");
        $btn.classList.add("btn");
        $btn.classList.add("btn-primary");
        $btn.innerHTML = "See more";
        // $btn.setAttribute("id", `_id: ${element._id}`);
        // let btnId = `_id: ${element._id}`; 
        $btn.addEventListener('click', () => { 


          var modal = document.getElementById("myModal");
          var span = document.getElementsByClassName("close")[0];
          var body = document.getElementsByTagName("body")[0];
        
          var $imag_modal = document.getElementById("imag_modal");
          $imag_modal.setAttribute("src", sources);
          $imag_modal.setAttribute("alt", category);

          var $event_name = document.getElementById("event_name");
          $event_name.innerHTML = element.name
          var $category_name = document.getElementById("category_name");
          $category_name.innerHTML = element.category
          var $description_p = document.getElementById("description_p");
          $description_p.innerHTML = element.description
          
          var $h6_place = document.getElementById("h6_place");
          $h6_place.innerHTML = "Place:  " + element.place
          var $h6_date = document.getElementById("h6_date");
          $h6_date.innerHTML = "Date:  " + element.date
          var $h6_capacity = document.getElementById("h6_capacity");
          $h6_capacity.innerHTML = "Capacity:  " + element.capacity
          var $h6_assistance = document.getElementById("h6_assistance");
          $h6_assistance.innerHTML = "Assistance:  " + element.assistance
          var $h6_price = document.getElementById("h6_price");
          $h6_price.innerHTML = "Price:  " + element.price;
          

          modal.style.display = "block";
          body.style.position = "static";
          body.style.height = "100%";
          body.style.overflow = "hidden";
        
        
          span.onclick = function() {
            modal.style.display = "none";
          
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
          }
        
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
          
              body.style.position = "inherit";
              body.style.height = "auto";
              body.style.overflow = "visible";
            }
          }


        });

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
        $div_col_link.appendChild($btn);
        
        $div_cards_home.appendChild($div_card_col)

        fragment.appendChild($div_cards_home);
      
        cont ++;


       });

  $main.appendChild(fragment);

};

