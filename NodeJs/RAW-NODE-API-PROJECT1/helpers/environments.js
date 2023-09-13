/*
* Title: Environment
* Description: Handle all evvironment related things
* Author: Nipen Paul
* Date: 2023-09-13
* 
*/

// dependencies


//module scaffolding
const environment = {};

environment.staging = {
    port: 3000,
    envName: 'staging'
};

environment.production = {
    port: 5000,
    envName: 'production'
};

// determine which environment was passed

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV: 'stagin';

// export corresponding environement object

const environmentToExport = typeof(environment[currentEnvironment]) === 'object' ? environment[currentEnvironment]: environment.staging;

// export moudle
module.exports = environmentToExport;

