// from data.js
var ufoData = data;
var tbody = d3.select("tbody");
$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)
// YOUR CODE HERE!
var dropdown = d3.select('#select');  

var form = d3.select('#form');
// define action on user choosing date
dropdown.on("change", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var input = dropdown.node().value
    // clear output
    $('tbody').innerHTML = "";
     
    var filteredData = ufoData.filter(date => date.datetime === input);   
    console.log(filteredData);
    

    

    filteredData.forEach((filteredData) => {
      var row = tbody.append("tr");
      Object.entries(filteredData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        
        
      });
    });
    
}

    
   