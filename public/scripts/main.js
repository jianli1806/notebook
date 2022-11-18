document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
  fetch("http://localhost:3000/loginUsers/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}