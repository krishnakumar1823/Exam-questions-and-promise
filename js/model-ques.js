/*
1. Differnce between let and const keyword?

    Answer: i.let can be updated but not re-declared.
            ii.const cannot be updated or re-declared

2. Which methods are used to avoid Shallow copy?

    Answer: i.json parse/json stringify
            ii.object assign
            iii.spread operator

3. Difference between map and forloop.

    for each: i.The forEach() method does not returns a  new array based on the given array.
              ii.he forEach() method returns “undefined“.
              iii.The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 
              iv.It is not executed for empty elements.
    
    map:    i.The map() method returns an entirely new array.
            ii.The map() method returns the newly created array according to the provided callback function.
            iii.With the map() method, we can chain other methods like, reduce(),sort() etc.
            iv.	It does not change the original array.


4. Write the states of promises.

    Answer: i.fulfilled
            ii.rejected
            iii.pending

5. Difference between promise chaining and promise all.

    Answer: => Promise.all() resolves only when all given promises resolve, and will reject immediately if any of the promises reject 

            =>Promise Chaining is a simple concept by which we may initialize another promise inside our .then() method and accordingly we may execute our results. The function inside then captures the value returned by the previous promise 

6. What is the final value of obj.
    const obj = {foo:1}
    obj.bar = 2;
    console.log(obj)

    output: {foo:1,bar:2}

7.const speed = "quick";
    console.log(`The ${speed} brown fox jumps over the lazy dog`)

    output: The quick brown fox jumps over the lazy dog

8.  var obj1 = {
    id: 1,
        company: "GFG"
    };
    var obj2 = obj1;
    obj2.id = 2;
    console.log(obj1.id);
    console.log(obj2.id);

    output: 2 2

9.  Input : [3,4,5,6]
    Output : [3,5,7,9]
    How to achieve this output?

    Answer:
        var ip=[3,4,5,6]
        let solve=ip.map((value,index) => {
            var c=value+index
            return c
        })
        console.log(solve)


10. Which method is used to check all values and return boolean value?

    Answer: some(),every() return boolean value


11.const price = [35,66,234,56,88,90,22]
How to find minimum value?
    
    Answer: const price = [35,66,234,56,88,90,22]
            let x=Math.min(...price)
            console.log(x)

12. ES6 Published in ----

        Answer: 2015
    
13. var employee =[{
        name : "Karuppasamy",
        age : 24,
        Salary : 25000,
        level : "junior"
        },
        {
        name : "Samy",
        age : 21,
        Salary : 20000,
        level : "junior"
        },{
        name : "Kaviya",
        age : 22,
        Salary : 18000,
        level : "junior"
        },{
        name : "Naresh",
        age : 45,
        Salary : 100000,
        level : "senior"
        },{
        name : "Prem",
        age : 24,
        Salary : 50000,
        level : "senior"
    }];

    Output : ["Naresh","Prem"];
    Write a code ....

    Code:   var output=[]
            employee.filter((value) => {
            if(value.level==="senior"){
                output.push(value.name)
            }
        })
        console.log(output)


14. const rem = 0
    rem++;
    rem++;
    console.log(rem);

    Answer: Uncaught TypeError: Assignment to constant variable.


15. function a(){
    console.log("Hi")

    }

    function b(){
    console.log("Fabevy")
    }

    a(b)
    Write the output...

    Output: Hi


16.  var num = 0;
    console.log(num++);
    console.log(num++);
    console.log(++num);
    console.log(num);

    output: 0 1 3 3

17. Solve the armstrong logic in async/await

    var a=153
    var b=a
    var c=a
    function amstrong(){
        var count=0 

        while(a!=0){
            var res=a%10
            a=(a-res)/10

            count++
        }

        return new Promise((re,rj) => {
            re(count)
        })
    }

    function chk(val){
        var countt=val
        var sum=0 

        while(b!=0){
            var res=b%10
            b=(b-res)/10

            sum+=(res**countt)
        }

        return new Promise((re,rj) => {
            re(sum)
        })
    }

    function final(val){
        var condChk=val
        return new Promise((re,rj) => {
            if(condChk == c){
                re("Amstrong number")
            }
            else{
                rj("Not an Amstrong number")
            }
        })
    }

    async function access(){
        try{
            let x=await amstrong()
            let y=await chk(x)
            let z=await final(y)
            console.log(z)
        }
        catch(f){
            console.log(f)
        }
    }

    access()

18.  let obj1 = {
    "name" : "Monisha"
    }
    let obj = Object.assign({},obj1);
    obj1.position = "QAE"
    console.log(obj,obj1);

    output: obj                               obj1
            {"name":"monisha"}                {"name":"monisha","position":"QAE"}



19. let person = {name: "Linda"}
    const members = [person];
    person = null;
    console.log(person)

    outupt:null


20. Which methods are used to solve async function into sync?

    Answer:callback,callback hell,promise,promise Chaining,promise all,async await
*/
