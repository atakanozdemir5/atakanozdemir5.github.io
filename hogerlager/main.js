// Array van dobbelsteen symbolen (HTML entiteitscodes voor de dobbelsteen gezichten)
const diceArray = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

// DOM-elementen (gebruikt om interactie te hebben met de HTML-pagina)
const playerCreditsText = document.querySelector('.player-credits');
const computerCreditsText = document.querySelector('.computer-credits');
const diceOneP = document.querySelector('.player-dice-one');
const diceTwoP = document.querySelector('.player-dice-two');
const diceOneC = document.querySelector('.computer-dice-one');
const diceTwoC = document.querySelector('.computer-dice-two');
const throwDice = document.querySelector('.dice-button');
const higherDice = document.querySelector('.higher-button');
const lowerDice = document.querySelector('.lower-button');
const startDice = document.querySelector('.go-button');
const messageBox = document.querySelector('.message-box');

// Variabelen om de gegenereerde dobbelsteenwaarden op te slaan
let numberGenP1; 
let numberGenP2;
let numberGenC1;
let numberGenC2;
let diceTotalP; // Totaal van de dobbelsteenworp van de speler
let diceTotalC; // Totaal van de dobbelsteenworp van de computer

// Variabelen om de credits van de speler en computer op te slaan
let playerCredits = 0;
let computerCredits = 0;

// Beginstatus van de knoppen
lowerDice.disabled = true;
higherDice.disabled = true;
startDice.disabled = false;
throwDice.disabled = true;

// Event listener voor het gooien van de dobbelstenen van de computer
throwDice.addEventListener('click', function() {
    // Willekeurig de dobbelsteenwaarden voor de computer genereren (2 dobbelsteenworpen)
    numberGenC1 = Math.floor(Math.random() * 5); // Genereert een nummer tussen 0 en 4 (voor de dobbelsteen symbolen)
    numberGenC2 = Math.floor(Math.random() * 5);
    diceTotalC = numberGenC1 + numberGenC2; // Totaal van de dobbelsteenworp

    // Toon de dobbelstenen van de computer (gebruikmakend van de diceArray voor de symbolen)
    diceOneC.innerHTML = `${diceArray[numberGenC1]}`;
    diceTwoC.innerHTML = `${diceArray[numberGenC2]}`;

    // Zet de "throwDice" knop uit, en zet de "higherDice" en "lowerDice" knoppen aan
    throwDice.disabled = true;
    higherDice.disabled = false;
    startDice.disabled = true;
    lowerDice.disabled = false;

    // Werk de weergave van de credits bij
    document.querySelector('.player-credits').innerHTML = `${playerCredits}`;
    document.querySelector('.computer-credits').innerHTML = `${computerCredits}`;
});

// Event listener voor de "higher" knop (de speler probeert een hoger totaal te gooien dan de computer)
higherDice.addEventListener('click', function() {
    // Willekeurig de dobbelsteenwaarden voor de speler genereren (2 dobbelsteenworpen)
    numberGenP1 = Math.floor(Math.random() * 5);
    numberGenP2 = Math.floor(Math.random() * 5);
    diceTotalP = numberGenP1 + numberGenP2; // Totaal van de dobbelsteenworp van de speler

    // Vergelijk het totaal van de dobbelstenen van de speler met die van de computer
    if (diceTotalP > diceTotalC) {
        playerCredits++; // Speler wint, verhoog zijn credits
    } else if (diceTotalP === diceTotalC) {
        // Het is gelijk, beide krijgen 1 credit
        computerCredits++;
        playerCredits++;
    } else {
        computerCredits++; // Computer wint, verhoog de credits van de computer
    }

    // Toon de dobbelstenen van de speler
    diceOneP.innerHTML = `${diceArray[numberGenP1]}`;
    diceTwoP.innerHTML = `${diceArray[numberGenP2]}`;

    // Zet de "higherDice" en "lowerDice" knoppen uit, zet de "throwDice" knop aan
    throwDice.disabled = false;
    higherDice.disabled = true;
    startDice.disabled = true;
    lowerDice.disabled = true;

    // Werk de weergave van de credits bij
    document.querySelector('.player-credits').innerHTML = `${playerCredits}`;
    document.querySelector('.computer-credits').innerHTML = `${computerCredits}`;

    // Controleer of iemand heeft gewonnen (credits bereikt 10)
    if (computerCredits === 10) {
        messageBox.textContent = 'de computer heeft een win gepakt'; // De computer wint
        throwDice.disabled = true;
        startDice.disabled = false;
    } else if (playerCredits === 10) {
        messageBox.textContent = 'je hebt gewonnen'; // De speler wint
        throwDice.disabled = true;
        startDice.disabled = false;
    }
});

// Event listener voor de "lower" knop (de speler probeert een lager totaal te gooien dan de computer)
lowerDice.addEventListener('click', function() {
    // Willekeurig de dobbelsteenwaarden voor de speler genereren (2 dobbelsteenworpen)
    numberGenP1 = Math.floor(Math.random() * 5);
    numberGenP2 = Math.floor(Math.random() * 5);
    diceTotalP = numberGenP1 + numberGenP2; // Totaal van de dobbelsteenworp van de speler

    // Vergelijk het totaal van de dobbelstenen van de speler met die van de computer
    if (diceTotalP > diceTotalC) {
        playerCredits++; // Speler wint, verhoog zijn credits
    } else if (diceTotalP === diceTotalC) {
        // Het is gelijk, beide krijgen 1 credit
        computerCredits++;
        playerCredits++;
    } else {
        computerCredits++; // Computer wint, verhoog de credits van de computer
    }

    // Toon de dobbelstenen van de speler
    diceOneP.innerHTML = `${diceArray[numberGenP1]}`;
    diceTwoP.innerHTML = `${diceArray[numberGenP2]}`;

    // Zet de "higherDice" en "lowerDice" knoppen uit, zet de "throwDice" knop aan
    throwDice.disabled = false;
    higherDice.disabled = true;
    startDice.disabled = true;
    lowerDice.disabled = true;

    // Werk de weergave van de credits bij
    document.querySelector('.player-credits').innerHTML = `${playerCredits}`;
    document.querySelector('.computer-credits').innerHTML = `${computerCredits}`;

    // Controleer of iemand heeft gewonnen (credits bereikt 10)
    if (computerCredits === 10) {
        messageBox.textContent = 'de computer heeft je verslagen'; // De computer wint
        throwDice.disabled = true;
        startDice.disabled = false;
    } else if (playerCredits === 10) {
        messageBox.textContent = 'je hebt de overwinning gepakt'; // De speler wint
        throwDice.disabled = true;
        startDice.disabled = false;
    }
});

// Event listener voor de "start" knop (reset het spel en start een nieuwe ronde)
startDice.addEventListener('click', function() {
    // Zet de "throwDice" knop aan en de andere knoppen uit
    throwDice.disabled = false;
    higherDice.disabled = true;
    startDice.disabled = true;
    lowerDice.disabled = true;

    // Reset het bericht en de credits van de speler en de computer
    messageBox.textContent = 'de spel is nu bezig';
    computerCredits = 0;
    playerCredits = 0;

    // Werk de weergave van de credits bij
    document.querySelector('.player-credits').innerHTML = `${playerCredits}`;
    document.querySelector('.computer-credits').innerHTML = `${computerCredits}`;
});
