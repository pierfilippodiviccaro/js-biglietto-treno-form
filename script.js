//dichiarazione delle variabili
const format = document.querySelector("form")
const name =  document.getElementById("nome")
const kilometers = document.getElementById("kilometri")
const bottoneSend = document.getElementById("button-submit")
const bottoneRedo = document.getElementById("button-redo")
const anniDivita = document.getElementById("quanto")
let sconto = 0 
// console.log(format,age, kilometers, bottoneSend,bottoneRedo);
// aggiunta dell'evento di submit
format.addEventListener("submit", function(event){

    event.preventDefault();

    const log = parseInt(kilometers.value.trim());
    
    let soldi= 0.21 * log 
    if (anniDivita <= 17){
    sconto = (soldi * 20 / 100)
    } 
    else if (anniDivita >= 65) {
        sconto = (soldi * 40 / 100)
    }
    soldi = soldi - sconto

    console.log(soldi);
});


