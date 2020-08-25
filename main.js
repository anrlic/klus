console.log('Hello world!');
//document.querySelector
const viss = document.getElementById("js-viss-poga"); //izguztam no html 
const vielas = document.getElementById("js-vielas-poga");
const aprikojumu = document.getElementById("js-aprikojumu-poga");

vielas.addEventListener("click", clickVielas); // pats savaa clickVielas rakstiisu darbiibu


function clickVielas() {
    alert("atradu"); // izmet pazinojumu
}