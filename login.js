class User {
  constructor(userid, firstname, lastname, username, password) {
    this.userid = userid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
  }

  getUserid() {
    return this.userid;
  }

  setUserid(userid) {
    this.userid = userid;
  }

  getFirstname() {
    return this.firstname;
  }

  setFirstname(firstname) {
    this.firstname = firstname;
  }

  getLastname() {
    return this.lastname;
  }

  setLastname(lastname) {
    this.lastname = lastname;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
}

const user2 = new User();

document.getElementById("login").addEventListener("submit", printloginUser);
function printloginUser(e) {
  e.preventDefault();
  user2.setUsername(document.getElementById("loginuname").value);
  user2.setPassword(document.getElementById("loginpaw").value);
  console.log(user2);
}
