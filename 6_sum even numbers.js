let array = [1, 2, 10, 3, 5, 7];

function evenNum(arr1) {
  result = 0;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] % 2 == 0) {
          result = result + arr1[i];
      }
  }
  if (result == 0) {
      console.log("No even numbers found");
  }
  return result
}
console.log(evenNum(array));


