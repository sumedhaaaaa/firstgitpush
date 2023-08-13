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
