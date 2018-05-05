export const isExistErreurSignIn = (email, password) => {
  if (!validateEmail(email)) {
    return { isErreur: true, message: 'Email not valid' };
  } else if (password.length < 4) {
    return { isErreur: true, message: 'password not valid' };
  }
  // else if (!validatePassword(password)) {
   // return { isErreur: true, message: 'A password must be at least eight characters long and contain letters (uppercase and lowercase)' };
  //}
  return { isErreur: false, message: '' };
};
export const isExistErreurForgetPassword = (email) => {
  if (!validateEmail(email)) {
    return { isErreur: true, message: 'Email not valid' };
  }
  return { isErreur: false, message: '' };
};
export const isDisabledSignUp = (userName, password, email) => {
  if (userName === '' || password === '' || email === '') {
    return true;
  }
  return false;
};
export const isDisabledSignIn = (email, password) => {
  if (password === '' || email === '') {
    return true;
  }
  return false;
};
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const validatePassword = (password) => {
  const re =(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
  return re.test(password);
};
