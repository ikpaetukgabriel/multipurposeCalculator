function squarePerimeter() {
    let sLength = document.getElementById("sLength");
    let l = sLength.value;

    let sPerimeter = 2 * l;
    document.getElementById("sPerimeter").innerHTML = "Perimeter: " + sPerimeter.toFixed(2) + " meter";
}

function rectanglePerimeter() {
    let rLength = document.getElementById("rLength");
    let rWidth = document.getElementById("rWidth");
    let w = rWidth.value;
    let l = rLength.value;

    let rPerimeter = (2 * l) + (2 * w);
    document.getElementById("rPerimeter").innerHTML = "Perimeter: " + rPerimeter.toFixed(2) + " meter";
}

function trianglePerimeter() {
    let sideA = document.getElementById("sideA");
    let sideB = document.getElementById("sideB");
    let sideC = document.getElementById("sideC");
    let a = Number(sideA.value);
    let b = Number(sideB.value);
    let c = Number(sideC.value);

    let tPerimeter =  a + b + c;
    document.getElementById("tPerimeter").innerHTML = "Perimeter: " + tPerimeter + " meter";
}

function circlePerimeter() {
    let cRadius = document.getElementById("cRadius");
    let r = cRadius.value;

    let cPerimeter = 2 * Math.PI * r;
    document.getElementById("cPerimeter").innerHTML = "Perimeter: " + cPerimeter.toFixed(2) + " meter";
}