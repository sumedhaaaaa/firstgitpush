
/*window.addEventListener("DOMContentLoaded", () => {
    var flcontainer = document.getElementById("fl-container");
    const urlParams = new URLSearchParams(window.location.search);
    const Source = urlParams.get("source");
    const Destination = urlParams.get("destination");
   
    
    fetch("http://localhost:3000/data", {
        method: 'GET',
    })
    .then((res) => res.json())
    /*.then((data) => {
        console.log(data);
        const searchedData = data.filter((element) => element.Source.toLowerCase() === sourceValue.toLowerCase() && element.Destination.toLowerCase() === destinationValue.toLowerCase());
        searchedData.map((el) => {
            console.log(el);
            const btn = document.createElement("button");
            const flcode = document.createElement("h4");
            const flclass = document.createElement("h4");
            const flarrival = document.createElement("h4");
            const fldept = document.createElement("h4");
            const flfare = document.createElement("h4");

            flcode.innerText = `Flight code: ${el.Flight_code}`;
            flclass.innerText = `Class: ${el.Class}`;
            flarrival.innerText = `Arrival: ${el.Arrival}`;
            fldept.innerText = `Departure time: ${el.Departure}`;
            flfare.innerText = `Fare: ${el.Fare}`;
            
            btn.innerText = "BookNow";
            
            /*btn.addEventListener("click",BookNow)
            btn.onclick = function BookNow() {
                console.log("hello");
                window.location.href = "demo.html";
            }
            
            const div=document.createElement("div");
            div.append(flcode, flclass, flarrival, fldept, flfare, btn);
            flcontainer.appendChild(div);
            .then((data)=>{
                console.log(data);
                const propertyValues=Object.values(data);
                console.log(propertyValues);
                const searcheddata=propertyValues.filter((element)=>element.Source.toLowerCase()===Source.toLowerCase() && 
                element.Destination.toLowerCase()===Destination.toLowerCase()
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
                  const anchor = document.createElement('a');
  
  anchor.href = 'http://google.com';
  anchor.innerText = 'Go to Google';
                  const div=document.createElement("div");
                  div.append(flcode,flclass,flarrival,fldept,flfare,btn,anchor);
                  flcontainer.appendChild(div);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
    
});*/

window.addEventListener("DOMContentLoaded", () => {
    var flcontainer = document.getElementById("fl-container");
    const urlParams = new URLSearchParams(window.location.search);
    const Source = urlParams.get("source");
    const Destination = urlParams.get("destination");
  
    fetch("http://localhost:3000/data", {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const searchedData = data.filter((element) => element.Source.toLowerCase() === Source.toLowerCase() && element.Destination.toLowerCase() === Destination.toLowerCase());
  
        searchedData.forEach((el) => {
          const flcode = document.createElement("h4");
          flcode.innerText = `Flight code: ${el.Flight_code}`;
  
          const flclass = document.createElement("h4");
          flclass.innerText = `Class: ${el.Class}`;
  
          const flarrival = document.createElement("h4");
          flarrival.innerText = `Arrival: ${el.Arrival}`;
  
          const fldept = document.createElement("h4");
          fldept.innerText = `Departure time: ${el.Departure}`;
  
          const flfare = document.createElement("h4");
          flfare.innerText = `Fare: ${el.Fare}`;
  
          const btn = document.createElement("button");
          btn.innerText = `Book Now`;
          btn.addEventListener("click", function () {
            window.location.href = "git.html";
          });
  
          const anchor = document.createElement('a');
          anchor.href = 'http://google.com';
          anchor.innerText = 'Go to Google';
  
          const div = document.createElement("div");
          div.append(flcode, flclass, flarrival, fldept, flfare, btn, anchor);
          flcontainer.appendChild(div);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  

function toggleDropdown() {
    const dropdownMenu = document.getElementById("menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

function showModal() {
    
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
}

function hideModal() {
    
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".btn2");
    const userButton = document.querySelector(".userbtn");

    
    menuButton.addEventListener("click", toggleDropdown);

    
    document.addEventListener("click", function (event) {
        const targetElement = event.target;
        const dropdownMenu = document.getElementById("menu");
        if (targetElement !== menuButton && !dropdownMenu.contains(targetElement)) {
            dropdownMenu.style.display = "none";
        }
    });

   
    userButton.addEventListener("click", function (event) {
        event.stopPropagation(); 
    });

    
    document.addEventListener("click", function (event) {
        const targetElement = event.target;
        const modal = document.querySelector(".modal");
        if (!modal.contains(targetElement)) {
            hideModal();
        }
    });
});
const Mobilenumber=document.getElementById('Mobilenumber');
const password=document.getElementById('password');
function login(){
    fetch("http://localhost:3000/Users",{
        method:'GET',
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        const user=data.find((element)=>element.Mobilenumber===Mobilenumber.value && element.password===password.value);
        console.log("User:",user);
        if(user){
            const token=Date.now();
            localStorage.setItem('token',token);
            alert("Logged in Successfully");
        }
        else{
            alert("You are not a member please sign up");
        }
    })
    }
