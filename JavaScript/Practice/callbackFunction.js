function display(val){
    console.log("Display 1:" + val);
}
function addTwoNumber(num1, num2, callbackFunction){
    let res = num1 + num2;
    callbackFunction(res);
    return res;
}
addTwoNumber(7, 8, display);
addTwoNumber(8, 6, function(num){
    console.log("Display 2: "+ num);
});
console.log("done");
