/*
 Title: Quotes Library
 Description: Utility libary for getting a list of Quotes
 Author: Nipen Paul
 Datae: Sep 8, 2023
*/

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes(){
    // Read the text file containg the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    //Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // return the array
    return arrayOfQuotes;
};

// Export the library
module.exports = quotes;