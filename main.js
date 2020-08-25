console.log('Hello world!');
//document.querySelector
const viss = document.getElementById("js-viss-poga"); //izguztam no html 
const viela = document.getElementById("js-vielas-poga");

const aprikojumus = document.getElementById("js-aprikojumu-poga");
viela.addEventListener("click", clickVielas); // pats savaa clickVielas rakstiisu darbiibu
aprikojumus.addEventListener("click", clickAprikojums);
// savaks no tabulas tas klases kas js-aprikojums

function clickVielas() {
    //location.reload();
    alert("atradu"); // izmet pazinojumu
    const aprikojumsRindas = document.getElementsByClassName("js-aprikojums");
    vielas.classList.add('selected');
    for (let index = 0; index < aprikojumsRindas.length; index++) {
        const element = aprikojumsRindas[index];
        // console.log(element); //  
        //element.classList.add("slepts"); // aizvieto
        element.classList.toggle("slepts"); //aizvieto vienreiz spiezot uz sleept otreiz spiezot atrod un novaac
    }
}

function clickAprikojums() {
    //location.reload();
    alert("atradu 2"); // izmet pazinojumu
    const aprikojumsRindas = document.getElementsByClassName("js-viela");
    vielas.classList.add('selected');
    for (let index = 0; index < aprikojumsRindas.length; index++) {
        const element = aprikojumsRindas[index];
        console.log(element); //  
        //element.classList.add("slepts"); // aizvieto
        element.classList.toggle("slepts"); //aizvieto vienreiz spiezot uz sleept otreiz spiezot atrod un novaac
    }
}


/*------------------Sergejs Kižlo------dotais------------------------
const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
vielasPoga.addEventListener('click', function() {
    vielasPoga.classList.add('selected');
    for (let i = 0; i < aprikojumsRindas.length; i++) {
        if (aprikojumsRindas[i].classList.indexOf('slepts') > -1) {
            aprikojumsRindas[i].classList.remove('slepts');
        } else {
            aprikojumsRindas[i].classList.add('slepts');
        }
    }
});
--------------------------------------------------------------*/
/*--------------------------------------------------------------
onst vielasPoga = document.getElementById('vielas-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
vielasPoga.addEventListener('click', function() {
    vielasPoga.classList.add('selected');
    for (let i = 0; i < aprikojumsRindas.length; i++) {
        if (aprikojumsRindas[i].classList.contains('slepts')) {
            aprikojumsRindas[i].classList.remove('slepts');
        } else {
            aprikojumsRindas[i].classList.add('slepts');
        }
    }
});
----------------------------------------------------------------*/