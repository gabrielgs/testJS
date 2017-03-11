var arr = [200, 50, 67, 89, 32, 13, 4, 5];

function maxDiff(numbers) {
  var maxNum = Math.max(...numbers);
  var minNum = Math.min(...numbers);

  return maxNum - minNum;
}

console.log(maxDiff(arr));


