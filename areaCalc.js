function squareArea() {
    let sLength = document.getElementById("sLength");
    let l = sLength.value;

    let sArea = l * l;
    document.getElementById("sArea").innerHTML = "Area: " + sArea.toFixed(2) + " meter square";
}

function rectangleArea() {
    let rLength = document.getElementById("rLength");
    let rWidth = document.getElementById("rWidth");
    let w = rWidth.value;
    let l = rLength.value;

    let rArea = l * w;
    document.getElementById("rArea").innerHTML = "Area: " + rArea.toFixed(2) + " meter square";
}

function triangleArea() {
    let tHeight = document.getElementById("tHeight");
    let tBase = document.getElementById("tBase");
    let b = tBase.value;
    let h = tHeight.value;

    let tArea = 0.5 * b * h;
    document.getElementById("tArea").innerHTML = "Area: " + tArea.toFixed(2) + " meter square";
}

function circleArea() {
    let cRadius = document.getElementById("cRadius");
    let r = cRadius.value;

    let cArea = Math.PI * Math.pow(r,2);
    document.getElementById("cArea").innerHTML = "Area: " + cArea.toFixed(2) + " meter square";
}