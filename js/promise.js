// {   //promise basics
//     let p=new Promise((succ,fail) =>{
//         succ("i am successed")

//         fail("i am failure")
//     })

//     p.then(console.log)
//     p.catch(console.log)
// }


// {   //callback function in promise
//     let p=new Promise((succ,fail) =>{
//         succ()
//         fail()
//     })

//     p.then(runsuccess)
//     p.catch(runFailure)

//     function runsuccess(){
//         console.log("i am successed")       
//     }
    
//     function runFailure(){
//         console.log("i am failure")       
//     }
// }

// {   //promise settimeout
//     function a(){
//         return new Promise((a,b) =>{
//             setTimeout(() =>{
//                 a("timeout")
//                 b("sad")
//             },5000)
//         })
//     }

//     a().then(console.log)
//     a().catch(console.log)
// }

// {   //EXAMPLE = 4
//     function a(){
//         return new Promise((d,e) =>{
//             setTimeout(() =>{
//                 d("1") 
//             },2000)
//         })
//     }
    
//     function b(){
//         return new Promise((f,g) =>{
//             setTimeout(() =>{
//                 g("2")
//             },3000)
//         })
//     }

//     function c(){
//         return new Promise((h,i) =>{
//             setTimeout(() =>{
//                 h("3")
//             },1000)
//         })
//     }

//     a().then((x) =>{
//         console.log(x)
//         return b().then((y) => {
//             console.log(y)
//             return c().then(console.log)
//         })
//     })
//     .catch(console.log)
// }


// {   //EXAMPLE = 5
//     function a(){
//         return new Promise((d,e) =>{
//             setTimeout(() =>{
//                 d("1") 
//             },2000)
//         })
//     }
    
//     function b(val){
//         return new Promise((f,g) =>{
//             setTimeout(() =>{
//                 f("2",val)
//             },3000)
//         })
//     }

//     function c(valu){
//         return new Promise((h,i) =>{
//             setTimeout(() =>{
//                 h("3",valu)
//             },1000)
//         })
//     }

//     a().then((x) =>{

//         console.log(x)
    
//         return  b(x).then((y,w) => {

//             console.log(y,w)

//         return c(y).then(console.log)
//         })
//     })

//     .catch(console.log)

// }


// {  // EXAMPLE = 6
//         function a(){
//             return new Promise((d,e) =>{ 
//             d("1") 
//             })
//         }
    
//         function b(){
//             return new Promise((f,g) =>{
//             g("2")
//             })
//         }

//         function c(){
//             return new Promise((h,i) =>{
//                     h("3")
//             })
//         }

//         Promise.all([a(),b(),c()])
//         .then(console.log)
//         .catch(console.log)
// }

        // //--------------------------async and await method-----------------------------

// {  // EXAMPLE = 7 
//     function a(){
//         return new Promise((d,e) =>{ 
//     d("1") 
//         })
//     }

//     function b(){
//         return new Promise((f,g) =>{
//         g("2")
//         })
//     }

//     function c(){
//         return new Promise((h,i) =>{
//             h("3")
//         })
//     }

//     async function i(){
//         try{
//             let d=await c()
//             console.log(d)
            
//             let e=await b()
//             console.log(e)
            
//             let f=await a()
//             console.log(f)
//         }
//         catch{
//             console.log("error")
//         }
//     }

//     i()//function calling
// }

// {   //-----------------------------------------promise odd or even function-----------------------------------------
//     console.log("------promise odd or even function-----")
//     function odd(val){
//         return new Promise((s,r) => {
//             if(val%2 == 0){
//                 s(val)
//             }
//             else{
//                 r(val)
//             }
//         })
//     }
//     odd(10).then((x) => {
//         console.log(`${x} is a even number`)
//     })
//     .catch((y) =>{
//         console.log(`${y} is a odd number`)
//     })
// }

// {   //promise amstrong number function
//     console.log("---------------promise amstrong number function--------------------") 
//     function amstrong(val){
//         var a=parseInt(val)
//         var b=a
//         var c=a
//         var sum=0

//         var count=0
//         while(a!=0){
//             var res=a%10
//             a=(a-res)/10

//             count++
//         }
//         while(b!=0){
//             var res=b%10
//             b=(b-res)/10

//             sum+=(res**count)
//         }

//         return new Promise((re,rj) => {
//             if(c==sum){
//                 re(`the given number ${c} is an amstrong number`)
//             }
//             else{
//                 rj(`the given number ${c} is not an amstrong number`)
//             }
//         })
//     }
//     amstrong(153).then(console.log)

//     .catch(console.log)
// }


// { //promise palindrome function
//     function palindrome(val){
//         let a=parseInt(val)
//         var b=a
//         sum=0

//         while(a!=0){
//             var res=a%10
//             a=(a-res)/10

//             sum=(sum*10)+res
//         }

//         return new Promise((re,rj) => {
//             if(sum==b){
//                 re(b)
//             }
//             else{
//                 rj(b)
//             }
//         })
        
//     }
//     palindrome(121).then((x) =>{
//         console.log(`given number ${x} is palindrome`)
//     })

//     .catch((y) =>{
//         console.log(`given number ${y} is not a palindrome`)
//     })
// }


