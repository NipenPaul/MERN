/*
* Title: Routes
* Description: Application Routes
* Author: Nipen Paul
* Date: 2023-09-11
* 
*/
// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');
const {userHandler} = require('./handlers/routeHandlers/userHandlers');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;