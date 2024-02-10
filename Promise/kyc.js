/***
NIN
-
Utility bill
Mean of Identification 
 */

// Simulating your mum going to the market with a Promise
function createAccount(biodata) {
    return new Promise((resolve, reject) => {
         var isAgeValid = false;
         var isNINValid = false;
         var isBVNValid = false;
         console.log(biodata);
        if(biodata.age>=18)
        {
            isAgeValid = true;
        }
        if(biodata.NIN.length>=10)
        {
            isNINValid = true;
        }

        if(biodata.BVN.length>=10)
        {
            isBVNValid = true;
        }

        if(isAgeValid && isBVNValid && isNINValid)
        {
            biodata.aacounNumber = Math.floor(Math.random() * 10);
            resolve(biodata);
        }else
        {
            reject("validation failed account could not be opened");
        }
      
  })

}
  
var  biodata = {
    "name": "John Doe",
    "email" : "agggg@gmail.com",
    "age" : 18,
    "NIN" : "1234567890",
    "BVN" : "1234567890"
}


createAccount(biodata)
    .then((biodata) => {
      console.log("Accounr opening successful");
      console.log(biodata);
      return biodata; // Pass the purchased items to the next then block
    })    
    .catch((errorMessage) => {
      console.log("Error while opening account:", errorMessage);
 
    })
    .finally(() => {
      console.log("Account proces completed.");
    });
  