//fetch :outside url ne request chastundhi
const sampleData=async()=>{
    try{
    let response= await fetch("https://www.google.com");
    console.log(response)
}
catch(err){
    console.log("error in accessing of google:"+err)
}
}
sampleData()