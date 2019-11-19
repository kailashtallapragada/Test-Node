class InputValidator {

  static validateName(name) {
    if (typeof name === 'string' && name.length > 0) {
      return Promise.resolve(true);
    }
    return Promise.reject({ statusCode: 400, message: 'Name must be a valid non empty string.' });
  }

  static validateEmail(email) {
    // https://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return Promise.resolve(true);
    }
    return Promise.reject({ statusCode: 400, message: `${email} is not a valid email` });
  }

  static validatePassword(password) {
    if (typeof password === 'string' && password.length > 0) {
      return Promise.resolve(true);
    }
    return Promise.reject({ statusCode: 400, message: 'password must be a valid non empty string ' });
  }
}

module.exports.InputValidator = InputValidator;
