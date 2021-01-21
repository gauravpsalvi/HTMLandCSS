// Name: Rebecca Moses Dmello
// Student ID: 300322984

// Reference: Lecture and Notes prepared by Professor Bambang 

var prizes = [
    "Travel to the Moon","Donut", "Umbrella", "New House", "Car", "Scooter", "Sorry Out of Luck", "New Assignment from Bambang", 
    "Travel Package", "Teddy Bear", "New Shoe", "Money Jackpot", "Winter Vacation", "Cruise Vacation" 
]
	
var emojis = 
[
    "&#x1F680","&#x1F369","&#x1F302","&#x1F3E1","&#x1F697", "&#x1F6F4","&#x2620","&#x1F631",
    "&#x1F6EB", "&#x1F9F8", "&#x1F45F","&#x1F4B5","&#x1F3C2","&#x1F6A2"
];

var runMax; // store the maximum iteration the loop will run
var count; // store the count to compare with runMax

var div_count; // we need to loop within the div's
function playLottery(){
    runMax = Math.ceil(Math.random()*15);
    runMax += 15;  // just to make sure it is more than 15 iteration

    count = 0;
    div_count = 0;
    //call function switchColor after every 150 miliseconds
    setInterval(switchColor, 150);
}

function switchColor(){
    // calls a method which disables button and rename it to running
    disableButton();
    // if the count is greater than max iteration, cancel the interval
    if(count >= runMax){
        clearInterval();
        // calls a method which enables button and rename it to play again
        enableButton();
    }
    else{
        var all_divs = document.querySelectorAll("div[id*='div']");
        var lose = "lightblue";
        var win = "darkblue";

        // assign letter and color
        for(var loop=0; loop<all_divs.length; loop++){
            all_divs[loop].innerHTML = emojis[loop]+";";

            // change the color to green if i is equal to div_count
            if(loop == div_count){
                all_divs[loop].style.backgroundColor = win; 
                document.getElementById("message").innerHTML="YOU GOT....... a(n) "+ prizes[loop];
            }
            else{
                all_divs[loop].style.backgroundColor = lose;             
            }
        }
        
        // update the count
        count++;
        div_count++;
        if(div_count >= all_divs.length)
            div_count = 0;
    }
}

//This function displays button as "Running" when it is running
function disableButton(){
    document.getElementById("button").value="Running....";
    document.getElementById("button").disabled=true;
}

//This function asks "Play Again" at the end of the spin
function enableButton(){
    document.getElementById("button").value="Play Again ??";
    document.getElementById("button").disabled=false;
}


