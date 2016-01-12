Tinytest.add('Backward compatibility', function (test) {
  test.throws(function () {
    check('foo', Number);
  });
});

Tinytest.add('Can throw error', function (test) {
  test.throws(function () {
    check('foo', Number, 'Custom message');
  });
});

Tinytest.add('Custom message', function (test) {
  let errorMsg = 'Expect a number.';
  try {
    check('foo', Number, errorMsg);
  } catch (error) {
    test.equal(errorMsg, error.message);
  }
});
