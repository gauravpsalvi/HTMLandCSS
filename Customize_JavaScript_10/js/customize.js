// Name: Rebecca Moses Dmello
// Student ID: 300322984
// Reference: Lecture and Notes Prepared by Professor Bambang

function applyStyles(form){

    let featureCheckboxes = [];
    let message ="";
    let selectors ="";
    let selCol="";
    let selFont="";
    let bgCol="";

    message = document.getElementById("message");

    var imgRadio = form.querySelector('input[name="imgSet"]:checked').value;

    if(imgRadio == "banana_split") {
        document.getElementById("figid").innerText = "Yummy Banana Split";
        document.getElementById("imgDisplay").setAttribute('src', 'images/banana_split.jpg');
    }
    else if(imgRadio == "deep-cove") {
        document.getElementById("figid").innerText = "Breathtaking Deep Cove";
        document.getElementById("imgDisplay").setAttribute('src', 'images/deep-cove.jpg');
    }
    else if(imgRadio == "redPanda") {
        document.getElementById("figid").innerText = "Cute Red Panda";
        document.getElementById("imgDisplay").setAttribute('src', 'images/redPanda.jpg');
    }

    featureCheckboxes = form.elements["features"];
    for(let i=0; i<featureCheckboxes.length; i++){
        if(featureCheckboxes[i].checked){
            selectors += featureCheckboxes[i].value + " ";            
        }
    }
    document.getElementById("imgDisplay").setAttribute('class', selectors);
    selCol = document.getElementById("fntCol").value;
    selFont = document.getElementById("fntStyle").value;
    bgCol = document.getElementById("bgCol").value;

    document.body.style.background = bgCol;
    document.getElementById("figid").style.color = selCol;
    if(selFont == "bold"){
        document.getElementById("figid").style.fontWeight = selFont;    
    }else{
        document.getElementById("figid").style.fontStyle = selFont;
    }
}