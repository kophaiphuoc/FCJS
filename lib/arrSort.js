export function quickSortWithDuplicates(arr, key, order = 'asc') {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex][key];
    const equal = [];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i][key];
        if (order === 'asc') {
            if (item < pivot) {
                left.push(arr[i]);
            } else if (item > pivot) {
                right.push(arr[i]);
            } else {
                equal.push(arr[i]);
            }
        } else if (order === 'desc') {
            if (item > pivot) {
                left.push(arr[i]);
            } else if (item < pivot) {
                right.push(arr[i]);
            } else {
                equal.push(arr[i]);
            }
        }
    }

    return [...quickSortWithDuplicates(left, key, order), ...equal, ...quickSortWithDuplicates(right, key, order)];
}
