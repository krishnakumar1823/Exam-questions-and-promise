
{
    //left angled triangle
    let a=5
    var sum=""
    console.log("left angled triangle")
    for(i=1;i<=a;i++){
        for(j=1;j<=i;j++){
            sum+=`${j}`
        }
        console.log(sum)
        sum=""
    }
}

{
    //left angled triangle
    let a=5
    var sum=""
    console.log("left angled triangle reverse")
    for(i=a;a>0;a--){
        for(j=1;j<=a;j++){
            sum+=`${j} `
        }
        console.log(sum)
        sum=""
    }
}

{
    //right angled triangle
    let a=5
    var sum=""
    var sumOne=""
    var res=0
    console.log("right angled triangle")
    for(i=a;i>0;i--){
        res++
        for(j=1;j<i;j++){
            sum+=" "
        }
        for(k=1;k<=res;k++){
            sumOne+=k
        }
        console.log(sum+sumOne)
    sumOne=""
    sum=""
    }
}


