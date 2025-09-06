let person={
    name:"jk",
    age:19
}
console.log(person.name)
console.log(person["age"])
//destructuring assignment
const {name,age}=person;
console.log(name)
console.log(age)
let  fruit=["aaa","bbb"]
console.log(fruit[0])
let number=[1,2,3,4,5]
let squ=number.map((num)=>num*num);//Transform each element
console.log(squ)
let even=number.filter((num)=>num%2==0);//filter
console.log(even)
let odd=number.filter((num)=>num%2!=0);
console.log(odd)
let sum=number.reduce((present,num)=>present+num,0)//reduces 
//0 is used add values to 0 it is initial value
console.log(sum)
let arr=[
    {marks:95,name:"akon"},
    {marks:90,name:"bkon"},
    {marks:89,name:"ckon"}
]
for( let per of arr)
{
    for(let key in per)
    {
        console.log(`${key}:${per[key]}`)
    }
}

