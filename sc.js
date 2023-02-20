let xml= new XMLHttpRequest()
let url ="https://restcountries.com/v2/all"

xml.onload= function (){
    let data1 = JSON.parse(xml.response)
       console.log(data1)
    let asiaregion = data1.filter((ele)=>(ele.region == "Asia")).map((ele)=>ele.name)
    console.log(asiaregion)
   let populate = data1.filter((ele)=>ele.population < 200000).map((ele)=>ele.name)
    console.log(populate)
    let NCF = data1.forEach((ele)=>console.log(`NAME : ${ele.name} CAPITAL : ${ele.capital} FLAG : ${ele.flag}`))
    let totalPopu = data1.reduce((acc,cv)=>acc+cv.population,0)
    console.log(`POPULATION : ${totalPopu}`)
data1.filter(ele=>{
    
    for (let key in ele.currencies){
        if(ele.currencies[key].code==="USD"){
            console.log(ele.name)
        }
    }   
})   
}
xml.open("GET",url);
xml.send()