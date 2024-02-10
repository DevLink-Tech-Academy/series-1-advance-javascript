// we need to get is simple intrest and remove the bonus we are giving him as a customer ,
// the rule to calculate his bonus is the amount of year he has spent with us multply by 10

function simpleintrest(P,T,R,Y)
{    
    var SI = (P*T*R)/100;
    var bonusDue = Y*10;
    var amountDue = SI - bonusDue;
    return amountDue;
}


function TotalDue(callback,P,T,R,Y)
{
   return callback(P,T,R,Y);
}



var P = 1000000;
var T = 2;
var R = 5;
var Y = 5;
var totalAmountToPay = TotalDue(simpleintrest,P,T,R,Y);
console.log(totalAmountToPay);

