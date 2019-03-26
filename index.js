//First, working function
var tableData = data;

// Get a reference to the table body. Find the reference in the .html file 
var tbody = d3.select("tbody");


function buildTable(data) {

  // First, clear out any existing data
  tbody.html("");

  // Loop Through `data` and console.log each ufo report object
  tableData.forEach(function dataToHtml(ufoReport) {   

    console.log(ufoReport);     


  // Use d3 to append one table row `tr` for each ufo report object
    var new_row = tbody.append("tr");

  // Use `Object.entries` to console.log each ufoReport value
     Object.entries(ufoReport).forEach(function([key, value]) {
       console.log(key, value)

  // Use d3 to append 1 cell per ufoReport value
       var cell = tbody.append("td");

  // Use d3 to update each cell's text with ufoReport values
       cell.text(value);
     });
  });
};



var flt = d3.select("#filter-btn");

// Grab the datetime value from the filter
var dateVar = d3.select("#datetime");    


function handleClick() {

  //prevent page from refreshing
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  //var userInput = dateVar.value();
  //var userInput = dateVar.property.value;
  //var userInput = document.dateVar.value();
  //var userInput = dateVar.property("value");
  //var userInput = document.property("value");
  //var userInput = dateVar.value.trim();
  var userInput = document.getElementById('datetime').value;

  var filteredData = tableData.filter(tableData => tableData.datetime === userInput);
  
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);



