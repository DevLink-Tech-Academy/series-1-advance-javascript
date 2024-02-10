console.log("Start");

// Execute the function after 3 seconds
setTimeout(() => {
 
    var customer_name = "Faruq Ahmed";
    var P = 1000000;
    var T = 2;
    var R = 5;

    console.log("#######################");
    console.log("Hellow world, welcome to simple interest application");
    console.log("#######################");

    
    var SI = (P*T*R)/100;
    
    console.log("#######################");
    console.log("The simple interest for "+customer_name +" is :" + SI);
    console.log("#######################");

}, 3000);

console.log("End");
