const rows = [["Test1", "dummycity1", "some other info"], ["name2", "city2", "more info"]];
let csvContent = "data:text/csv;charset=utf-8,";
rows.forEach(function(rowArray){
   let row = rowArray.join(",");
   csvContent += row + "\r\n";
}); 

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);