


document.getElementById("btn-calc").addEventListener("click", calcWPKG);
const inputKG = document.getElementById("inputkg");
const inputWatts = document.getElementById("inputwatts");


function calcWPKG() {
    
    const WPKG = inputWatts.value / inputKG.value;
    document.getElementById("outputCalc").value = WPKG;
}

