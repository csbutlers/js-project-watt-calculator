


document.getElementById("btn-calc").addEventListener("click", calcWPKG);
const inputKG = document.getElementById("inputkg");
const inputWatts = document.getElementById("inputwatts");
var zone1 = document.getElementsByClassName("watts")[0];
var zone2 = document.getElementsByClassName("watts")[1];


function calcWPKG() {
    
    const WPKG = inputWatts.value / inputKG.value;
    document.getElementById("outputCalc").value = WPKG;
    var z1low = Math.round((55 / 100) * inputWatts.value);
    var z2low = Math.round((56 / 100) * inputWatts.value);
    var z2high = Math.round((75 / 100) * inputWatts.value);
    zone1.innerHTML = ' > ' + z1low;
    zone2.innerHTML = z2low + ' - ' + z2high;

}



