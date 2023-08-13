let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

// Define the toggleDropdown function in the global scope
function toggleDropdown() {
  const dropdownMenu = document.getElementById("menu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const menuButton = document.querySelector(".btn2");

  // Add a click event listener to the button
  menuButton.addEventListener("click", toggleDropdown);

  // Optionally, add a click event listener to hide the dropdown when clicking outside
  document.addEventListener("click", function (event) {
    const dropdownMenu = document.getElementById("menu");
    const targetElement = event.target;
    if (targetElement !== menuButton && !dropdownMenu.contains(targetElement)) {
      dropdownMenu.style.display = "none";
    }
  });
});





function showModal() {
  // Show the overlay and modal
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.modal').style.display = 'block';
}

function hideModal() {
  // Hide the overlay and modal
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.modal').style.display = 'none';
}
const Source=document.getElementById('Source');
const Destination=document.getElementById('Destination');
const Search=document.getElementById("search");
var flcontainer=document.getElementById("fl-container");
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
          window.location.href="git.html";
        } 
        )
        const div=document.createElement("div");
        div.append(flcode,flclass,flarrival,fldept,flfare,btn);
        flcontainer.appendChild(div);
      })  
    })
  })


