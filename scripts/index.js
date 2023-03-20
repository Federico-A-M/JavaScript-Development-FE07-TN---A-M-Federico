let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let arrayApi = [];

async function getData(){
  try {
    
    const response = await fetch(urlApi);
    console.log(response);
    const data = await response.json();
    console.log(data);

    console.log(data.events);
    createSelectors(data.events);
    cardDivision(data.events);

  } catch (error) {
    console.log(error);
  }
}
getData()







