let x=10,y=3;
//arthimetic operators
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)
//assignment operators
let z=5;
console.log(z+=3)
console.log(z-=3)
console.log(z*=3)
console.log(z/=3)
console.log(z%=3)
//comparision operators
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>=b)
console.log(a<=b)
console.log(a>b)
console.log(a<b)
//logical operators
let age=19;
console.log(age>=18 && age<=20 )
console.log(age>=18 || age<=16 )
console.log(!(age<=18))
//string operators
let fname="j";
let lname="k";
let fullname=fname+lname;
console.log(fullname)
//templet literal
let correctname=`Hello ${fname} ${lname},welcome`;
console.log(correctname)
//ternary operators
if(age>=18)
{
    console.log("eligible to vote")
}
else{
    console.log("not eligible to vote")
}
let res=(age>=18) ? "eligible to vote":"not eligible to vote"
console.log(res)
//increment and decrement operators
let count=5;
console.log(count)
console.log(count++)
console.log(++count)
//typeof operator
console.log(typeof count)
console.log(typeof "jk")
console.log(typeof 1)

