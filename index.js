//First, working function
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {
  // Get a reference to the table body. Find the reference in the .html file 
  

  // // Step 1: Loop Through `data` and console.log each ufo report object
  tableData.forEach(function dataToHtml(ufoReport) {   //this is the working anon function
  //function dataToHtml(ufoReport) {
    console.log(ufoReport);     
  //!!} //delete curly?

  // // Step 2:  Use d3 to append one table row `tr` for each ufo report object

    var new_row = tbody.append("tr");
       //bc we added new row, we move over the entries of the new object and ...
  //have to create place to put data before appending data
  // // Step 3:  Use `Object.entries` to console.log each ufo report value

     Object.entries(ufoReport).forEach(function([key, value]) {
       console.log(key, value)

  // // Step 4: Use d3 to append 1 cell per ufo report value (datetime, city, state, country, shape, durationMinutes, comments)

  //     // Append a cell to the row for each value
  //     // in the ufo report object
       var cell = tbody.append("td");

  // // Step 5: Use d3 to update each cell's text with
  // // ufo report values (weekday, date, high, low)

       cell.text(value);
     });
  });
    // ****
    // **** 
};



function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  // ****
  // ****
  dateVar = document.getElementById('datetime').value;
  console.log(dateVar);

  // Check to see if a date was entered and filter the
  // data using that date.
  // **** if condition
  if (dateVar != "") { 
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    // ****
    console.log("Someone entered something")
    //var filteredData = tableData.filter(checkDate);
    filteredData = tableData.filter(tableData=>tableData.datetime==dateVar);
};
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(data);