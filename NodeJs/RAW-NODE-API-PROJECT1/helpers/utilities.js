/*
* Title: Utilities
* Description:Impport utility functions
* Author: Nipen Paul
* Date: 2023-09-14
* 
*/

// dependencies

// module scaffoldin
const crypto = require('crypto');
const utilites = {};
const environement = require('./environments');

// parse JSON string to object
utilites.parseJSON = (jsonString) =>{
    let output;
    try{
        output = JSON.parse(jsonString);
    }catch{
        output = {};
    }
    return output;
}

// hash string
utilites.hash = (str) =>{
  if(typeof(str) === 'string' && str.length > 0){
    const hash = crypto
        .createHmac('sha256', environement.secretKey)
        .update(str)
        .digest('hex');
        return hash;
  }else{
    return false;
  }
}

// create random string
utilites.createRandomString = (strLength) =>{
  let length = strLength;
  length = typeof(strLength) === 'number' && strLength > 0 ? strLength: false;
  if(length){
    let possibleCharcters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let output = '';
    for(let i = 1; i <= length; i += 1){
      let randomCharacter = possibleCharcters.charAt(Math.floor(Math.random()*possibleCharcters.length));
      output += randomCharacter;
    }
    return output;
  }else{
    return false;
  }
}

// export module
module.exports = utilites;