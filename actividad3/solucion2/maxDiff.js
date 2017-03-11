var arr = [200, 50, 67, 89, 32, 13, 4, 5];

function getMaxDiff(numbers) {
  var maxNum = getMax(numbers);
  var minNum = getMin(numbers);

  return maxNum - minNum;
}

function getMax(numbers) {
  var max = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if( max < numbers[i] ) {
      max = numbers[i]
    }
  }

  return max;
}

function getMin(numbers) {
  var min = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if( min > numbers[i] ) {
      min = numbers[i]
    }
  }

  return min;
}

console.log(getMaxDiff(arr));
