// Keep a reference to the old check.
let _check = check;
// According to https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#2-unsupported-syntax,
// refacor try-catch block to make the containing function optimizable.
let nonoptimizableTryCatchBlock = function (value, pattern, message) {
  try {
    _check(value, pattern);
  } catch (error) {
    throw new Error(message);
  }
};
check = function (value, pattern, message) {
  if (typeof message === 'undefined') {
    _check(value, pattern);
  } else {
    nonoptimizableTryCatchBlock(value, pattern, message);
  }
};
