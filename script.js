
let fromInp=document.querySelector(".fromInp")
let toInp=document.querySelector(".toInp")
let moneyTextFrom=document.querySelector(".money-text-from")
let moneyTextTo=document.querySelector(".money-text-to")
let reverse=document.getElementById("reverse")
let fromValue="RUB";
let toValue="USD";
let reversefrom="";
let reverseto="";
let n;
let y;
let listelements=document.querySelectorAll(".listelement")
let listelementfrom=document.querySelectorAll(".listelementfrom")
let listelementfromarray=Array.from(listelementfrom)
let listelementtoarray=Array.from(listelements)

listelements.forEach(x=>x.addEventListener("click",()=>{
 
    listelements.forEach(x=>x.classList.remove("activeto"))
    x.classList.add("activeto")
    toValue=x.innerText;
   
        Convert(); 
}))
listelementfrom.forEach(x=>x.addEventListener("click",()=>{
 
    listelementfrom.forEach(x=>x.classList.remove("activefrom"))
    x.classList.add("activefrom")
    fromValue=x.innerText;
      Convert()  
}))
 
fromInp.addEventListener("keyup",()=>{
   Convert();
})

toInp.addEventListener("keyup",()=>{
    Converto();
})

function Convert(){
  if(fromValue==toValue){
    fromInp.value!=null?toInp.value=fromInp.value:fromInp.value=toInp.value
    moneyTextFrom.innerText=`1 ${toValue}= 1 ${fromValue}`
    moneyTextTo.innerText=`1 ${toValue}= 1 ${fromValue}`
    console.log("istek getmedi")
       
  }
  
  else{
    fetch(`https://api.exchangerate.host/latest?base=${fromValue}&symbols=${toValue}`).then(res=>res.json()).then(data=>{
       console.log("istek getdi")
       
        moneyTextFrom.innerText=` 1 ${fromValue} =${data.rates[toValue]} ${toValue}`
        toInp.value= `${(fromInp.value*data.rates[toValue]).toFixed(2)}`
        moneyTextTo.innerText=`1 ${toValue}=${1/data.rates[toValue]} ${fromValue}`
  
  })
  .catch((error)=>{
    console.log(error)
  })
  }

    
}
reverse.addEventListener("click",()=>{
  
  reversefrom=document.querySelector(".activefrom") 
  reverseto=document.querySelector(".activeto")
  listelementfromarray.forEach(x=>x.classList.remove("activefrom"))
  n=listelementfromarray.find(x=>x.innerText==reverseto.innerText)
 listelementtoarray.forEach(x=>x.classList.remove("activeto"))
 y=listelementtoarray.find(x=>x.innerText==reversefrom.innerText)
 n.classList.add("activefrom")
   y.classList.add("activeto")
   fromValue=n.innerText;
    toValue=y.innerText
   Convert();  
})

function Converto(){
  
  if(fromValue==toValue){
    fromInp.value!=null?toInp.value=fromInp.value:fromInp.value=toInp.value
    moneyTextFrom.innerText=`1 ${toValue}= 1 ${fromValue}`
    moneyTextTo.innerText=`1 ${toValue}= 1 ${fromValue}`
    console.log("istek getmedi")
       
  }
  
  else{
    fetch(`https://api.exchangerate.host/latest?base=${toValue}&symbols=${fromValue}`).then(res=>res.json()).then(data=>{
       

        moneyTextTo.innerText=` 1 ${toValue} =${data.rates[fromValue]} ${fromValue}`
        fromInp.value= `${(toInp.value*data.rates[fromValue]).toFixed(2)}`
        moneyTextFrom.innerText=`1 ${fromValue}=${1/data.rates[fromValue]} ${toValue}`
  
  })
  .catch((error)=>{
    console.log(error)
  })
  }
}
 