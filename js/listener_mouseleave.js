
//add event listenter MOUSELEAVE


var uname=document.getElementById("Uname")
uname.addEventListener("mouseleave",function(){
    
    var change=document.getElementById("change");
    change.setAttribute("style",`color:${uname.value};font-size: 25px;`)
})




//add event listenter INPUT

var clr=document.getElementById("clr")
var add=document.getElementById("addBg")
// //method-1
// clr.oninput = () =>{
// 	console.log(clr.value)
//     add.setAttribute("style",`background-color:${clr.value};height: 100vh;flex-direction: column;margin:0;color:white`)
// }

 //method-2
clr.addEventListener("input",()=>{
	console.log(clr.value)
    add.setAttribute("style",`background-color:${clr.value};height: 100vh;flex-direction: column;margin:0;color:white`)
})