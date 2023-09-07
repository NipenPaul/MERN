const payment = true;
const mark = 80;

function enroll(callback){
    console.log("Course created..");
   setTimeout(function(){
       if(payment){
        callback();
       }else{
           console.log("Payment has not been completed..");
       }
    }, 2000);
}
function progress(callback){
    console.log("Progress continue..");
    setTimeout(function(){
       if(mark >= 80){
           callback();
       }else{
           console.log("Sorry!, you are fail, try again");
       }
    }, 3000);
}
function getCertificate(){
    console.log("Preparing your certificate..");
    setTimeout(function(){
        console.log("Congrats!, you got certificate..");
    }, 1000);
}
enroll(function(){
    progress(getCertificate);
});
