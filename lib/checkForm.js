export const checkFormForKey = (data, keysToIgnore) => {
  for (const key in data) {
    if (keysToIgnore.includes(key)) {
      continue;
    }
    if (
      data[key] === undefined ||
      data[key] === null ||
      data[key] === "" ||
      data[key] === 0
    ) {
      return key;
    }
  }
  return false;
};
