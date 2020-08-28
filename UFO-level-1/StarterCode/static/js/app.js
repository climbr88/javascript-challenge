// from data.js
var ufoData = data;
var tbody = d3.select("tbody");
$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)
// YOUR CODE HERE!
var button = d3.select('#filter-btn');  
var form = d3.select('#form')
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    
    // clear output
    $('tbody').innerHTML = "";
    
    var input = $('#datetime').value;
    var filteredData = ufoData.filter(date => date.datetime === input);   
    console.log(filteredData) 
    
    
    

    filteredData.forEach((filteredData) => {
      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        //clear input field
        $('#datetime').value = "" 
      });
    });
    
}

    
   