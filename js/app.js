


document.getElementById("btn-calc").addEventListener("click", calcWPKG);



function calcWPKG() {
    var inputKG = document.getElementById("inputkg").value;
    var inputWatts = document.getElementById("inputwatts").value;
    var WPKG = inputWatts / inputKG;
    document.getElementById("outputCalc").value = WPKG;
}

