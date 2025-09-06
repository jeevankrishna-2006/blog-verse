let marks=95;
if (marks>=90){
    console.log("A+ grade")
}
else if (marks>=80){
    console.log("A grade")
}
else if (marks>=70){
    console.log("B grade")
}
else if (marks>=60){
    console.log("C grade")
}
else{
    console.log("fail")
}
let ch=1;
switch(ch)
{
    case 1:
        console.log("sunday")  
        break;  
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")  
        break;  
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("Invalid")
        break;
}
while(ch<10)
{
    console.log(ch)
    ch+=1;
}
let colors=["red","blue","green"];
for(let i=0;i<colors.length;i++)
    console.log(colors[i])
for (let color of colors)
    console.log(color)
let person={
    age:19,
    collage:"gvl"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
do{
    console.log(ch)
    ch-=1;
}while(ch>0)