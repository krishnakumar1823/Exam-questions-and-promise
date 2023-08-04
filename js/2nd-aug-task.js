{   //sum=1
    console.log("---------------------sum=1 star pattern-----------------------------")
    let a=5
    let sum=""
    for(i=1;i<=a;i++){
        for(j=1;j<=i;j++){
            sum+="*"
        }
        console.log(sum)
        sum=""
    }
}

{   //sum 2
    console.log("---------------------sum=2 adding number in  eamil-----------------------------")
    var a="example546@gmail.com"
    var sum=0
    for(var i of a){
        if(i%2==0 || i%2==1){
            i=parseInt(i)
            sum+=i
        }
    }
    console.log(sum)
}

{   //prime numbers list
    console.log("---------------------sum=3 prime num-----------------------------")
    var sum=[]
    var count=0
    var a=10
    for(i=1;i<=a;i++){
        for(j=1;j<=i;j++){
            if(i%j ==0){
                count++
            }
        }
    if(count==2){
        sum.push(i)
    }
    count=0
    }
    console.log(sum.join())
}

{    //palindrome numbers list
    console.log("---------------------sum=4 palindrome-----------------------------")
    var a=[153,678,121,656,981,432]
    var arr=[]
    var op=[]
    for(i=0;i<a.length;i++){
        var b=a[i]
        var c=parseInt(b)
        var d=c
            while(c!=0){
                var res=c%10
                c=(c-res)/10
                arr.push(res)
            }
            var arrJoin=arr.join("")

                if(arrJoin == b){
                    op.push(arrJoin)
                }
        arr=[]
    }
    console.log(`palindrome numbers are = ${op}`)
}

{   // ip=123 op=three,two,one
    console.log("---------------------sum=5 ip=123 ,  op=three,two,one-----------------------------")
    var a=123
    var b=a
    while(a>0){
        var res =a%10
        a=(a-res)/10

        switch(res){
            case 1:
                console.log("one")
                break;
            case 2:
                console.log("two")
                break;
            case 3:
                console.log("three")
        }
    }
}