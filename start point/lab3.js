function defaultparameters(P=1222,T=1,R=5)
{
    console.log("#######################");
    console.log("Hellow world, welcome to simple interest application");
    console.log("#######################");

    
    var SI = (P*T*R)/100;
    
    console.log("#######################");
    console.log("The simple interest for   is :" + SI);
    console.log("#######################");

}

defaultparameters(100000);