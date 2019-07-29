  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });


var belgium = theTable.rows[2]; 

function findBelgiumData (){ 
var belgiumData =
[]; for (let i = 2; i < belgium.cells.length; i++){ 
  var cell = belgium.cells[i].innerHTML; belgiumData.push(parseInt(cellDAta)); } return
belgiumData; function findCountryData(country){
  var belgium = theTable.rows[2];
function findBelgiumData (){
   var countryData = []; for (let i = 2; i <
country.cells.length; i++){
   var cell = belgium.cells[i].innerHTML;
countryData.push(parseInt(cellDAta)); } 

return countryData; }



function getDataFromTable (theTable){
  
var countriesData = {


for (var i = 2; i < theTable.rows.length; i++){
  var countryRow = theTable.rows[i];
  var data = findCountryData(countryRow);
  var countryName = getNameOfCountry(countryRow);

  countriesData[countryName] = data;
}

return countiesData;
}

function getNameOfCountry (row){
  return row.cells[i].cells[i].innerHTML;
}


/* 
This function takes in a table and retursn all the data in the format below

RETURNS:
{
  belgium: [1012.0, ...]
  bulgaria: []
}
*/





// </belgium.cells.length>var myLineChart = new Chart
// data: findBelgiumData();
