function addFunction(a, b) {
  return a + b;
}

function subFunction(a, b) {
  return a - b;
}

function multFunction(a, b) {
  return a * b;
}

function divFunction(a, b) {
  if (b === 0) {
    return "Error...cant divide by zero brother...";
  } else {
    return a / b;
  }
}
module.exports = {
  addFunction,
  subFunction,
  multFunction,
  divFunction,
};
