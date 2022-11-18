class User {
  constructor(firstname, lastname, username, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
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

const user1 = new User();

// document.getElementById('register').addEventListener('submit',printregisterUser);
//     function printregisterUser(e) {
//     e.preventDefault();
//     user1.setFirstname(document.getElementById("regfname").value);
//     user1.setLastname(document.getElementById("reglname").value);
//     user1.setUsername(document.getElementById("reguname").value);
//     user1.setPassword(document.getElementById("regpaw").value);
//     console.log(user1);   
// }
