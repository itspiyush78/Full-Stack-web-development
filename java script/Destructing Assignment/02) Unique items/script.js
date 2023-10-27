function UniqueElement(arr) {
  let newArr = new Set(arr);
  let value = [...newArr];
  return value;
}
let arr = [1, 2, 3, 1, 3, 5, 7, 8, 8, 10, 2];

console.log(UniqueElement(arr));
