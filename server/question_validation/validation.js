var validate = function(regexString, truthy, falsy) {
  var regex = new RegExp(regexString);

  var error = function(value, expected) {
    return 'Expected ' + value + ' to be ' + String(expected) + ' instead of ' + String(!expected) + '!';
  };

  for (var i = 0; i < truthy.length; i++) {
    if (regex.test(truthy[i]) === false) {
      return error(truthy[i], true);
    }
  }

  for (var i = 0; i < falsy.length; i++) {
    if (regex.test(falsy[i]) === true) {
      return error(falsy[i], false);
    }
  }

  return 'Success! All test cases passed!';
};

module.exports = validate;