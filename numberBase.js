function binaryToDecimal() {
    let bDecimal = document.getElementById("bDecimal");
    let x = bDecimal.value;

    let initialList = []
    let finalList = []
    
    for (let c of x) {
        initialList.push(c);
    }
    
    let power;
    
    power = initialList.length - 1
    power = Number(power)
    
    for (let d of initialList) {
        d = Number(d);
        e = d * (2 ** power);
        finalList.push(e);
        power -= 1;
    }

   
        // Getting sum of numbers
        let sum = finalList.reduce(function(a, b){
            return a + b;
        }, 0);
        
    
    document.getElementById("bToDecimal").innerHTML = "Decimal: " + sum;
}

function decimalToBinary() {
    let dBinary = document.getElementById("dBinary");
    let number = dBinary.value;
    let binary = "";
    let temp = number;
 
    while(temp > 0){
        if(temp % 2 == 0){
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }
    document.getElementById("dToBinary").innerHTML = "Binary: " + binary;
}

    


function decimalToHex() {


}

function hexToDecimal() {

}