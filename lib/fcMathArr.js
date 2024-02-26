const totalSumForKey = (arrayOfObjects = [], keyToSum = "") => {
  if (arrayOfObjects.length === 0 || keyToSum === "") {
    return 0;
  }
  let sum = 0;
  for (const obj of arrayOfObjects) {
    if (obj.hasOwnProperty(keyToSum)) {
      sum += obj[keyToSum];
    } else if (typeof obj === "object") {
      const childSum = totalSumForKey(Object.values(obj), keyToSum);
      sum += childSum;
    }
  }
  return sum;
};

const sumMutilArrayKeepIndex = (...arrays) => {
  if (arrays.length === 0) {
    return [];
  }

  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new Error("All parameters must be arrays");
    }
  }
  const length = arrays[0].length;
  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i].length !== length) {
      throw new Error("All arrays must have the same length");
    }
  }
  const result = [];
  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (const arr of arrays) {
      sum += arr[i];
    }
    result.push(sum);
  }

  return result;
};

const sumArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = {
  totalSumForKey,
  sumMutilArrayKeepIndex,
  sumArray
};
