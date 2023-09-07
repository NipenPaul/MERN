const payment = true;
const mark = 85;

function enroll(){
    console.log("Course Enroll..");
    promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(payment){
                resolve();
            }else{
                reject("Payment failed..");
            }
        }, 2000);
    });
    return promise;
}

function progress(){
    console.log("Progress running...");
    promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(mark >= 80){
                resolve();
            }else{
                reject("You are failed..");
            }
        },3000);
    });
    return promise;
}

function getCertificate(){
    console.log("Preparing certificate..");
    promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("You get certificate..");
        },1000);
    });
    return promise;
}
async function course(){
  try{
      await enroll();
      await progress();
     const value = await getCertificate();
     console.log(value);
  }  catch(error){
      console.log(error);
  }
}
course();
// enroll()
//     .then(progress)
//     .then(getCertificate)
//      .then(function(value){
//         console.log(value);
//     })
//     .catch(function(value){
//       console.log(value); 
//     });
