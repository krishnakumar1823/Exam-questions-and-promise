    //--------------------------------------THIS method-------------------------------------------------------
// {
//     console.log("-----------------this method--------------------")
//     var obj={
//         name:"krish",
//         a:3,
//         b:4,
//         add:function(){
//             return this.a + this.b
//         }
//     }
//     let c=obj.add()
//     console.log(c)
// }


{
//EX:1==start 
    var obj={
        name:"es6",
        a:7,
        b:-4
    }

    //method-1 without passing values
    var obj2={
        add:function(){
            return this.a + this.b
        }
    }

    var d=obj2.add.call(obj)
    console.log(d)

    //method-2 passing value as  argument and parameters
    var obj2={
        add:function(c){
            return this.a + this.b + c
        }
    }
//EX:1 == end

//EX:2 == start
    //CALL method
    var d=obj2.add.call(obj,8)
    console.log(d,"call")

    //APPLY method == we need to give the new value inside array
    var e=obj2.add.apply(obj,[5])
    console.log(e,"apply")

    //BIND method == it returns the whole function
    var f=obj2.add.bind(obj)
    console.log(f,"bind")
//EX:2 == end
}

