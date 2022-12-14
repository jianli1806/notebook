import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
    constructor( username, password, firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
      }

  getUsername() {
    return this.username;
  }
}

// login functionality
let loginForm = document.getElementById("login");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("loginuname").value;
  let password = document.getElementById("loginpaw").value;
  let user = new User(userName, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
// register functionality
let regForm = document.getElementById("register");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("reguname").value;
  let password = document.getElementById("regpaw").value;
  let user = new User(userName, password);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "login.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}