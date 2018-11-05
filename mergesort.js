const split = fullArr => {
  let mid = Math.floor(fullArr.length/2);
  return [fullArr.slice(0, mid), fullArr.slice(mid)];
}

let test = [1, 5, 3, 8, 2, 6, 9, 7, 4];
console.log(split(test));
