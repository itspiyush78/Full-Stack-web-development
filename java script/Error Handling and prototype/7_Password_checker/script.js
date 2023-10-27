class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  getPassword() {
    return this.password.replace(/./g, "*");
  }

  setPassword(newPassword) {
    let containsNumber = false;
    let containsUpperCase = false;

    for (let i = 0; i < newPassword.length; i++) {
      const char = newPassword.charAt(i);
      if (!isNaN(char)) {
        containsNumber = true;
      }
      if (char == char.toUpperCase()) {
        containsUpperCase = true;
      }
    }

    if (newPassword.length >= 8 && containsNumber && containsUpperCase) {
      this.password = newPassword;
    } else {
      console.log(
        "Error: Password must be eight character long and contains at least one number and one upper case letter "
      );
    }
  }
}

const user1 = new User("piyush", "piyush123");
console.log(user1.getPassword());
user1.setPassword("mypassword")
user1.setPassword("MyPassword123");
console.log(user1.getPassword());

user1.setPassword("MyPassword")
