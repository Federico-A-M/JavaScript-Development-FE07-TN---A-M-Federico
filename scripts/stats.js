const $tbody_events = document.getElementById("tbody_events_statistics");
const $tbody_upcoming = document.getElementById("tbody_upcoming_statistics");
const $tbody_past = document.getElementById("tbody_past_statistics");

let $array_first_table = [];
let $array_second_table = [];
let $array_third_table = [];

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

async function getData(){
  try {
    
    const response = await fetch(urlApi);
    console.log(response);

    const data = await response.json();
    console.log(data.events);



    mayorAsistencia(data.events)
    upcomingTable(data);

  } catch (error) {
    console.log(error);
  }
}
getData()




async function mayorAsistencia($array){
    
    let $mayor_asistencia = 0;
    let $mayor_obj = {};
    let $menor_asistencia = 9999999999999999999999n;
    let $menor_obj = {};
    let $mayor_capacidad = 0;
    let $mayor_cap_obj = {};

    $array.forEach(element => {
        // console.log(element.assistance); --> 497981
         if (element.assistance > $mayor_asistencia) {
             $mayor_asistencia = element.assistance
             $mayor_obj = element;
         }

         if (element.assistance < $menor_asistencia) {
            $menor_asistencia = element.assistance
            $menor_obj = element;
         }

         if (element.capacity > $mayor_capacidad ) {
            $mayor_capacidad = element.capacity 
            $mayor_cap_obj = element;
         }
    });

    $array_first_table.push($mayor_obj);
    $array_first_table.push($menor_obj);
    $array_first_table.push($mayor_cap_obj);

    console.log($array_first_table);
    createFirstTr($array_first_table);


};


async function createFirstTr($array){

    const $tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {

        if (i<2) {
            const $th = document.createElement("th");
            $th.classList.add("th_null");
            $th.innerHTML = `<p> Event name: ${$array[i].name} </p>
            <p> Assistance: ${$array[i].assistance} </p>    
            `;

            $tr.appendChild($th)
        }

        if (i==2) {
            const $th = document.createElement("th");
            $th.classList.add("th_null");
            $th.innerHTML = `<p> Event name: ${$array[i].name} </p>
            <p> Capacity: ${$array[i].capacity} </p>   
            `;
            
            $tr.appendChild($th)
        }

    }
    $tbody_events.appendChild($tr)
};

async function upcomingTable(data){

    let values = Object.values(data.events);
    let dateCopy = Object.values(data.currentDate);
    let upcoming = [];
    let past = [];


    let copyDate = "";
    dateCopy.forEach((element) => {
      copyDate += element;
    });

    values.forEach((element) => {
      if (element.date < data.currentDate) {
        past.push(element)
      }
    });

    values.forEach((element) => {
        if (element.date >= data.currentDate) {
          upcoming.push(element)
        }
      });


      console.log(upcoming);
      console.log(past);

      sumatoria_futura(upcoming, $tbody_upcoming);
      sumatoria_pasada(past, $tbody_past);

};



