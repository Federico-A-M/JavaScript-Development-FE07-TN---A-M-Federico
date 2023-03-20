let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let arrayApi = [];

async function getData(){
  try {
    
    const response = await fetch(urlApi);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.events);

    let values = Object.values(data.events);
    let dateCopy = Object.values(data.currentDate);
    let new_values_split = [];

    let copyDate = "";
    dateCopy.forEach((element) => {
      copyDate += element;
    });

    values.forEach((element) => {
      if (element.date >= data.currentDate) {
        new_values_split.push(element)
      }
    });

    console.log(new_values_split);
    
    createSelectors(new_values_split);
    cardDivision(new_values_split);

  } catch (error) {
    console.log(error);
  }
}
getData()
