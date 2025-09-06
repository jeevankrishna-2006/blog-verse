function jk()
{
    console.log("hello")
}
jk()
function jk1(i,j){
    return i+j;
}
let res=jk1(3,4);
console.log(res)
const pi=3.14;
console.log(pi)
const mul=function(x,y){
    return x*y;
}
//function mul(x,y){
// return x*y;
//}
console.log(mul(5,3))
//arrow function
const square =(x) =>x*x;
console.log(square(5))
const sub=(x,y)=>x-y;
console.log(sub(5,3))
const add=(x,y)=>{
    console.log(x,y)
    return x+y;
}
console.log(add(15,5))
console.log(20,15)