async function sumatoria_pasada($array, $tbody){

    let $total = 0;
    let values = [
        {
          "category": "books",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "cinema",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "concert",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "food",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "museum",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "party",
          "ganancias": 0,
          "porcentaje": 0,
        },      {
          "category": "race",
          "ganancias": 0,
          "porcentaje": 0,
        },
  
      ];

    $array.forEach(element => {
        
        if (element.category == "Books") {
            
            values[0].ganancias += element.price;
            values[0].porcentaje += parseInt(element.assistance);
            $total += parseInt(element.assistance);
        };

        if (element.category == "Cinema") {
            values[1].ganancias += element.price;
            values[1].porcentaje += parseInt(element.assistance);
            $total += parseInt(element.assistance);
        };

        if (element.category == "Concert") {
            values[2].ganancias += element.price;
            values[2].porcentaje += element.assistance
            $total += parseInt(element.assistance);
        };

        if (element.category == "Food") {
            values[3].ganancias += element.price;
            values[3].porcentaje += element.assistance
            $total += parseInt(element.assistance);
        };

        if (element.category == "Museum") {
            values[4].ganancias += element.price;
            values[4].porcentaje += element.assistance
            $total += parseInt(element.assistance);
        };

        if (element.category == "Party") {
            values[5].ganancias += element.price;
            values[5].porcentaje += element.assistance
            $total += parseInt(element.assistance);
        };

        if (element.category == "Race") {
            values[6].ganancias += element.price;
            values[6].porcentaje += element.assistance;
            $total += parseInt(element.assistance);
        };
    });


     values.forEach(element => {
         console.log(element);
            const $tr = document.createElement("tr");

            for (let i = 0; i < 3; i++) {
        
                    if (i==0) {
                        
                        const $th = document.createElement("th");
                        $th.classList.add("th_null");
                        $th.innerHTML = `<p> ${element.category} </p>`;
                        $tr.appendChild($th)
                    };

                    if (i==1) {
                        const $th = document.createElement("th");
                        $th.classList.add("th_null");
                        $th.innerHTML = `<p> ${element.ganancias} </p>`;
                        $tr.appendChild($th)        
                    }

                    if (i==2) {
                        const $th = document.createElement("th");
                        $th.classList.add("th_null");
                        $th.innerHTML = `<p> ${element.porcentaje} </p>`;
                        $tr.appendChild($th) 
                    }
                                    
            };
        
            $tbody.appendChild($tr)
        }); 
        
    console.log($total);


};


async function sumatoria_futura($array, $tbody){

    let $total = 0;
    let values = [
        {
          "category": "books",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "cinema",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "concert",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "food",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "museum",
          "ganancias": 0,
          "porcentaje": 0,
        },
        {
          "category": "party",
          "ganancias": 0,
          "porcentaje": 0,
        },      {
          "category": "race",
          "ganancias": 0,
          "porcentaje": 0,
        },
  
      ];

    $array.forEach(element => {
        
        if (element.category == "Books") {
            
            values[0].ganancias += element.price;
            values[0].porcentaje += parseInt(element.estimate);
            $total += parseInt(element.estimate);
        };

        if (element.category == "Cinema") {
            values[1].ganancias += element.price;
            values[1].porcentaje += parseInt(element.estimate);
            $total += parseInt(element.estimate);
        };

        if (element.category == "Concert") {
            values[2].ganancias += element.price;
            values[2].porcentaje += element.estimate
            $total += parseInt(element.estimate);
        };

        if (element.category == "Food") {
            values[3].ganancias += element.price;
            values[3].porcentaje += element.estimate
            $total += parseInt(element.estimate);
        };

        if (element.category == "Museum") {
            values[4].ganancias += element.price;
            values[4].porcentaje += element.estimate
            $total += parseInt(element.estimate);
        };

        if (element.category == "Party") {
            values[5].ganancias += element.price;
            values[5].porcentaje += element.estimate
            $total += parseInt(element.estimate);
        };

        if (element.category == "Race") {
            values[6].ganancias += element.price;
            values[6].porcentaje += element.estimate;
            $total += parseInt(element.estimate);
        };
    });


     values.forEach(element => {
         console.log(element);
            const $tr = document.createElement("tr");

            for (let i = 0; i < 3; i++) {
        
                    if (i==0) {
                        
                        const $th = document.createElement("th");
                        $th.classList.add("th_null");
                        $th.innerHTML = `<p> ${element.category} </p>`;
                        $tr.appendChild($th)
                    };

                    if (i==1) {
                        const $th = document.createElement("th");
                        $th.classList.add("th_null");
                        $th.innerHTML = `<p> ${element.ganancias} </p>`;
                        $tr.appendChild($th)        
                    }

                    if (i==2) {
                        const $th = document.createElement("th");
                        $th.classList.add("th_null");
                        $th.innerHTML = `<p> ${element.porcentaje} </p>`;
                        $tr.appendChild($th) 
                    }
                                    
            };
        
            $tbody.appendChild($tr)
        }); 
        
    console.log($total);


};