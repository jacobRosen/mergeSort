const split = fullArr => {
  let mid = Math.floor(fullArr.length/2);
  return [fullArr.slice(0, mid), fullArr.slice(mid)];
}

function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length && arr2.length) {
    let mergedNum = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    sorted.push(mergedNum)
  }
  if (arr1.length) {
    sorted.push(...arr1);
  } else if (arr2.length) {
    sorted.push(...arr2);
  }

  return sorted;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let [arr1, arr2] = split(arr);
  return merge(mergeSort(arr1), mergeSort(arr2))
}

let test = [1, 2, 4, 8];
let test2 = [3, 5, 6];
let test3 = [2, 4, 1, 6, 3];
// console.log(merge(test, test2).toString());
// console.log(mergeSort(test3).toString());
mergeSort(test3);
