


document.getElementById("btn-calc").addEventListener("click", calcWPKG);
const inputKG = document.getElementById("inputkg");
const inputWatts = document.getElementById("inputwatts");
var zone1 = document.getElementsByClassName("watts")[0];
var zone2 = document.getElementsByClassName("watts")[1];
var zone3 = document.getElementsByClassName("watts")[2];
var zone4 = document.getElementsByClassName("watts")[3];
var zone5 = document.getElementsByClassName("watts")[4];




function calError() {
    if (inputKG.value.length == 0 || inputWatts.value.length == 0) {
        
        document.getElementById("outputCalc").value = "Add weight and ftp";
    }     
} 




function calcWPKG() {
   
    const WPKG = inputWatts.value / inputKG.value;
    document.getElementById("outputCalc").value = WPKG;
    var z1low = Math.round((50 / 100) * inputWatts.value);
    var z2low = Math.round((56 / 100) * inputWatts.value);
    var z2high = Math.round((75 / 100) * inputWatts.value);
    var z3low = Math.round((76 / 100) * inputWatts.value);
    var z3high = Math.round((90 / 100) * inputWatts.value);
    var z4low = Math.round((91 / 100) * inputWatts.value);
    var z4high = Math.round((105 / 100) * inputWatts.value);
    var z5low = Math.round((106 / 100) * inputWatts.value);
    var z5high = Math.round((120 / 100) * inputWatts.value);
    zone1.innerHTML = ' > ' + z1low;
    zone2.innerHTML = z2low + ' - ' + z2high;
    zone3.innerHTML = z3low + ' - ' + z3high;
    zone4.innerHTML = z4low + ' - ' + z4high;
    zone5.innerHTML = z5low + ' - ' + z5high;
    calError();
}



