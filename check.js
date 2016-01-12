// Keep a reference to the old check.
let _check = check;
check = function (value, pattern, message) {
  try {
    _check(value, pattern);
  } catch (error) {
    if (typeof message != 'undefined') {
      throw new Error(message);
    } else {
      throw error;
    }
  }
};
