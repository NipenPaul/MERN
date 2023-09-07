const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listeener for bellRing event
// must be before declare 
emitter.on('bellRing', ({period, text}) =>{
    console.log(`We need to run because ${period} ${text}`);
});

// // raise an event
// emitter.emit('bellRing');

// wait for two sec 
setTimeout(()=>{
    emitter.emit('bellRing', {
        period: 'first',
        text: 'Period ended',
    });
}, 2000);