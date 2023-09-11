/*
* Title: Not Found Handler
* Description: 404 Not found Handler
* Author: Nipen Paul
* Date: 2023-09-11
* 
*/
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) =>{
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};
module.exports = handler;