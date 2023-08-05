// //EXAMPLE=1
// //--------------------------set interval and clear interval---------------------------------------
// {   console.log("set interval and clear interval")
//     let x=setInterval(access,1000)

//     var count=0

//     function access(){
//         count++
//         console.log(count)
//         if(count == 5){
//             clearInterval(x)
//         }
//     }
// }

// //EXAMPLE=2
// //--------------------------set timeout---------------------------------------
// {   console.log("set timeout")
//     let x=setTimeout(access,1000)

//     function access(){
//         console.log("hey")
//     }
// }


//------------------ARRAY METHODS--------------------
{   var a=[1,2,3,4,5]

    // {//map
    //     let x=a.map((val,ind) =>{
    //         console.log(val,ind)
    //     })
    // }

    // {//filter
    //     let x=a.filter((val,ind) =>{
    //        console.log(val,ind)
    //     })    
    // }

    {//forEach
        let x=a.forEach((val,ind) =>{
           console.log(val,ind)
        })    
    }
}