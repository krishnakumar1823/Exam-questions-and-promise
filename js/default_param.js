
//Default param
{
    hey(32)  //function call

    function hey(a=0,b=0){
        let c=a+b;
        console.log(c)
    }
}


//default param using arrow function
{
    var a=(a=0,b=0) =>{
        let c=a+b
        console.log(c)
    }

    a(10)   //function call
}