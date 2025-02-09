let dataStorage = [];

document.getElementById('sendButton').addEventListener("click", function () {
  let name = document.querySelector('#name').value.trim();
  let email = document.querySelector('#email').value.trim();
  let message = document.querySelector('#message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all data!');
    return;
  }


let userData = {
  name: name,
  email: email,
  message: message
};

dataStorage.push(userData);

document.querySelector('#name').value = '';
document.querySelector('#email').value = '';
  document.querySelector('#message').value = '';
  
  console.log(dataStorage);
})


