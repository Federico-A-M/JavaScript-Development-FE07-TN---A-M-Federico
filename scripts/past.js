
let values = Object.values(data.events);
let dateCopy = Object.values(data.currentDate);

let copyDate = "";
dateCopy.forEach(element => {
    copyDate += element
});


 values.forEach(element => {
    
    
    if (element.date < data.currentDate) {
        
        console.log(element);
    }
    
    
});

