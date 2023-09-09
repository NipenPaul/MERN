let worker;
function startWorker(){
    if(typeof Worker !== 'undefined'){
        // worker avaiable
        if(typeof worker == 'undefined'){
            worker = new Worker("worker.js");
        }
         // listening for worker events/messages
         worker.onmessage = function(event){
            document.getElementById("demo").innerHTML = event.data;
         }
    }else{
        alert("Your browser does not support web worker!");
    }
}

function stopWorker(){
    if(typeof Worker !== "undefined"){
        alert("Stop!");
        worker.terminate();
        worker = undefined;
    }else{
        alert("Your browser does not support web worker!");
    }
}