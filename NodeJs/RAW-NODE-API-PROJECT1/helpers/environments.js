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
    envName: 'staging',
    secretKey: '#EndNP',
    maxChecks: 5,
    twilio: {
        fromPhone: '+15005550006',
        accountSid: 'ACb32d411ad7fe886aac54c665d25e5c5d',
        authToken: '9455e3eb3109edc12e3d8c92768f7a67'
    }
};

environment.production = {
    port: 5000,
    envName: 'production',
    secretKey: '#EndNP38',
    maxChecks: 5,
    twilio: {
        fromPhone: '+15005550006',
        accountSid: 'ACb32d411ad7fe886aac54c665d25e5c5d',
        authToken: '9455e3eb3109edc12e3d8c92768f7a67'
    }
};

// determine which environment was passed

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV: 'stagin';

// export corresponding environement object

const environmentToExport = typeof(environment[currentEnvironment]) === 'object' ? environment[currentEnvironment]: environment.staging;

// export moudle
module.exports = environmentToExport;

