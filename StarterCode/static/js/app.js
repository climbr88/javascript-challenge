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
    
    var input = $('#datetime').value;
    // var inputValue = inputElement.attribute("value");
    var filteredData = ufoData.filter(date => date.datetime === input);   
    console.log(filteredData) 
    filteredData.forEach(function(ufoReport){
        console.log(ufoReport);
        var row = tdbody.append("tr");


    });
    // below gave each listing in data file
    // data.forEach(function(ufoReport) {
    //     console.log(ufoReport);
    //     var row = tbody.append("tr");
    //   });
};








// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// // BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
