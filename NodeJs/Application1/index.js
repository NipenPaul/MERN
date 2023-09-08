/*
 Title: Basic Node app example
 Description: Simple node application that print random qutoes per second interval.
 Author: Nipen Paul
 Datae: Sep 8, 2023
*/

// Dependencies
const mathLibary = require('./lib/math');
const quotesLibary = require('./lib/quotes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints a random quote
app.printAQote = function printAQote(){
    // Get all quotes
    const allQuotes = quotesLibary.allQuotes();
    
    // Get the length of the quotes
    const numberQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibary.getRandomNumber(1, numberQuotes);

    // Get the quote at that position in the array (minus one)
    const selectdQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectdQuote);
};

// Function that loops indefinitely, calling the printAquoate fucntion as it goes
app.indefiniteLoop = function indefiniteLoop(){
    // Create the interval, using the config variable defined above
    setInterval(app.printAQote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();