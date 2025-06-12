function rndBoot() {
 
    //horizontal only with boat lenght locked to 4
 
    let x = Math.floor(Math.random() * 5); //boat row for boat1 is 0-4
    let y = Math.floor((Math.random() * 5) + 5); //boat row for boat2 is 5-9
 
    let x1 = Math.floor(Math.random() * 4); //area for boat1 on horizontal x
    let y1 = Math.floor(Math.random() * 4); //area for boat2 on horizontal y
 
    //Adds boat and adds to it untill 4 long
    waardeArrayEen = (x * 9) + x1; //Randomizes the location of the boat
    arrayZeeSlag[waardeArrayEen] = 1;
    console.log(waardeArrayEen);
    waardeArrayEen++;
    arrayZeeSlag[waardeArrayEen] = 1;
    waardeArrayEen++;
    arrayZeeSlag[waardeArrayEen] = 1;
    waardeArrayEen++;
    arrayZeeSlag[waardeArrayEen] = 1;
 
    waardeArrayTwee = (y * 9) + y1; //Randomizes the location of the boat
    arrayZeeSlag[waardeArrayTwee] = 1;
    console.log(waardeArrayTwee);
    waardeArrayTwee++;
    arrayZeeSlag[waardeArrayTwee] = 1;
    waardeArrayTwee++;
    arrayZeeSlag[waardeArrayTwee] = 1;
    waardeArrayTwee++;
    arrayZeeSlag[waardeArrayTwee] = 1;
 
}
 
 
let arrayZeeSlag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 0 -x
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 1 -x
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 2 -x
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 3 -x
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 4 -x
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 5 -y
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 6 -y
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 7 -y
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 8 -y
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0  //row 9 -y
];
 
let arrayZeeSlagPush = [];
 
 
//function for the players actions
function clickFunction(a) {
    //alert(a);
    b = 1;
    if (arrayZeeSlag[a] == 1) {
        alert("You hit!");
        document.getElementById(a).innerHTML = "HIT"; //changes the cell
        document.getElementById(a).style.backgroundColor = "rgb(255, 0, 0)";
        arrayZeeSlagPush.push(1);
        console.log(arrayZeeSlagPush);
        winCheck();
        updateDisplay();
    }
    else {
        console.log(a);
        alert("You missed...");
        document.getElementById(a).innerHTML = "MISS"; //changes the cell
        document.getElementById(a).style.backgroundColor = "rgb(0,191,255";
        clickFunction2(a = Math.floor((Math.random() * 100 + 100)))
    }
 
 
    function winCheck() {
        let boten = 8; //boats of the computer that sunk
        console.log(arrayZeeSlagPush.length)
        if (arrayZeeSlagPush.length == boten) {
            alert("You win!");
            location.reload();
        }
    }
}
 
 
//second field
let arrayZeeSlag2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 0 -x
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 1 -x
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 2 -x
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 3 -x
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 4 -x
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 5 -y
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 6 -y
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 7 -y
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //row 8 -y
                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0  //row 9 -y
];
 
let arrayZeeSlagPush2 = [];
let maxPlayerBoats = [];
let playerboats = [];
 
let ship = true
 
//function for the computers actions
function clickFunction2(a) {
    //alert(a);
    b = 1;
    if (ship == true) {
        document.getElementById(a).innerHTML = "SHIP"; //changes the cell
        document.getElementById(a).style.backgroundColor = "rgb(0, 255, 0)";
        arrayZeeSlag2[a] = 1
        playerboats.push(1);
        playerBoatCheck();
    }
    else if (arrayZeeSlag2[a] == 1) {
        alert("Computer hit!");
        document.getElementById(a).innerHTML = "HIT"; //changes the cell
        document.getElementById(a).style.backgroundColor = "rgb(255, 0, 0)";
        arrayZeeSlagPush2.push(1);
        console.log(arrayZeeSlagPush2);
        loseCheck();
        clickFunction2(a = Math.floor((Math.random() * 100 + 100)))
        updateDisplay();
    }
    else {
        console.log(a);
        alert("Computer missed...");
        document.getElementById(a).innerHTML = "MISS"; //changes the cell
        document.getElementById(a).style.backgroundColor = "rgb(0,191,255";
    }
    function loseCheck() {
        let boten = 8; //boats of the player that sunk
        console.log(arrayZeeSlagPush2.length)
        if (arrayZeeSlagPush2.length == boten) {
            alert("You lose...");
            location.reload();
        }
    }
}
 
//checks if all player boats have been set
function playerBoatCheck() {
    let playerBoats = 8; //boats of the player
    maxPlayerBoats.push(1);
    console.log(maxPlayerBoats.length)
    if (maxPlayerBoats.length == playerBoats) {
        ship = false
        alert("All ships have been placed!");
        no1.disabled = false
        no2.disabled = true
        rndBoot();
    }
}
 
//alert for trying to shoot computer before placing ships
function placeShipsFirst() {
    alert("Place your ships first!");
}
 
//alert for shooting your own field
function dontShootSelf() {
    alert("Don't shoot yourself!");
}
 
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
 
//disables and enables buttons on page load
function buttonDisabled() {
    no1.disabled = true
    no2.disabled = false
}
buttonDisabled()
 
//true/false state button code
//function shipper() {
//    if (ship == true)
//        ship = false
//    else if (ship == false)
//        ship = true
//}
 
// counter systeem voor speler/computer
let counterDisplay1 = document.querySelector(".pointPlayer");
let counterDisplay2 = document.querySelector(".pointComputer");
//
function updateDisplay() {
        counterDisplay1.innerHTML = "score = " + arrayZeeSlagPush.length;
        console.log(arrayZeeSlagPush);
        counterDisplay2.innerHTML = "Computer score = " + arrayZeeSlagPush2.length;
        console.log(arrayZeeSlagPush2);
}
 
// prompt for the change name button
const owntext = document.querySelector(".owntext");
function startPrompt() {
    let promptname = prompt("geef je naam!");
    if (promptname != null) {
        localStorage.setItem("name", promptname);
        promptStorage()
    }
}
// startPrompt()
function promptStorage() {
    owntext.textContent = localStorage.getItem('name');
}
promptStorage();
 
// button to change the name
const promptButton = document.querySelector(".promptButton");
promptButton.addEventListener("click", startPrompt)