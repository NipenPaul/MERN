/*
* Title: Sample Handler
* Description: sample Handler
* Author: Nipen Paul
* Date: 2023-09-11
* 
*/
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) =>{
    console.log(requestProperties);
    callback(200, {
    message: 'This is a sample url',
   });
};
module.exports = handler;