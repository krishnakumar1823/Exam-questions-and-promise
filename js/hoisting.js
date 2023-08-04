
//Hoisting
{   
    {
    //using var it shows the error as undefined
    console.log(c)
    var c

    //using let  it show the error as Cannot access 'd' before initialization
    console.log(d)
    let d
    }

    //Hoisting using Function
    hoiStingFun()
    function hoiStingFun(){
        console.log("hoisting normal function")
    }

    //Hoisting using arrow Function
    var hoiStingArrowFun= () =>{
        console.log("hoisting Arrow function")
    }

    hoiStingArrowFun()

    //Hoisting using arrow Function passing value
    var hoiStingArrowFunPassing= (a=0,b=0) =>{
        console.log("hoisting Arrow function",a+b)
    }

    hoiStingArrowFunPassing(32)
}


