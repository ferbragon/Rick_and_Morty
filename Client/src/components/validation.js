const regexEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /.*\d+.*/;

export function validation(userData) {
    let errors = {};
  
    if (userData.email.length > 35) {
      errors.email = "The email must be under 35 characters";
    }

    if (!regexEmailValid.test(userData.email)) {
      errors.email = "Enter a valid email";
    }
  
    if (!regexPassword.test(userData.password)) {
      errors.password = "The password must have une number";
    }

    if (userData.password.length < 6 || userData.password.length > 10 ){
      errors.password = "Password between 6 and 10 characters"
    }
  
    return errors;
  }