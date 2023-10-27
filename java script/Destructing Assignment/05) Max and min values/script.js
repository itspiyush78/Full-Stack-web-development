function MaxAndMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

let value = [5, 3, 7, 1, 8];
console.log(MaxAndMin(value));
