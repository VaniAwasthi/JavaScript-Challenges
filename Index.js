function generatingCurrentDateTime() {
var today = new Date();
var date = today.getDate();
var month = today.getMonth()+1; 
var year = today.getFullYear();
document.getElementById("currentDateTime").innerHTML = today;
 }