

// //-----------------------------async await amstrong number-----------------------------------------------------
// {   
//     console.log("async await amstrong number")
//     let a=153
//     let b=a
//     let c=b
//     function amstrong(){
//         var count=0
//         while(a!=0){
//             var res=a%10
//             a=(a-res)/10

//             count++
//         }
//         return new Promise((re,rj) =>{
//             re(count)
//         })
//     }
//     function chk(val){
//         var c=val
//         var sum=0
//         while(b!=0){
//             var res=b%10
//             b=(b-res)/10

//             sum+=(res**c)
//         }
//         return new Promise((re,rj) =>{
//             re(sum)
//         })
//     }
//     function final(val){
        
//         return new Promise((re,rj) =>{
//             if(val == c){
//                 re()
//             }
//             else{
//                 rj()
//             }
//         })
//     }

//     async function access(){
//         try{
//             let x=await amstrong()
//             let y=await chk(x)
//             let z=await final(y)
//             console.log(`given number ${c} is amstrong number`)
//         }
//         catch{
//             console.log(`given number ${c} is not an amstrong number`)
//         }
//     }
//     access()
// }

// { //-------------------------promise chaining amstrong number--------------------------------------
//     console.log("promise chaining amstrong number")
//     let a=153
//     let b=a
//     let c=b
//     function amstrong(){
//         var count=0
//         while(a!=0){
//             var res=a%10
//             a=(a-res)/10

//             count++
//         }
//         return new Promise((re,rj) => {
//             re(count)
//             rj("error")
//         })
//     }

//     function chk(val){
//         var count1=val
//         var sum=0
//         while(b!=0){
//             var res=b%10
//             b=(b-res)/10

//             sum+=(res**count1)
//         }
//         return new Promise((re,rj) => {
//             re(sum)
//             rj("error")
//         })
//     }

//     function final(val){
//         return new Promise((re,rj) =>{
//             if(val == c){
//                 re(`given number ${c} is amstrong number`)
//             }
//             else{
//                 rj(`given number ${c} is not an amstrong number`)
//             }
//         })
//     }

//     amstrong().then((x) => {
//         //console.log(x)

//         return chk(x).then((y) =>{
//             //console.log(y)

//             return final(y).then((z) =>{
//                 console.log(z)
//             })
//         })
//     })

//     .catch(console.log)
// }   




// //-----------------------task exercise-2 using chaining method--------------------------------------------
// {
//     console.log("task exercise-2 using chaining method")
//     function even(value){
//         return new Promise((re,rj) => {
//             if(value%2 ==0){
//                 re(value)
//             }
//             else{
//                 rj("not a even number")
//             }
//         })
//     }

//     function four(value){
//         return new Promise((re,rj) => {
//             if(value%4 ==0){
//                 re(value)
//             }
//             else{
//                 rj("not divisible by four")
//             }
//         })
//     }

//     function digit(value){
//         var count=0
//         while(value != 0){
//             var res=value % 10
//             value=(value-res)/10

//             count++
//         }
//         return new Promise((re,rj) => {
//             re(count)
//         })
//     }

//     even(1000).then((x) => {
//         console.log(x)

//         return four(x).then((y)=>{
//             console.log(y)

//             return digit(y).then((z)=>{
//                 console.log(z)
//             })
//         })
//     })

//     .catch((fail)=>{
//         console.log(fail)
//     })
// }




//-----------------------task exercise-2 using ASYNC method--------------------------------------------
// {
//     console.log("task exercise-2 using async method")

//     function even(get){
//         var value=parseInt(get)
//         return new Promise((re,rj) => {
//             if(value%2==0){
//                 re(value)
//             }
//             else{
//                 rj("not a even number")
//             }
//         })
//     }

//     function four(value){
//         console.log(value)
//         return new Promise((re,rj) => {
//             if(value%4 ==0){
//                 re(value)
//             }
//             else{
//                 rj("not divisible by four")
//             }
//         })
//     }

//     function digit(vall){
//         var count=0
//         while(vall != 0){
//             var res=vall % 10
//             vall=(vall-res)/10

//             count++
//         }
//         return new Promise((re,rj) => {
//             re(`Count of the given number is ${count}`)
//         })
//     }

//     async function access(){
//         try{
//             let x=await even(10000)
//             let y=await four(x)
//             let z=await digit(y)
//             console.log(z)
//         }
//         catch(f){
//             console.log(f)
//         }
//     }

//     access()    //fun call
// }




