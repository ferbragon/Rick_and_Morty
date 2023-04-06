
const regexEmail = /^(?=.{1,35}$)[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const regexPassword = /^(?=.*\d)[\w\d]{6,10}$/;

export function validation(userData) {
    let errors = {};
  
    if (!regexEmail.test(userData.email)) {
      errors.email = "Enter a valid email";
    }
  
    if (!regexPassword.test(userData.password)) {
      errors.password = "Enter a valid password";
    }
  
    return errors;
  }