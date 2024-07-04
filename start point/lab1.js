// function simpleintrest(customer_name,P,T,R)
// {
//     console.log("#######################");
//     console.log("Hellow world, welcome to simple interest application");
//     console.log("#######################");  

         
//     var SI = (P*T*R)/100;
    
//     console.log("#######################");
//     console.log("The simple interest for "+customer_name +" is :" + SI);
//     console.log("#######################");
// }

// ///goes to db 
var customer_name = "Faruq Ahmed";
var P = 1000000;
var T = 2;
var R = 5;
// simpleintrest(customer_name,P,T,R);



// var anonymoussimpleintrest  = function (customer_name,P,T,R)
// {
//     console.log("#######################");
//     console.log("Hellow world, welcome to simple interest application by anonymoussimpleintrest");
//     console.log("#######################");

    
//     var SI = (P*T*R)/100;
    
//     console.log("#######################");
//     console.log("The simple interest for "+customer_name +" is :" + SI);
//     console.log("#######################");
// }

// anonymoussimpleintrest(customer_name,P,T,R);


// var arrowsimpleintrest  =  (customer_name,P,T,R) =>
// {
//     console.log("#######################");
//     console.log("Hellow world, welcome to simple interest application by arrowsimpleintrest");
//     console.log("#######################");

    
//     var SI = (P*T*R)/100;
    
//     console.log("#######################");
//     console.log("The simple interest for "+customer_name +" is :" + SI);
//     console.log("#######################");
// }

// arrowsimpleintrest(customer_name,P,T,R);



// (function(customer_name,P,T,R) {
//     console.log("#######################");
//     console.log("Hellow world, welcome to simple interest application by Imediat invokeable");
//     console.log("#######################");

    
//     var SI = (P*T*R)/100;
    
//     console.log("#######################");
//     console.log("The simple interest for "+customer_name +" is :" + SI);
//     console.log("#######################");
//   })(customer_name,P,T,R); // Output: Hello, John!
  

  function ObjectFunsimpleintrest(P,T,R)
  {
     this.SI = (P*T*R)/100;
   
  }
  const sm = new ObjectFunsimpleintrest(P,T,R);
      
    console.log("#######################");
    console.log("The simple interest for "+customer_name +" is :" + sm.SI);
    console.log("#######################");
  
