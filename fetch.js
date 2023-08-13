const Source=document.getElementById('Source');
const Destination=document.getElementById('Destination');
const Search=document.getElementById("search");
var flcontainer=document.querySelector("#fl-container");
Search.addEventListener("click",()=>{
    fetch("http://localhost:3000/data",{
        method:'GET',
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      const propertyValues=Object.values(data);
      console.log(propertyValues);
      const searcheddata=propertyValues.filter((element)=>element.Source.toLowerCase()===Source.value.toLowerCase() && 
      element.Destination.toLowerCase()===Destination.value.toLowerCase()
      );
      searcheddata.map((el)=>{
        const flcode=document.createElement("h4");
        flcode.innerText=`Flight code:${el.Flight_code}`;
        console.log(flcode);
        const flclass=document.createElement("h4");
        flclass.innerText=`Class:${el.Class}`;
        const flarrival=document.createElement("h4");
        flarrival.innerText=`Arrival:${el.Arrival}`;
        const fldept=document.createElement("h4");
        fldept.innerText=`Departure time: ${el.Departure}`;
        const flfare=document.createElement("h4");
        flfare.innerText=`Fare:${el.Fare}`;
        const btn=document.createElement("button");
        btn.innerText=`Book Now`;
        btn.addEventListener("click",function(){
          window.location.href="demo.html";
        } 
        )
        const div=document.createElement("div");
        div.append(flcode,flclass,flarrival,fldept,flfare,btn);
        flcontainer.appendChild(div);
      })  
    })
  })
