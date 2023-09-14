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

// export module
module.exports = utilites;