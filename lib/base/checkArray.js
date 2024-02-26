function isArray(obj) {
  return Array.isArray(obj);
}

function isEmptyArray(arr) {
  return arr.length === 0;
}

module.exports = {
  isArray,
  isEmptyArray,
};
