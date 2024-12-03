function calculate() {
    let s1 = parseFloat(document.getElementById("s1").value);
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    if ((s1 > 0) && (s2 > 0) && (s3 > 0)) {
        let s = (s1+s2+s3)/2;
        let a = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
        document.getElementById("answer").innerHTML = "Area of a triangle with first side " + s1 + " units, second side " + s2 + " units, and third side " + s3 + " units and semi-perimeter " + s + " units is " + a.toFixed(2) + " unit².";
    }
    else {
        document.getElementById("answer").innerHTML = "Please enter a number greater than zero.";
    }
}