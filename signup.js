const signup = document.getElementById('signup');
signup.addEventListener('submit', (e) => {
  e.preventDefault();

  const Mobilenumber = document.getElementById('Mobilenumber');
  const password = document.getElementById('password');
  const formdata = {
    Mobilenumber: Mobilenumber.value,
    password: password.value,
  };

  fetch('http://localhost:3000/Users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formdata),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Sign up successful', data);
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.log('Error', error);
    });
});