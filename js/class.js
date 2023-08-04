// //EX:1 single class
// {
//     class Details{
//         constructor(name,batch){
//             this.name=name,
//             this.batch=batch
//         }
//     }
//     let trainee=new Details("krishna","FED12")
//     console.log(trainee)
// }


// //EX:1 single class
// {
//     class Details{
//         constructor(name,batch){
//             this.name=name,
//             this.batch=batch
//         }

//         //functions inside class
//         getDetails(){
//             return `${this.name},${this.batch}`
//         }
//     }
//     let trainee=new Details("krishna","FED12")
//     console.log(trainee)

//     console.log(trainee.getDetails())
// }



//EX:2 multiple class
{
    class Details_one{
        constructor(value){
            this.a=value
            //object key name = a
            //object value = value
        }
        send(){
            return "Hello am " + this.a
        }
    }

    class Details_two extends Details_one{
        constructor(value,b){
            super(value)
            this.role=b
        }
        show(){
            return this.send() + " and am a " + this.role
        }
    }

    let save=new Details_two("krishna","Front end developer")

    console.log(save)

    
    console.log(save.show())
}