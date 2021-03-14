
exports.min = function min (array) {
  if (!(Array.isArray(array)) || !(array.length)){
    return 0;
  }
  let min = array[0];
  for (let i=0; i < array.length; i++){
    if (min > array[i]) min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  if (!(Array.isArray(array)) || !(array.length)){
    return 0;
  }
  let max = array[0];
  for (let i = 1; i < array.length; ++i){
    if (max < array[i]) max = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if (!(Array.isArray(array)) || !(array.length)){
    return 0;
  }
  let sum = 0;
  for (let i=0; i < array.length; i++){
    sum = sum + array[i];
  }
  let avg = sum/array.length;
  return avg;
}
