function generateAdd(){
    var ope1 = document.getElementById("ope1").value; 
    var ope2 = document.getElementById("ope2").value; 
    value1 = parseFloat(ope1, 10); 
    value2 = parseFloat(ope2, 10);

    var result = value1 + value2;

    var text = ope1 + " + " + ope2 + " = " + result;

    console.log(text); 
    document.getElementById("result").value = text;
}

function generateSub(){
    var ope1 = document.getElementById("ope1").value; 
    var ope2 = document.getElementById("ope2").value; 
    value1 = parseFloat(ope1, 10); 
    value2 = parseFloat(ope2, 10);

    var result = value1 - value2;

    var text = ope1 + " - " + ope2 + " = " + result;

    console.log(text);
    document.getElementById("result").value = text;
}

function generateMul(){
    var ope1 = document.getElementById("ope1").value; 
    var ope2 = document.getElementById("ope2").value; 
    value1 = parseFloat(ope1, 10); 
    value2 = parseFloat(ope2, 10);

    var result = value1 * value2;

    var text = ope1 + " x " + ope2 + " = " + result;

    console.log(text);
    document.getElementById("result").value = text;
}

function generateDiv(){
    var ope1 = document.getElementById("ope1").value; 
    var ope2 = document.getElementById("ope2").value; 
    value1 = parseFloat(ope1, 10); 
    value2 = parseFloat(ope2, 10);

    var result = value1 / value2;

    var text = ope1 + " / " + ope2 + " = " + result;
    console.log(text);
    document.getElementById("result").value = text;
}

function generateMod(){
    var ope1 = document.getElementById("ope1").value; 
    var ope2 = document.getElementById("ope2").value; 
    value1 = parseFloat(ope1, 10); 
    value2 = parseFloat(ope2, 10);

    var result = value1 % value2;

    var text = ope1 + " % " + ope2 + " = " + result;

    console.log(text);
    document.getElementById("result").value = text;
}