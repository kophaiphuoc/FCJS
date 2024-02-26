export const uniqueArray = (arr) => {
  let uniqueArr = [];
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};

export function filterByTypes(arr, types) {
    return arr.filter(item => !types.includes(typeof item));
}
