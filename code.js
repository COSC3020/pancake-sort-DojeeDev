function flip(array, n) {
  var mid = n / 2;

  for (i = 0; i < mid; i++) {
    var tmp = array[i];
    array[i] = array[n-i];
    array[n-i] = tmp;
  }

  return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
  for (var i=0; i < array.length; i++) {
    for (var j=i; j > 0 && array[j-1] > array[j]; j--) { // same as insertion sort, insert element j into the correct postion moving to the left
      // These 3 flips are the same as swaping array[j] and array[j-1]
      array = flip(array, j);
      array = flip(array, 1);
      array = flip(array, j);
    }
  }
  return array;
}
