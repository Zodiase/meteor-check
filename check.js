// Keep a reference to the old check.
let _check = check;
check = function (value, pattern, message) {
  if (typeof message === 'undefined') {
    _check(value, pattern);
  } else {
    try {
      _check(value, pattern);
    } catch (error) {
      throw new Error(message);
    }
  }
};
